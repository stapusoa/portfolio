import { Outlet } from 'react-router-dom';

import ScrollManager from '@/lib/hooks/useScrollToTop';

import { ErrorBoundary } from './ErrorBoundary';
import { Footer } from './Footer';
import { Header } from './Header';

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Rendered once here, for every route. */}
      <ScrollManager />

      {/*
        Lets keyboard and screen-reader users jump the nav. Visually hidden
        until focused.
      */}
      <a
        href="#main"
        className="sr-only rounded-md bg-primary px-4 py-1 focus:px-4 focus:py-1 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-default focus-visible:ring-offset-2"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="relative flex-1 pt-16">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
}
