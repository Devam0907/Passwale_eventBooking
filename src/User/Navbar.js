// import React from 'react'
// import {Button,  AppBar, Toolbar,  Typography, } from "@mui/material";
//   import { Link } from "react-router-dom";
//   import "./Navbar.css";


// function Navbar() {
//   return (
//     <div>
//            <AppBar position="fixed" className="Navbar" color="default" elevation={1}>
//         <Toolbar className="Toolbar">
//           <Typography variant="h6" className="Logo" component={Link} to="/">
//             PASSWALE
//           </Typography>

//           <div className="Nav-links">
//             <Button component={Link} to="/home" className="Nav-item">Home</Button>
//             <Button component={Link} to="/events" className="Nav-item">Events</Button>
//             <Button component={Link} to="/features" className="Nav-item">Features</Button>
//             <Button component={Link} to="/use-cases" className="Nav-item">Use Cases</Button>
//             <Button component={Link} to="/pricing" className="Nav-item">Pricing</Button>
//           </div>

//           <div className="buttons">
//             <Button variant="text" component={Link} to="/login" className="Login">Sign In</Button>
//             <Button variant="text" component={Link} to="/register" className="Register">Sign Up</Button>
//           </div>
//         </Toolbar>
//       </AppBar>

   
//     </div>
//   )
// }

// export default Navbar

// import React, { useState } from 'react';
// import { 
//   Button,  
//   AppBar, 
//   Toolbar,  
//   Typography,
//   Avatar,
//   Menu,
//   MenuItem,
//   Divider,
//   IconButton,
//   Box
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../User/AuthContext";
// import "./Navbar.css";
// import { Menu as MenuIcon } from '@mui/icons-material';

// function Navbar() {
//   const { user, isAuthenticated, isLoading, logout } = useAuth();
//   const navigate = useNavigate();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const mobileOpen = Boolean(mobileAnchorEl);

//   if (isLoading) {
//     return null; // or a loading spinner
//   }

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleMenuClose();
//     navigate("/");
//   };

//   return (
//     <div>
//       <AppBar position="fixed" className="Navbar" color="default" elevation={1}>
//         <Toolbar className="Toolbar">
//           <Typography variant="h6" className="Logo" component={Link} to="/">
//             PASSWALE
//           </Typography>

//           {/* Desktop Navigation */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="Nav-links">
//             <Button component={Link} to="/home" className="Nav-item">Home</Button>
//             <Button component={Link} to="/events" className="Nav-item">Events</Button>
//             <Button component={Link} to="/features" className="Nav-item">Features</Button>
//             <Button component={Link} to="/use-cases" className="Nav-item">Use Cases</Button>
//             <Button component={Link} to="/pricing" className="Nav-item">Pricing</Button>
//             {isAuthenticated && (
//               <Button component={Link} to="/createEvent" className="Nav-item">Create Event</Button>
//             )}
//           </Box>

//           {/* Mobile Menu Button */}
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ display: { md: 'none' } }}
//             onClick={handleMobileMenuOpen}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* User/Auth Buttons */}
//           <div className="buttons">
//             {isAuthenticated ? (
//               <>
//                 <Button
//                   onClick={handleMenuOpen}
//                   startIcon={<Avatar src={user?.profileImage} sx={{ width: 24, height: 24 }} />}
//                   className="User-button"
//                 >
//                   {user?.name || 'My Account'}
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
//                     Profile
//                   </MenuItem>
//                   <MenuItem component={Link} to="/my-events" onClick={handleMenuClose}>
//                     My Events
//                   </MenuItem>
//                   <Divider />
//                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 </Menu>
//               </>
//             ) : (
//               <>
//                 <Button variant="text" component={Link} to="/login" className="Login">Sign In</Button>
//                 <Button variant="contained" component={Link} to="/register" className="Register">Sign Up</Button>
//               </>
//             )}
//           </div>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Menu */}
//       <Menu
//         anchorEl={mobileAnchorEl}
//         open={mobileOpen}
//         onClose={handleMobileMenuClose}
//         sx={{ display: { md: 'none' } }}
//       >
//         <MenuItem component={Link} to="/home" onClick={handleMobileMenuClose}>Home</MenuItem>
//         <MenuItem component={Link} to="/events" onClick={handleMobileMenuClose}>Events</MenuItem>
//         <MenuItem component={Link} to="/features" onClick={handleMobileMenuClose}>Features</MenuItem>
//         <MenuItem component={Link} to="/use-cases" onClick={handleMobileMenuClose}>Use Cases</MenuItem>
//         <MenuItem component={Link} to="/pricing" onClick={handleMobileMenuClose}>Pricing</MenuItem>
//         {isAuthenticated && (
//           <>
//             <MenuItem component={Link} to="/createEvent" onClick={handleMobileMenuClose}>Create Event</MenuItem>
//             <Divider />
//             <MenuItem component={Link} to="/profile" onClick={handleMobileMenuClose}>Profile</MenuItem>
//             <MenuItem component={Link} to="/my-events" onClick={handleMobileMenuClose}>My Events</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </>
//         )}
//       </Menu>
//     </div>
//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import { 
  Button,  
  AppBar, 
  Toolbar,  
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  Box
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../User/AuthContext";
import "./Navbar.css";
import { Menu as MenuIcon } from '@mui/icons-material';

function Navbar() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const mobileOpen = Boolean(mobileAnchorEl);

  if (isLoading) {
    return null;
  }

  // Add this function to get the full image URL
  const getProfileImageUrl = () => {
    if (!user?.profileImage) return null;
    return user.profileImage.startsWith('http') 
      ? user.profileImage 
      : `http://localhost:5000${user.profileImage}`;
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
  };

  return (
    <div>
      <AppBar position="fixed" className="Navbar" color="default" elevation={1}>
        <Toolbar className="Toolbar">
          <Typography variant="h6" className="Logo" component={Link} to="/">
            PASSWALE
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className="Nav-links">
            <Button component={Link} to="/home" className="Nav-item">Home</Button>
            <Button component={Link} to="/events" className="Nav-item">Events</Button>
            <Button component={Link} to="/features" className="Nav-item">Features</Button>
            <Button component={Link} to="/use-cases" className="Nav-item">Use Cases</Button>
            <Button component={Link} to="/pricing" className="Nav-item">Pricing</Button>
            {isAuthenticated && (
              <Button component={Link} to="/createEvent" className="Nav-item">Create Event</Button>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: 'none' } }}
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* User/Auth Buttons */}
          <div className="buttons">
            {isAuthenticated ? (
              <>
                <Button
                  onClick={handleMenuOpen}
                  startIcon={
                    <Avatar 
                      src={getProfileImageUrl()} 
                      sx={{ width: 24, height: 24 }}
                    >
                      {user?.name?.charAt(0)}
                    </Avatar>
                  }
                  className="User-button"
                >
                  {user?.name || 'My Account'}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleMenuClose}
                >
                  <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                    Profile
                  </MenuItem>
                  <MenuItem component={Link} to="/my-events" onClick={handleMenuClose}>
                    My Events
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button variant="text" component={Link} to="/login" className="Login">Sign In</Button>
                <Button variant="contained" component={Link} to="/register" className="Register">Sign Up</Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileAnchorEl}
        open={mobileOpen}
        onClose={handleMobileMenuClose}
        sx={{ display: { md: 'none' } }}
      >
        <MenuItem component={Link} to="/home" onClick={handleMobileMenuClose}>Home</MenuItem>
        <MenuItem component={Link} to="/events" onClick={handleMobileMenuClose}>Events</MenuItem>
        <MenuItem component={Link} to="/features" onClick={handleMobileMenuClose}>Features</MenuItem>
        <MenuItem component={Link} to="/use-cases" onClick={handleMobileMenuClose}>Use Cases</MenuItem>
        <MenuItem component={Link} to="/pricing" onClick={handleMobileMenuClose}>Pricing</MenuItem>
        {isAuthenticated && (
          <>
            <MenuItem component={Link} to="/createEvent" onClick={handleMobileMenuClose}>Create Event</MenuItem>
            <Divider />
            <MenuItem component={Link} to="/profile" onClick={handleMobileMenuClose}>Profile</MenuItem>
            <MenuItem component={Link} to="/my-events" onClick={handleMobileMenuClose}>My Events</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )}
      </Menu>
    </div>
  )
}

export default Navbar;