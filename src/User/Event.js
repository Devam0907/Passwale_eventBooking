import React, { useState } from 'react';
import { Card, Typography, Box, Button, Container, Grid, TextField, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './Event.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

const events = [
  { 
    title: "React Conference 2024", 
    image: "/React.jpeg",  // Updated URL here
    type: "Conference", 
    description: `The React Conference 2024 is one of the most anticipated events for developers worldwide. It brings together React enthusiasts, industry experts, and top engineers to discuss the latest advancements in React, front-end development, and JavaScript. The conference will feature keynote sessions by React core team members, hands-on workshops, and panel discussions. Topics will include server-side rendering, performance optimization, state management, and integrating React with AI-powered applications. Whether you're a beginner or an experienced developer, this event will provide invaluable insights and networking opportunities to help you grow in the industry. Attendees will also get access to exclusive resources, open-source projects, and career-enhancing workshops led by top software engineers.` 
  },
  { 
    title: "JavaScript Meetup", 
    image: "/JS.jpeg", 
    type: "Meetup", 
    description: `The JavaScript Meetup is a gathering of web developers, software engineers, and coding enthusiasts who share a passion for JavaScript. This meetup provides a platform for developers to network, learn new skills, and collaborate on exciting projects. Topics covered include modern ES6+ features, frameworks like React, Vue, and Angular, and best practices for writing efficient JavaScript code. Participants can engage in live coding sessions, Q&A panels with industry experts, and hands-on coding challenges. Whether you’re a beginner exploring JavaScript or a seasoned developer looking for advanced discussions, this meetup offers something for everyone. Attendees will leave with new knowledge, fresh ideas, and valuable connections that can shape their careers in software development.` 
  },
  { 
    title: "AI & ML Summit", 
    image: "/Summit.JPEG", 
    type: "Summit", 
    description: `The AI & ML Summit is a high-profile event designed to bring together researchers, engineers, and business leaders from the fields of artificial intelligence and machine learning. This summit will explore cutting-edge advancements in deep learning, neural networks, natural language processing, and AI ethics. Leading experts from top tech companies and universities will share insights on the future of AI-driven applications, including healthcare, finance, and autonomous systems. The event will feature interactive workshops, keynote speeches, and networking sessions. Attendees will have the opportunity to gain hands-on experience with AI tools, understand the latest industry trends, and discuss the challenges and opportunities that AI presents. If you’re passionate about AI and its transformative impact, this summit is a must-attend event.` 
  }
];

const categories = ["All", "Conference", "Summit", "Meetup"];

function Event() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(event =>
    (selectedCategory === "All" || event.type === selectedCategory) &&
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <Navbar />

      <Container className="event-container1">
        <Typography variant="h4" className="event-title1">Discover Events</Typography>
        <Typography variant="body1" className="event-description1">
          Find and attend the best events from around the world.
        </Typography>
        <br />
        <br />

        <TextField
          variant="outlined"
          placeholder="Search events by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar1"
        />
        <br />
        <br />

        <Box className="filter-container1">
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active-chip" : "chip"}
            />
          ))}
        </Box>
        <br />

        <Grid container spacing={3}>
          {filteredEvents.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="event-card1">
                <CardMedia component="img" height="200" image={event.image} alt={event.title} />
                <CardContent>
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{event.type}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Button size="small" onClick={() => handleOpenDialog(event)}>View Details</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog Box */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedEvent && (
          <>
            <DialogTitle>{selectedEvent.title}</DialogTitle>
            <DialogContent>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
                Type: {selectedEvent.type}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "justify" }}>
                {selectedEvent.description}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Footer />
    </div>
  );
}

export default Event;
