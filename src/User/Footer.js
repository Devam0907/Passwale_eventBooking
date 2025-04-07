import React from 'react'
import { Container, Typography,  Box,  Grid,} from "@mui/material";
import "./Footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      <footer className="Footer">
  <Container>
    <Grid container spacing={3} className="Footer-container">
      <Grid item xs={12} sm={4} className="Footer-Section">
        <Typography variant="h6">LOGO</Typography>
        <Typography variant="body2">Event management & ticketing solutions.</Typography>
      </Grid>

      <Grid item xs={12} sm={4} className="Footer-Section">
              <Typography variant="h6">Quick Links</Typography>
              <Box  className="Footer-links">
                <Link to="/events">Events</Link> | 
                <Link to="/features"> Features</Link> | 
                <Link to="/use-cases"> Use Cases</Link> | 
                <Link to="/pricing"> Pricing</Link> 
              </Box>
       </Grid>

      <Grid item xs={12} sm={4} className="Footer-Section">
        <Typography variant="h6">Contact</Typography>
        <Typography variant="body2">support@example.com</Typography>
        <Typography variant="body2">+1234567890</Typography>
      </Grid>
    </Grid>
    <Typography variant="body2" align="center" className="Footer-Bottom">
      © {new Date().getFullYear()} Passwale. All Rights Reserved.
    </Typography>
  </Container>
</footer>

    </div>
  )
}

export default Footer