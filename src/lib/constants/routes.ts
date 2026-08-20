// Route links use react-router <Link>; hash targets on the home page use a
// plain <a> so the browser handles anchor scrolling (incl. cross-page).
import type { NavigationItem } from '@/components/ui/Navigation/types';

export const navigation: NavigationItem[] = [
  {
    type: 'link',
    name: 'About',
    href: '/about',
    hash: false,
    download: false,
  },

  {
    type: 'menu',
    name: 'Work',
    items: [
      {
        type: 'link',
        name: 'UX Engineering',
        href: '/work/ux-engineering',
      },
      {
        type: 'link',
        name: 'Design Systems',
        href: '/work/design-systems',
      },
    ],
  },

  {
    type: 'link',
    name: 'Resume',
    href: '/resume.pdf',
    download: true,
  },
];