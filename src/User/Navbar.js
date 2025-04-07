import React from 'react'
import {Button,  AppBar, Toolbar,  Typography, } from "@mui/material";
  import { Link } from "react-router-dom";
  import "./Navbar.css";


function Navbar() {
  return (
    <div>
           <AppBar position="fixed" className="Navbar" color="default" elevation={1}>
        <Toolbar className="Toolbar">
          <Typography variant="h6" className="Logo" component={Link} to="/">
            LOGO
          </Typography>

          <div className="Nav-links">
            <Button component={Link} to="/home" className="Nav-item">Home</Button>
            <Button component={Link} to="/events" className="Nav-item">Events</Button>
            <Button component={Link} to="/features" className="Nav-item">Features</Button>
            <Button component={Link} to="/use-cases" className="Nav-item">Use Cases</Button>
            <Button component={Link} to="/pricing" className="Nav-item">Pricing</Button>
          </div>

          <div className="buttons">
            <Button variant="text" component={Link} to="/login" className="Login">Sign In</Button>
            <Button variant="text" component={Link} to="/register" className="Register">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>

   
    </div>
  )
}

export default Navbar