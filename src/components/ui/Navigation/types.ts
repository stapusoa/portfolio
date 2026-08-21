export type NavigationLinkItem = {
  type: 'link';
  name: string;
  href: string;
  hash?: boolean;
  download?: boolean;
};

export type NavigationMenuItem = {
  type: 'menu';
  name: string;
  items: NavigationLinkItem[];
};

export type NavigationItem =
  | NavigationLinkItem
  | NavigationMenuItem;