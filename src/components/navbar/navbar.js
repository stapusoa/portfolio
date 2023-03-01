import './App.css';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
    return (
        <nav class="navbar">
            <div class="navbar-left">
                <div class="navbar-logo">
                    <a href="/pages/home.js">
                    <img src="../../public/logo.svg" alt="ST" />
                    </a>
                </div>
                <div class="navbar-link">
                    <a href="../../public/stapusoa-resume-2023.pdf" download="stapusoa-resume-2023.pdf">RESUME</a>
                </div>
            </div>
            <div class="navbar-right">
                <button class="navbar-toggle" type="button">
                    <MenuIcon />
                </button>
            </div>
    
            <ul class="nav-list">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Fishbowl Go App</a>
                </li>
                <li>
                    <a href="#">Quarium Hosting Website</a>
                </li>
                <li>
                    <a href="#">Travelpass Website</a>
                </li>
            </ul>
        </nav>
        );
    }
  

export default Navbar;
 