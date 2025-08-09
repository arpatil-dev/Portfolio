import React, { useEffect, useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import '../assets/styles/Navigation.scss';

const drawerWidth = 240;
const navItems = [
  ['About', 'about'],
  ['Expertise', 'expertise'], 
  ['Skills', 'skills'], 
  ['Experience', 'experience'], 
  ['Education', 'education'], 
  ['Projects', 'projects'], 
  ['Contact', 'contact']
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('about');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }

      // Track active section
      const sections = navItems.map(item => item[1]);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (section: string) => {
    console.log('Scrolling to section:', section)
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to:', targetElement);
    } else {
      console.error(`Element with id "${section}" not found`);
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Desktop Side Dot Navigation */}
      <nav className="side-nav-container">
        {/* Theme Toggle */}
        <div className="theme-toggle">
          <IconButton
            className="theme-icon"
            onClick={() => modeChange()}
            aria-label="toggle theme"
          >
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>

        {/* Side Dot Navigation */}
        <div className="side-nav">
          {navItems.map((item, index) => (
            <div
              key={item[0]}
              className={`nav-dot ${activeSection === item[1] ? 'active' : ''}`}
              onClick={() => scrollToSection(item[1])}
              title={item[0]}
            >
              <span className="dot"></span>
              <span className="nav-label">{item[0]}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="mobile-menu-toggle">
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="open drawer"
          className="mobile-toggle-btn"
        >
          <MenuIcon />
        </IconButton>
        
        {/* Theme Toggle for Mobile */}
        <IconButton
          className="mobile-theme-icon"
          onClick={() => modeChange()}
          aria-label="toggle theme"
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navigation;