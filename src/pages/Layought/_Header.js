import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMobileView = useMediaQuery('(max-width: 600px)');

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const renderMobileMenu = (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="header-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="header-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/" onClick={handleMenuClose}>
          Home
        </MenuItem>
        <MenuItem component={Link} to="/jobs" onClick={handleMenuClose}>
          Job Listings
        </MenuItem>
        <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
          Login
        </MenuItem>
        <MenuItem component={Link} to="/register" onClick={handleMenuClose}>
          Register
        </MenuItem>
      </Menu>
    </div>
  );

  const renderDesktopMenu = (
    <div>
      <Button component={Link} to="/" color="inherit">
        Home
      </Button>
      <Button component={Link} to="/jobs" color="inherit">
        Job Listings
      </Button>
      <Button component={Link} to="/login" color="inherit">
        Login
      </Button>
      <Button component={Link} to="/register" color="inherit">
        Register
      </Button>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>
        {isMobileView ? renderMobileMenu : renderDesktopMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
