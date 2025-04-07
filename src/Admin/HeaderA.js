import React, { useState } from "react";
import { AppBar, Toolbar, InputBase, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import { Search, Notifications, Brightness4, Brightness7 } from "@mui/icons-material";

const Header = ({ darkMode, setDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000", boxShadow: "none", border: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        {/* Search Bar (Left-Aligned) */}
        <div style={{ position: "relative", flex: 1 }}>
          <Search sx={{ position: "absolute", left: 10, top: 10, color: darkMode ? "#bbb" : "#888" }} />
          <InputBase
            placeholder="Search..."
            sx={{
              pl: 5,
              pr: 2,
              py: 1,
              backgroundColor: darkMode ? "#555" : "#f5f5f5",
              borderRadius: "8px",
              width: "200px",
              color: darkMode ? "#fff" : "#000",
            }}
          />
        </div>

        {/* Right Side Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Theme Toggle */}
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {/* Notifications */}
          <IconButton color="inherit">
            <Notifications />
          </IconButton>

          {/* Profile Icon */}
          <IconButton onClick={handleMenuOpen}>
            <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </div>

        {/* User Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
