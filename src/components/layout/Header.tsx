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
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-6 md:px-14 lg:px-30">
        <Link
          to="/"
          className="flex items-center gap-2 pt-1 font-serif text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2 rounded"
        >
          <img
            src={showPrimaryLogo ? LOGO : LOGO_SECONDARY}
            alt="Sara Tapusoa — home"
            className="h-5 w-auto"
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
              className="rounded py-2 focus-visible:py-0 font-medium text-primary transition-opacity hover:text-primary/70 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2"
            >
              download resume
            </a>

            <button
              type="button"
              aria-label="Search"
              className="text-default transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2 rounded"
            >
              <Search aria-hidden="true" className="size-5" />
            </button>

            <Link
              to="/about"
              aria-label="About Sara"
              className="text-default transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2 rounded"
            >
              <User aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
