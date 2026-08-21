import type { Page } from '@playwright/test';

/**
 * Kill CSS transitions/animations and the text caret so screenshots are
 * pixel-stable. framer-motion is additionally handled by `reducedMotion:
 * 'reduce'` in playwright.config.ts, which drives the app's useReducedMotion.
 */
export async function freezeAnimations(page: Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        scroll-behavior: auto !important;
        caret-color: transparent !important;
      }
    `,
  });
}

/**
 * Scroll the full height of the page in steps to trip every IntersectionObserver
 * (the `Reveal` component fades sections in on first view with `once: true`),
 * then return to the top. Without this, off-screen sections capture blank.
 */
export async function revealAll(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const height = () => document.body.scrollHeight;
    for (let y = 0; y < height(); y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, height());
    await new Promise((r) => setTimeout(r, 200));
    window.scrollTo(0, 0);
  });
}

/** Navigate to an area and get it into a deterministic, fully-revealed state. */
export async function prepareArea(page: Page, path: string): Promise<void> {
  await page.goto(path, { waitUntil: 'networkidle' });
  await freezeAnimations(page);
  await revealAll(page);
  await page.evaluate(() => document.fonts.ready);
  // Let reveals settle at their final opacity after the scroll pass.
  await page.waitForTimeout(300);
}
