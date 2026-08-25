import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppLayout } from '@/components/layout';

/*
 * Routes are code-split. The case-study pages pull in ~1,200 lines of content
 * data plus every process illustration; eager-importing them put all of it in
 * the initial bundle for visitors who only ever see the home page.
 */
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Work = lazy(() => import('@/pages/Work'));
const CaseStudy = lazy(() =>
  import('@/pages/CaseStudy').then((m) => ({ default: m.CaseStudy })),
);
const NotFound = lazy(() => import('@/pages/NotFound'));

/** Reserves viewport height while a route chunk loads so the footer doesn't flash up the page. */
function RouteFallback() {
  return <div className="min-h-screen" aria-busy="true" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<RouteFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/work"
            element={
              <Suspense fallback={<RouteFallback />}>
                <Work />
              </Suspense>
            }
          />
          <Route
            path="/work/:id"
            element={
              <Suspense fallback={<RouteFallback />}>
                <CaseStudy />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
