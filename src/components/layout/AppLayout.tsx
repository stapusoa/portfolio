import { Outlet } from 'react-router-dom';
import ScrollManager from '../../lib/hooks/useScrollToTop';
import { Header } from './Header';
import { Footer } from './Footer';

export function AppLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}