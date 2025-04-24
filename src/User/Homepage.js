
import React, { useState, useEffect } from "react";
import {  Container,  Box, Card,CardContent,Grid, Typography,  CardMedia,  Button,  List,  ListItem, ListItemText} from "@mui/material";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";


function Homepage() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % 6); 
    }, 4000); 
  
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div className="Homepage">
    <Navbar />

    {/* Centered Hero Section */}
    <Container className="Hero-sectionG">
        <Box className="Hero-contentG" textAlign="center">
          <Typography variant="h3" className="Hero-titleG" gutterBottom>
            Elevate Your Event Experience
          </Typography>
          <Typography variant="h6" className="Hero-subtitleG" gutterBottom>
            A cutting-edge platform for event hosting, ticketing, and audience engagement.
          </Typography>
          <Box className="Hero-buttonsG" mt={3}>
            <Button variant="contained" size="large" component={Link} to="/createEvent" className="Primary-buttonG">
              Host an Event
            </Button>
            <Button variant="outlined" size="large" component={Link} to="/book-demo" className="Secondary-buttonG">
              Book a Demo
            </Button>
          </Box>
        </Box>
      </Container>

      <h2>Features </h2>
          <Typography variant="subtitle1" className="Feature-subtitle" align="center" gutterBottom>
            The ultimate event management solution with everything you need in one place.
          </Typography>
          
  <Box className="Rotating-outer-box">
    <Box className="Rotating-sidebar2">
      <List>
        <ListItem className={`sidebar2-item ${currentIndex === 0 ? "active" : ""}`}>
          <ListItemText primary="Virtual Conference Platform" />
        </ListItem>
        <ListItem className={`sidebar2-item ${currentIndex === 1 ? "active" : ""}`}>
          <ListItemText primary="Speaker Management" />
        </ListItem>
        <ListItem className={`sidebar2-item ${currentIndex === 2 ? "active" : ""}`}>
          <ListItemText primary="Attendee Registration System" />
        </ListItem>
        <ListItem className={`sidebar2-item ${currentIndex === 3 ? "active" : ""}`}>
          <ListItemText primary="Event Analytics Dashboard" />
        </ListItem>
        <ListItem className={`sidebar2-item ${currentIndex === 4 ? "active" : ""}`}>
          <ListItemText primary="Sponsor Management Suite" />
        </ListItem>
        <ListItem className={`sidebar2-item ${currentIndex === 5 ? "active" : ""}`}>
          <ListItemText primary="Mobile Event App" />
        </ListItem>
      </List>
    </Box>

    <Box className="Rotating-content">
      {currentIndex === 0 && (
        <>
          <Typography variant="h4" className="Rotating-title">Virtual Conference Platform</Typography>
          <Typography variant="body1" className="Rotating-description">
            Experience a virtual conference platform that delivers crystal-clear HD streaming with adaptive bitrate, facilitates interactive Q&A sessions and networking with AI matchmaking, showcases customizable sponsor booths, and offers real-time analytics and responsive cross-platform support.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="virtual.jpg"
            alt="Virtual Conference Platform"
          />
        </>
      )}

      {currentIndex === 1 && (
        <>
          <Typography variant="h4" className="Rotating-title">Speaker Management</Typography>
          <Typography variant="body1" className="Rotating-description">
            Streamline speaker management by centralizing profiles, automating session scheduling with conflict detection, sending automated email reminders, securely managing document uploads, tracking performance metrics, and coordinating travel logistics with integrated booking systems.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="speaker.jpg"
            alt="Speaker Management"
          />
        </>
      )}

      {currentIndex === 2 && (
        <>
          <Typography variant="h4" className="Rotating-title">Attendee Registration System</Typography>
          <Typography variant="body1" className="Rotating-description">
            Optimize attendee registration with custom forms featuring conditional logic and multi-step workflows, dynamic pricing with discounts and group rates, integrated payment gateways, unique discount codes, bulk registration capabilities, and automated badge printing with QR code integration.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="Attedance.jpg"
            alt="Attendee Registration System"
          />
        </>
      )}

      {currentIndex === 3 && (
        <>
          <Typography variant="h4" className="Rotating-title">Event Analytics Dashboard</Typography>
          <Typography variant="body1" className="Rotating-description">
            Harness an event analytics dashboard that tracks real-time attendance with heatmaps and demographic breakdowns, visualizes session popularity, measures networking effectiveness, exports data in multiple formats, creates custom reports, and monitors social media engagement in real time.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="EventAnalgtics.jpg"
            alt="Event Analytics Dashboard"
          />
        </>
      )}

      {currentIndex === 4 && (
        <>
          <Typography variant="h4" className="Rotating-title">Sponsor Management Suite</Typography>
          <Typography variant="body1" className="Rotating-description">
            Enhance sponsor management by structuring tiered sponsorship packages with digital asset placements, capturing qualified leads via NFC and chatbot integrations, analyzing brand exposure, distributing personalized digital swag bags, monitoring booth traffic with IoT sensors, and calculating ROI through lead conversion tracking.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="sponer.jpg"
            alt="Sponsor Management Suite"
          />
        </>
      )}

      {currentIndex === 5 && (
        <>
          <Typography variant="h4" className="Rotating-title">Mobile Event App</Typography>
          <Typography variant="body1" className="Rotating-description">
            Develop a mobile event app that offers personalized agendas with session recommendations, targeted push notifications, AI-powered attendee matchmaking, AR wayfinding, interactive venue maps, instant feedback via in-app surveys, and offline content accessibility with downloadable resources.
          </Typography>
          <CardMedia
            component="img"
            className="Rotating-image"
            image="Mobile.jpg"
            alt="Mobile Event App"
          />
        </>
      )}
    </Box>
  </Box>
{/* </Container> */}

      <header className="headerU">
        <h2>Use Cases</h2>
        <p>Explore how Passwale empowers event organizers, attendees, and sponsors.</p>
      </header>

      <ImageSlider />

<br/><br/>


      <h2>Pricing</h2>
        <Typography variant="h6" className="hero-Subtitle" gutterBottom>
          Start for free and scale as you grow with our flexible pricing options.
        </Typography>

  <div className="pricing-Container">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card className="pricing-Card basiC-plan">
              <CardContent>
                <Typography variant="h5" className="Plan-Title">Basic</Typography>
                <Typography variant="h4" className="Plan-Price">Free</Typography>
                <Typography variant="subtitle2" className="plan-Description">
                  Perfect for individuals and small-scale event organizers.
                </Typography>
                <ul className="plan-Features1">
                  <li>Essential event management tools</li>
                  <li>Community support</li>
                  <li>Single event creation</li>
                  <li>Basic reporting and analytics</li>
                </ul>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="pricing-Card standarD-plan">
              <CardContent>
                <Typography variant="h5" className="Plan-Title">Standard</Typography>
                <Typography variant="h4" className="Plan-Price">₹2,400/month</Typography>
                <Typography variant="subtitle2" className="plan-Description">
                  Ideal for growing teams and professional event organizers.
                </Typography>
                <ul className="plan-Features1">
                  <li>All features in Basic</li>
                  <li>Priority customer support</li>
                  <li>Up to 5 events per month</li>
                  <li>Custom branding and themes</li>
                  <li>Advanced analytics and insights</li>
                </ul>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="pricing-Card premiuM-plan">
              <CardContent>
                <Typography variant="h5" className="Plan-Title">Premium</Typography>
                <Typography variant="h4" className="Plan-Price">₹8,200/month</Typography>
                <Typography variant="subtitle2" className="plan-Description">
                  Best suited for large-scale events and organizations.
                </Typography>
                <ul className="plan-Features1">
                  <li>All features in Standard</li>
                  <li>Dedicated account manager</li>
                  <li>Unlimited events</li>
                  <li>Custom API integrations</li>
                  <li>24/7 premium support</li>
                  <li>AI-powered event insights</li>
                  <li>Multi-user collaboration tools</li>
                  <li>Exclusive networking and promotion features</li>
                  <li>Advanced attendee engagement analytics</li>
                  <li>Early access to new features</li>
                </ul>
                <Button variant="contained" color="primary" fullWidth>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="pricing-Card enterprisE-plan">
              <CardContent>
                <Typography variant="h5" className="Plan-Title">Enterprise</Typography>
                <Typography variant="h4" className="Plan-Price">Custom</Typography>
                <Typography variant="subtitle2" className="plan-Description">
                  Tailored solutions for enterprises with unique needs.
                </Typography>
                <ul className="plan-Features1">
                  <li>All features in Premium</li>
                  <li>99.9% SLA uptime guarantee</li>
                  <li>Custom security & compliance policies</li>
                  <li>Dedicated success manager</li>
                  <li>Comprehensive data and reporting tools</li>
                  <li>Personalized onboarding and training</li>
                  <li>Integration with third-party business tools</li>
                  <li>Exclusive access to enterprise-only webinars & insights</li>
                  <li>Custom event automation workflows</li>
                  <li>24/7 dedicated enterprise-level support</li>
                  <li>Scalable solutions for multi-national event management</li>
                </ul>
                <Button variant="contained" color="primary" fullWidth>
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>


      <Footer />
    </div>
  );
}

export default Homepage;
