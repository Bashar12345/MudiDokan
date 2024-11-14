import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';



const pages = [

  { name: 'Products', path: '/products' },

  { name: 'Pricing', path: '/pricing' },

  { name: 'Blog', path: '/blog' },

  { name: 'Hot Items', path: '/hot-items' },

  { name: 'Flash Sell', path: '/flash-sell' }

];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();
  const navigate = useNavigate();


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {

    navigate(path);

    handleCloseNavMenu(); // Close menu after navigating

  };

  return (
    <AppBar position="static" sx={{
      px: 1,
      display: { xs: "none", md: "block" }
    }}>



      <Toolbar disableGutters>


        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => handleNavigate(page.path)}>

                <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page,index) => (
            <Button
              key={page.name}
              onClick={() => handleNavigate(page.path)}
              
              sx={{ fontSize: "large", color: 'inherit', display: 'block', textTransform: 'capitalize' }}
            >
             {page.name}
            </Button>
          ))}
        </Box>

      </Toolbar>

    </AppBar>
  );
}
export default Navbar;
