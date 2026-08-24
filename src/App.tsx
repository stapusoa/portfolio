import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollManager from '../src/lib/hooks/useScrollToTop';
import { AppLayout } from './components/layout/AppLayout';
import Home from './pages/core/Home';
import About from './pages/core/About';
import Contact from './pages/core/Contact';
import Work from './pages/work/Work';
import { CaseStudy } from './pages/work/CaseStudy';

function App() {
  return (
    <Router>
      <ScrollManager />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<CaseStudy />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
