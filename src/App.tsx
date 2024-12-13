import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project1 from './pages/projects/Project1';
import Project2 from './pages/projects/Project2';
import Project3 from './pages/projects/Project3';
import { Navbar } from './components/index';

const App: React.FC = () => {
  const basename = window.location.hostname === "stapusoa.github.io" ? "/portfolio" : "";

  return (
    <Router basename={basename}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;