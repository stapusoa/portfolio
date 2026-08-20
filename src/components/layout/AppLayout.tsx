import { Outlet } from 'react-router-dom';
import ScrollManager from '../../lib/hooks/useScrollToTop';
import { Header } from './Header';
import { Footer } from './Footer';

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="relative flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}