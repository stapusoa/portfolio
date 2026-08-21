import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for full-page snapshots of every routed area.
 *
 *   pnpm snapshots        -> writes PNGs to screenshots/ for visual review
 *   pnpm test:e2e         -> visual-regression against committed baselines
 *   pnpm test:e2e:update  -> refresh the baselines after intended changes
 *
 * The dev server is started automatically; set BASE_URL to point at an
 * already-running server (e.g. a deployed preview) and it will be reused.
 */
const BASE_URL = process.env.BASE_URL ?? 'http://localhost:5173';

export default defineConfig({
  testDir: './e2e',
  // Snapshots are ordered (scroll passes take time); keep runs predictable.
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  // Tolerate sub-pixel font rendering differences between machines.
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled' } },
  use: {
    baseURL: BASE_URL,
    reducedMotion: 'reduce',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'pnpm dev --port 5173',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
