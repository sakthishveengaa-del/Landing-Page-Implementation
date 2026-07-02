import { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


import logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width:950px)");

  useEffect(() => {
    if (isMobile === false) {
      if (mobileOpen === true) {
        setMobileOpen(false);
      }
    }
  }, [isMobile, mobileOpen]);

  const handleDrawerToggle = (event) => {
    if (event && event.currentTarget) {
      event.currentTarget.blur();
    }

    if (mobileOpen === true) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleMobileNavClick = (id) => {
    handleScroll(id);
    setMobileOpen(false); 
  };

  return (
    // Main top navigation bar
    <AppBar position="sticky" elevation={0} className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar-container">

          {/* SECTION 1: Logo and Brand Info */}
          <Box className="logo-section" id="nav-logo-section" onClick={() => handleScroll("home")}>
            <img src={logo} alt="MediConnect Logo" className="logo" />
            <Box className="logo-text-wrapper">
              <Typography className="logo-text">
                MediConnect
              </Typography>
              <Typography className="logo-subtext">
                Healthcare Ecosystem
              </Typography>
            </Box>
          </Box>

          {/* SECTION 2: Desktop Navigation Links (Hidden on mobile screens) */}
          <Box className="menu-section">
            <Button disableRipple id="nav-btn-home" onClick={() => handleScroll("home")}>
              Home
            </Button>

            <Button
              disableRipple
              endIcon={<KeyboardArrowDownIcon />}
              id="nav-btn-solutions"
            >
              Solutions
            </Button>

            <Button
              disableRipple
              endIcon={<KeyboardArrowDownIcon />}
              id="nav-btn-patients"
            >
              For Patients
            </Button>

            <Button
              disableRipple
              endIcon={<KeyboardArrowDownIcon />}
              id="nav-btn-providers"
            >
              For Providers
            </Button>

            <Button disableRipple id="nav-btn-pricing">
              Pricing
            </Button>

            <Button disableRipple id="nav-btn-resources">
              Resources
            </Button>
          </Box>

          {/* SECTION 3: Desktop Sign Up and Login Buttons */}
          <Box className="auth-section">
            <Button
              className="signup-btn"
              variant="outlined"
              disableRipple
              startIcon={<PersonOutlinedIcon />}
              id="nav-btn-signup"
            >
              Sign up
            </Button>

            <Button
              className="login-btn"
              variant="contained"
              disableRipple
              startIcon={<PersonOutlinedIcon />}
              id="nav-btn-login"
            >
              Login
            </Button>
          </Box>

          {/* SECTION 4: Hamburger Menu Button (Only visible on mobile screens) */}
          <IconButton
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* SECTION 5: Slide-out Mobile Navigation Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: "mobile-drawer" }}
          >
            {/* Drawer Header containing Logo and Close Button */}
            <Box className="drawer-header">
              <Box className="logo-section" onClick={() => handleMobileNavClick("home")}>
                <img src={logo} alt="MediConnect Logo" className="logo" />
                <Box className="logo-text-wrapper">
                  <Typography className="logo-text">MediConnect</Typography>
                  <Typography className="logo-subtext">Healthcare Ecosystem</Typography>
                </Box>
              </Box>
              <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            
            {/* Drawer Navigation Links */}
            <List className="drawer-menu-list">
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleMobileNavClick("home")} id="mobile-nav-btn-home">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton id="mobile-nav-btn-solutions" onClick={handleDrawerToggle}>
                  <ListItemText primary="Solutions" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton id="mobile-nav-btn-patients" onClick={handleDrawerToggle}>
                  <ListItemText primary="For Patients" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton id="mobile-nav-btn-providers" onClick={handleDrawerToggle}>
                  <ListItemText primary="For Providers" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton id="mobile-nav-btn-pricing" onClick={handleDrawerToggle}>
                  <ListItemText primary="Pricing" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton id="mobile-nav-btn-resources" onClick={handleDrawerToggle}>
                  <ListItemText primary="Resources" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            
            {/* Drawer Action Buttons */}
            <Box className="drawer-auth-section">
              <Button
                className="signup-btn"
                variant="outlined"
                disableRipple
                startIcon={<PersonOutlinedIcon />}
                id="mobile-nav-btn-signup"
                onClick={handleDrawerToggle}
                fullWidth
              >
                Sign up
              </Button>
              <Button
                className="login-btn"
                variant="contained"
                disableRipple
                startIcon={<PersonOutlinedIcon />}
                id="mobile-nav-btn-login"
                onClick={handleDrawerToggle}
                fullWidth
              >
                Login
              </Button>
            </Box>
          </Drawer>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
