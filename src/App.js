import './App.css';
import Navbar from './components/navbar/navbar.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Proj1 from './pages/proj1.js';
import Proj2 from './pages/proj2.js';
import Proj3 from './pages/proj3.js';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Proj1 />
      <Proj2 />
      <Proj3 />
      <About />
    </div>
  );
}

export default App;
