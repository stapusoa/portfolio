import { useState } from 'react';
import { ChevronDown, Menu, Search, User, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { navigation } from '@/lib/constants/routes';

import {
  menuTriggerStyles,
  mobileNavigationLinkStyles,
  navigationLinkStyles,
} from './styles';

import type { NavigationItem } from './types';

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
                  >
                    {item.name}

                    <ChevronDown
                      aria-hidden="true"
                      className="size-4"
                    />
                  </button>

                  {openMenu === item.name && (
                    <ul
                      id={`navigation-menu-${item.name}`}
                      className="absolute top-full left-0 mt-2 min-w-40 rounded-md bg-white p-2 shadow-lg"
                    >
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.download ? (
                            <a
                              href={subItem.href}
                              download
                              onClick={() => setOpenMenu(null)}
                              className={navigationLinkStyles()}
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <NavLink
                              to={subItem.href}
                              onClick={() => setOpenMenu(null)}
                              className={({ isActive }) =>
                                navigationLinkStyles({
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
        className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
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
          className="absolute inset-x-0 top-full border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
        >
          <ul className="space-y-2 py-8">
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
                      <span className="flex items-center gap-1">
                        {item.name}

                        <ChevronDown
                          aria-hidden="true"
                          className="size-4"
                        />
                      </span>
                    </button>

                    {openMenu === item.name && (
                      <ul
                        id={`mobile-navigation-menu-${item.name}`}
                        className="pl-6"
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

          {/*
            Actions that live in the header's action cluster on desktop
            (hidden below lg). They're surfaced here so they stay reachable
            on mobile.
          */}
          <ul className="space-y-2 border-t border-border py-8">
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
        </nav>
      )}
    </>
  );
}