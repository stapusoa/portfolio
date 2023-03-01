import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Proj1 from './pages/Proj1';
import Proj2 from './pages/Proj2';
import Proj3 from './pages/Proj3';



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
