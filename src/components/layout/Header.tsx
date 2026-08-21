import { useEffect, useState } from 'react';
import { Feather, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/cn';

import {Navigation} from '@/components/ui/Navigation/NavigationMenu';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
          <span className="grid size-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <Feather aria-hidden="true" className="size-4" />
          </span>

          sara tapusoa
        </Link>

        <Navigation />

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="/resume.pdf"
            download
            className="text-sm font-semibold text-primary transition-opacity hover:opacity-80"
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
    </header>
  );
}