import { test } from '@playwright/test';
import { AREAS, VIEWPORTS } from './areas';
import { prepareArea } from './helpers';

/**
 * Writes a full-page PNG for every area x breakpoint to screenshots/.
 * Not a regression check — these are for eyeballing and sharing.
 *
 *   pnpm snapshots
 */
for (const area of AREAS) {
  for (const vp of VIEWPORTS) {
    test(`capture ${area.name} @ ${vp.label}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await prepareArea(page, area.path);
      await page.screenshot({
        path: `screenshots/${area.name}--${vp.label}.png`,
        fullPage: true,
      });
    });
  }
}
