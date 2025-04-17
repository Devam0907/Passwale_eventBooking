import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Dashboard, Event, People, Settings } from "@mui/icons-material"; // Import icons
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin" },
  { text: "Conferences", icon: <Event />, path: "/conferences" },
  { text: "Users", icon: <People />, path: "/admin-users" },
  { text: "Settings", icon: <Settings />, path: "/admin-settings" },
];

function Navbar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box", backgroundColor: "#1E1E2F", color: "#fff" },
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ p: 2, fontWeight: "bold", color: "#fff" }}>Passwale Admin</Typography>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: location.pathname === item.path ? "#fff" : "#b0b0b0",
              backgroundColor: location.pathname === item.path ? "#4F46E5" : "transparent",
              "&:hover": { backgroundColor: "#3F3B91", color: "#fff" },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default Navbar;
