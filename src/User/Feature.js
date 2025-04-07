import React from "react";
import "./Feature.css";
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const features = [
  {
    title: "Virtual Conference Platform",
    points: [
      "Deliver crystal-clear HD video streaming with adaptive bitrate technology for seamless viewing experiences",
      "Facilitate real-time interactions through moderated Q&A sessions and threaded discussion forums",
      "Create immersive virtual networking spaces with AI-powered matchmaking and icebreaker prompts",
      "Showcase sponsors in customizable 3D exhibition booths with product demo capabilities",
      "Monitor participant engagement metrics through comprehensive real-time analytics dashboards",
      "Ensure cross-platform compatibility across desktop, mobile, and tablet devices with responsive design"
    ],
    img: "virtual-conf.png"
  },
  {
    title: "Speaker Management",
    points: [
      "Centralize speaker profiles with biography, social links, and session history tracking",
      "Automate session scheduling with conflict detection and calendar synchronization features",
      "Implement automated email reminders with session details and preparation guidelines",
      "Provide secure document upload portals for presentation slides and supplementary materials",
      "Track speaker performance metrics including audience ratings and engagement statistics",
      "Coordinate travel logistics with integrated flight and hotel booking management systems"
    ],
    img: "image2.jpeg"
  },
  {
    title: "Attendee Registration System",
    points: [
      "Design custom registration forms with conditional logic and multi-step workflows",
      "Implement dynamic pricing models with early-bird discounts and group rates",
      "Integrate multiple payment gateways including Stripe, PayPal, and international options",
      "Generate unique discount codes with usage limits and expiration dates",
      "Enable bulk registration through CSV uploads and API integrations",
      "Automate badge printing with customizable templates and QR code integration"
    ],
    img: "image1.jpg"
  },
  {
    title: "Event Analytics Dashboard",
    points: [
      "Track real-time attendance metrics with heatmaps and demographic breakdowns",
      "Visualize engagement patterns through interactive session popularity graphs",
      "Measure networking effectiveness with connection analytics and meeting outcomes",
      "Export raw data in multiple formats including CSV, JSON, and PDF",
      "Create custom reports with drag-and-drop data visualization tools",
      "Monitor social media mentions and hashtag performance in real-time"
    ],
    img: "analytics-dash.png"
  },
  {
    title: "Sponsor Management Suite",
    points: [
      "Structure sponsorship packages with tiered benefits and digital asset placements",
      "Capture qualified leads through NFC badge scanning and chatbot integrations",
      "Analyze brand exposure through logo impression tracking and click-through rates",
      "Distribute digital swag bags with personalized content and download analytics",
      "Monitor booth traffic patterns with IoT sensors and heatmap tracking",
      "Calculate ROI through lead conversion tracking and opportunity pipeline analysis"
    ],
    img: "sponsor-mgmt.png"
  },
  {
    title: "Mobile Event App",
    points: [
      "Build personalized agendas with session recommendations and conflict alerts",
      "Send targeted push notifications with schedule updates and urgent announcements",
      "Facilitate attendee connections through AI-powered matchmaking algorithms",
      "Guide navigation with AR wayfinding and interactive venue maps",
      "Collect instant feedback through in-app surveys and rating systems",
      "Enable content access through offline mode and downloadable resources"
    ],
    img: "mobile-app.png"
  }
];

const Feature = () => {
  return (
    <div>
      <Navbar />
      <div className="Feature">
        <Container>
          <Typography variant="h4" className="Feature-title" align="center" gutterBottom>
            Explore Our Powerful Features
          </Typography>
          <Typography variant="subtitle1" className="Feature-subtitle" align="center" gutterBottom>
            The ultimate event management solution with everything you need in one place.
          </Typography>

          <div className="Feature-list">
            {features.map((feature, index) => (
              <Grid 
                container 
                spacing={4} 
                alignItems="center"
                key={index}
              >
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={12} md={6}>
                      <img src={feature.img} alt={feature.title} className="Feature-img" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5" className="feature-heading">
                        {feature.title}
                      </Typography>
                      <ul>
                        {feature.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5" className="feature-heading">
                        {feature.title}
                      </Typography>
                      <ul>
                        {feature.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img src={feature.img} alt={feature.title} className="Feature-img" />
                    </Grid>
                  </>
                )}
              </Grid>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;

