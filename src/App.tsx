import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollManager from '../src/lib/hooks/useScrollToTop';
import { AppLayout } from './components/layout/AppLayout';
import Home from './pages/core/Home';
import About from './pages/core/About';
import Contact from './pages/core/Contact';
import Project1 from './pages/case-studies/Project1';
import Project2 from './pages/case-studies/Project2';
import Project3 from './pages/case-studies/Project3';

function App() {
  return (
    <Router>
      <ScrollManager />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/project1" element={<Project1 />} />
            <Route path="/projects/project2" element={<Project2 />} />
            <Route path="/projects/project3" element={<Project3 />} />
          </Route>
        </Routes>
    </Router>
  );
};

export default App;
