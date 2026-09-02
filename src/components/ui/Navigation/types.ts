import { ReactElement } from "react"

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

export type PageType =
  | 'home'
  | 'about'
  | 'featured'
  | 'services'
  | 'contact'
  | 'work'
  | 'resources'
  | 'search'

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  heroHeight?: number;
  onLogoClick: () => void;
  onShopClick: () => void;
  onSellClick: () => void;
  onCartClick: () => void;
  cartItemCount: number;
}

export interface Socials {
  platform: string;
  href: string;
  icon: ReactElement;
}
