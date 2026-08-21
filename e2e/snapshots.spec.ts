import { test, expect } from '@playwright/test';
import { AREAS, VIEWPORTS } from './areas';
import { prepareArea } from './helpers';

/**
 * Visual-regression: each area x breakpoint is diffed against a committed
 * baseline in e2e/snapshots.spec.ts-snapshots/. Fails when a page changes.
 *
 *   pnpm test:e2e            run against baselines
 *   pnpm test:e2e:update     regenerate baselines after intended changes
 */
for (const area of AREAS) {
  for (const vp of VIEWPORTS) {
    test(`${area.name} @ ${vp.label}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await prepareArea(page, area.path);
      await expect(page).toHaveScreenshot(`${area.name}--${vp.label}.png`, {
        fullPage: true,
      });
    });
  }
}
