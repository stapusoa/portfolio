// Route links use react-router <Link>; hash targets on the home page use a
// plain <a> so the browser handles anchor scrolling (incl. cross-page).
//
// Every `href` below must resolve to a route declared in `src/App.tsx`. Case
// study hrefs must match an `id` in `src/features/case-study/data/case-studies.tsx`
// — this list previously advertised five case studies that did not exist, so
// most of the nav dead-ended on "Project not found".
import type { NavigationItem } from '@/components/ui/Navigation/types';

export const navigation: NavigationItem[] = [
  {
    type: 'menu',
    name: 'work',
    items: [
      {
        type: 'link',
        name: 'Fishbowl Go',
        href: '/work/fishbowl-go',
      },
      {
        type: 'link',
        name: 'Travelpass Web',
        href: '/work/travelpass-web',
      },
      {
        type: 'link',
        name: 'Travelpass Products',
        href: '/work/travelpass-products',
      },
      {
        type: 'link',
        name: 'All work',
        href: '/work',
      },
    ],
  },
  {
    type: 'link',
    name: 'about',
    href: '/about',
    hash: false,
    download: false,
  },
  {
    type: 'link',
    name: 'contact',
    href: '/contact',
    hash: false,
    download: false,
  },
];
