// Route links use react-router <Link>; hash targets on the home page use a
// plain <a> so the browser handles anchor scrolling (incl. cross-page).
import type { NavigationItem } from '@/components/ui/Navigation/types';

export const navigation: NavigationItem[] = [
  {
    type: 'menu',
    name: 'work',
    items: [
      {
        type: 'link',
        name: 'Fishbowl Go',
        href: '/work/fishbowlgo',
      },
      {
        type: 'link',
        name: 'Travelpass',
        href: '/work/travelpass',
      },
      {
        type: 'link',
        name: 'AlignedWest',
        href: '/work/alignedwest',
      },
      {
        type: 'link',
        name: 'Domo',
        href: '/work/domo',
      },
    ],
  },

  {
    type: 'menu',
    name: 'resources',
    items: [
      {
        type: 'link',
        name: 'UX Engineering',
        href: '/work/uxe',
      },
      {
        type: 'link',
        name: 'Design Systems',
        href: '/work/designsystems',
      },
    ],
  },
  {
    type: 'link',
    name: 'contact',
    href: '/contact',
    hash: false,
    download: false,
  },
];