import '../../App.css';
import './navbar.css';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  

   


    return (
        <div>
            <AppBar position="fixed" alignContent="center" elevation={0} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(5px)', boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.15)' }}>
                <Toolbar sx={{ height: '3vh', display: 'flex', justifyContent: 'space-between', paddingTop: '0.5vh' }}>
                    <div className="navbar-left">
                        <div className="navbar-logo" alignContent="center">
                            <a href="/pages/home.js">
                                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="ST" sx={{ alignContent: 'center' }}/>
                            </a>
                        </div>
                        <div className="App-link">
                            <a href="../../public/stapusoa-resume-2023.pdf" download="stapusoa-resume-2023.pdf">RESUME</a>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <IconButton sx={{ color: '#000000' }}
                            size="large"
                            edge="end"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenuClick}
                            color="inherit"
                            >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>
                                <a href="#">About</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#">Fishbowl Go App</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#">Quarium Hosting Website</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="#">Travelpass Website</a>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        );
}

  



