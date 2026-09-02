import { useState } from 'react';
import { ChevronDown, Menu, Search, User, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { navigation } from '@/lib/constants/routes';

import {
  menuPopupItemStyles,
  menuPopupStyles,
  menuTriggerStyles,
  mobileNavigationLinkStyles,
  navigationLinkStyles,
} from '@/components/ui/Navigation/styles';

import type { NavigationItem } from '@/components/ui/Navigation/types';

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (name: string) => {
    setOpenMenu((current) => (current === name ? null : name));
  };

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="hidden items-center lg:flex"
      >
        <ul className="flex items-center gap-12">
          {navigation.map((item: NavigationItem) => (
            <li
              key={item.name}
              className="relative"
            >
              {item.type === 'menu' ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.name}
                    aria-controls={`navigation-menu-${item.name}`}
                    onClick={() => toggleMenu(item.name)}
                    className={menuTriggerStyles()}
                    data-popup-open={
                      openMenu === item.name ? '' : undefined
                    }
                  >
                    {item.name}

                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 transition-transform duration-200 ${
                        openMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openMenu === item.name && (
                    <ul
                      id={`navigation-menu-${item.name}`}
                      className={`${menuPopupStyles()} absolute left-0 top-full mt-3`}
                    >
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.download ? (
                            <a
                              href={subItem.href}
                              download
                              onClick={() => setOpenMenu(null)}
                              className={menuPopupItemStyles()}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <NavLink
                              to={subItem.href}
                              onClick={() => setOpenMenu(null)}
                              className={({ isActive }) =>
                                menuPopupItemStyles({
                                  active: isActive,
                                })
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.hash ? (
                <a
                  href={item.href}
                  className={navigationLinkStyles()}
                >
                  {item.name}
                </a>
              ) : item.download ? (
                <a
                  href={item.href}
                  download
                  className={navigationLinkStyles()}
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    navigationLinkStyles({
                      active: isActive,
                    })
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label={
          isMobileOpen
            ? 'Close navigation menu'
            : 'Open navigation menu'
        }
        aria-expanded={isMobileOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMobileOpen((open) => !open)}
        className="inline-flex items-center justify-center rounded-lg p-2 text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default lg:hidden"
      >
        {isMobileOpen ? (
          <X
            aria-hidden="true"
            className="size-6"
          />
        ) : (
          <Menu
            aria-hidden="true"
            className="size-6"
          />
        )}
      </button>

      {isMobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full z-50 border-t border-default/10 bg-background/95 shadow-lg backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto max-w-7xl">
            <ul className="space-y-1 py-4">
              {navigation.map((item: NavigationItem) => (
                <li key={item.name}>
                  {item.type === 'menu' ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openMenu === item.name}
                        aria-controls={`mobile-navigation-menu-${item.name}`}
                        onClick={() => toggleMenu(item.name)}
                        className={mobileNavigationLinkStyles()}
                      >
                        <span className="flex w-full items-center justify-between">
                          {item.name}

                          <ChevronDown
                            aria-hidden="true"
                            className={`size-4 transition-transform duration-200 ${
                              openMenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>

                      {openMenu === item.name && (
                        <ul
                          id={`mobile-navigation-menu-${item.name}`}
                          className="space-y-1 pb-2 pl-4"
                        >
                          {item.items.map((subItem) => (
                            <li key={subItem.name}>
                              {subItem.download ? (
                                <a
                                  href={subItem.href}
                                  download
                                  onClick={closeMobileMenu}
                                  className={mobileNavigationLinkStyles()}
                                >
                                  {subItem.name}
                                </a>
                              ) : (
                                <NavLink
                                  to={subItem.href}
                                  onClick={closeMobileMenu}
                                  className={({ isActive }) =>
                                    mobileNavigationLinkStyles({
                                      active: isActive,
                                    })
                                  }
                                >
                                  {subItem.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.hash ? (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={mobileNavigationLinkStyles()}
                    >
                      {item.name}
                    </a>
                  ) : item.download ? (
                    <a
                      href={item.href}
                      download
                      onClick={closeMobileMenu}
                      className={mobileNavigationLinkStyles()}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        mobileNavigationLinkStyles({
                          active: isActive,
                        })
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <ul className="space-y-1 border-t border-default/10 py-4">
              <li>
                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMobileMenu}
                  className={mobileNavigationLinkStyles()}
                >
                  download resume
                </a>
              </li>

              <li>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className={mobileNavigationLinkStyles()}
                >
                  <span className="flex items-center gap-2">
                    <Search
                      aria-hidden="true"
                      className="size-5"
                    />
                    Search
                  </span>
                </button>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    mobileNavigationLinkStyles({
                      active: isActive,
                    })
                  }
                >
                  <span className="flex items-center gap-2">
                    <User
                      aria-hidden="true"
                      className="size-5"
                    />
                    About
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}