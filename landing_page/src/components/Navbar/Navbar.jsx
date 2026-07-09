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
import { Icon } from "@iconify/react";

import logo from "../../assets/images/logo.png";
import "./Navbar.scss";

const NAV_ITEMS = [
  { label: "Home", id: "home", hasDropdown: false, isScroll: true },
  { label: "Solutions", id: "solutions", hasDropdown: true, isScroll: false },
  { label: "For Patients", id: "patients", hasDropdown: true, isScroll: false },
  { label: "For Providers", id: "providers", hasDropdown: true, isScroll: false },
  { label: "Pricing", id: "pricing", hasDropdown: false, isScroll: false },
  { label: "Resources", id: "resources", hasDropdown: false, isScroll: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:950px)");

  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  const handleDrawerToggle = (event) => {
    if (event && event.currentTarget) {
      event.currentTarget.blur();
    }
    setMobileOpen((prevOpen) => !prevOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMobileNavClick = (id) => {
    handleScroll(id);
    setMobileOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar-container">

          <Box className="logo-section" id="nav-logo-section" onClick={() => handleScroll("home")}>
            <img src={logo} alt="MediConnect Logo" className="logo" />
            <Box className="logo-text-wrapper">
              <Typography className="logo-text">MediConnect</Typography>
              <Typography className="logo-subtext">Healthcare Ecosystem</Typography>
            </Box>
          </Box>

          <Box className="menu-section">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                disableRipple
                id={`nav-btn-${item.id}`}
                onClick={item.isScroll ? () => handleScroll(item.id) : undefined}
                endIcon={item.hasDropdown ? <Icon icon="tabler:chevron-down" width="16" height="16" /> : undefined}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box className="auth-section">
            <Button
              className="signup-btn"
              variant="outlined"
              disableRipple
              startIcon={<Icon icon="cuida:user-outline" width="18" height="18" />}
              id="nav-btn-signup"
            >
              Sign up
            </Button>

            <Button
              className="login-btn"
              variant="contained"
              disableRipple
              startIcon={<Icon icon="cuida:user-outline" width="18" height="18" />}
              id="nav-btn-login"
            >
              Login
            </Button>
          </Box>

          <IconButton
            className="mobile-menu-btn"
            aria-label="Open menu"
            onClick={handleDrawerToggle}
          >
            <Icon icon="tabler:menu-2" width="24" height="24" />
          </IconButton>

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: "mobile-drawer" }}
          >
            <Box className="drawer-header">
              <Box className="logo-section" onClick={() => handleMobileNavClick("home")}>
                <img src={logo} alt="MediConnect Logo" className="logo" />
                <Box className="logo-text-wrapper">
                  <Typography className="logo-text">MediConnect</Typography>
                  <Typography className="logo-subtext">Healthcare Ecosystem</Typography>
                </Box>
              </Box>
              <IconButton onClick={handleDrawerToggle} aria-label="Close menu">
                <Icon icon="tabler:x" width="24" height="24" />
              </IconButton>
            </Box>
            <Divider />

            <List className="drawer-menu-list">
              {NAV_ITEMS.map((item) => (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    id={`mobile-nav-btn-${item.id}`}
                    onClick={item.isScroll ? () => handleMobileNavClick(item.id) : handleDrawerToggle}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />

            <Box className="drawer-auth-section">
              <Button
                className="signup-btn"
                variant="outlined"
                disableRipple
                startIcon={<Icon icon="cuida:user-outline" width="18" height="18" />}
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
                startIcon={<Icon icon="cuida:user-outline" width="18" height="18" />}
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

