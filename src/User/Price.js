import React from "react";
import "./Price.css";
import { Grid, Card, CardContent, Button, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Price = () => {
  return (
    <div>
      <Navbar />
      <div className="Pricing-hero">
        <Typography variant="h3" className="hero-Title" gutterBottom>
          Choose the Right Plan for Your Needs
        </Typography>
        <Typography variant="h6" className="hero-Subtitle" gutterBottom>
          Start for free and scale as you grow with our flexible pricing options.
        </Typography>
      </div>
      
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
};

export default Price;
