// Single source of truth for what gets snapshotted.
// Both capture.spec.ts (PNGs for review) and snapshots.spec.ts (regression
// baselines) iterate over these AREAS x VIEWPORTS.
import { BREAKPOINTS } from '../src/lib/constants/breakpoints';

export type Area = {
  /** Stable slug used in screenshot filenames, e.g. "projects-project1". */
  name: string;
  /** Route path passed to page.goto (relative to baseURL). */
  path: string;
};

/** Every routed page in App.tsx. Keep in sync when routes change. */
export const AREAS: Area[] = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'projects-project1', path: '/projects/project1' },
  { name: 'projects-project2', path: '/projects/project2' },
  { name: 'projects-project3', path: '/projects/project3' },
];

export type Viewport = {
  /** Breakpoint label used in filenames, e.g. "3xl". */
  label: string;
  width: number;
  height: number;
};

// A fixed viewport height keeps layout deterministic; full-page screenshots
// still capture the entire scroll height regardless of this value.
const VIEWPORT_HEIGHT = 900;

// Full breakpoint sweep, derived from the app's own breakpoints so the two
// never drift. xs (0) is dropped — it isn't a real device width.
export const VIEWPORTS: Viewport[] = Object.entries(BREAKPOINTS)
  .filter(([, width]) => width > 0)
  .sort(([, a], [, b]) => a - b)
  .map(([label, width]) => ({ label, width, height: VIEWPORT_HEIGHT }));
