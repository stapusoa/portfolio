import { useEffect, useState } from 'react';
import { Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/lib/cn';

import { Navigation } from '@/components/ui/Navigation/NavigationMenu';

const LOGO = '/logo.svg';
const LOGO_SECONDARY = '/logo-secondary.svg';

/**
 * Tracks two independent scroll thresholds with a single scroll listener:
 * - `scrolled`: past a small offset, used to fade in the header's border/blur.
 * - `pastHero`: past the hero section, used to swap the logo variant.
 */
function useScrollState(heroHeight: number) {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setPastHero(y > heroHeight);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [heroHeight]);

  return { scrolled, pastHero };
}

type HeaderProps = {
  heroHeight?: number;
};

export function Header({ heroHeight = 600 }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { scrolled, pastHero } = useScrollState(heroHeight);

  // On the home page the hero is dark, so use the primary logo until the user
  // scrolls past it; everywhere else use the secondary logo.
  const showPrimaryLogo = isHomePage && !pastHero;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight"
        >
          <img
            src={showPrimaryLogo ? LOGO : LOGO_SECONDARY}
            alt="Sara Tapusoa — home"
            className="h-6 w-auto"
          />
        </Link>

        {/*
          The primary nav and the action cluster collapse at the SAME breakpoint
          (lg). Grouping them here means that below lg only the hamburger (which
          lives inside <Navigation />) is visible, and justify-between keeps it
          pinned to the right instead of stranding it mid-header on tablets.
        */}
        <div className="flex items-center gap-6">
          <Navigation />

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="/resume.pdf"
              download
              className="rounded-md px-3 py-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              download resume
            </a>

            <button
              type="button"
              aria-label="Search"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <Search aria-hidden="true" className="size-5" />
            </button>

            <Link
              to="/about"
              aria-label="About Sara"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <User aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
