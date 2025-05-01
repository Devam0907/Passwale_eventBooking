// import React, { useState } from 'react';
// import { Card, Typography, Box, Button, Container, Grid, TextField, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
// import ShareIcon from '@mui/icons-material/Share';
// import IconButton from '@mui/material/IconButton';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import './Event.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const events = [
//   { 
//     title: "React Conference 2024", 
//     image: "/React.jpeg",  // Updated URL here
//     type: "Conference", 
//     description: `The React Conference 2024 is one of the most anticipated events for developers worldwide. It brings together React enthusiasts, industry experts, and top engineers to discuss the latest advancements in React, front-end development, and JavaScript. The conference will feature keynote sessions by React core team members, hands-on workshops, and panel discussions. Topics will include server-side rendering, performance optimization, state management, and integrating React with AI-powered applications. Whether you're a beginner or an experienced developer, this event will provide invaluable insights and networking opportunities to help you grow in the industry. Attendees will also get access to exclusive resources, open-source projects, and career-enhancing workshops led by top software engineers.` 
//   },
//   { 
//     title: "JavaScript Meetup", 
//     image: "/JS.jpeg", 
//     type: "Meetup", 
//     description: `The JavaScript Meetup is a gathering of web developers, software engineers, and coding enthusiasts who share a passion for JavaScript. This meetup provides a platform for developers to network, learn new skills, and collaborate on exciting projects. Topics covered include modern ES6+ features, frameworks like React, Vue, and Angular, and best practices for writing efficient JavaScript code. Participants can engage in live coding sessions, Q&A panels with industry experts, and hands-on coding challenges. Whether you’re a beginner exploring JavaScript or a seasoned developer looking for advanced discussions, this meetup offers something for everyone. Attendees will leave with new knowledge, fresh ideas, and valuable connections that can shape their careers in software development.` 
//   },
//   { 
//     title: "AI & ML Summit", 
//     image: "/Summit.JPEG", 
//     type: "Summit", 
//     description: `The AI & ML Summit is a high-profile event designed to bring together researchers, engineers, and business leaders from the fields of artificial intelligence and machine learning. This summit will explore cutting-edge advancements in deep learning, neural networks, natural language processing, and AI ethics. Leading experts from top tech companies and universities will share insights on the future of AI-driven applications, including healthcare, finance, and autonomous systems. The event will feature interactive workshops, keynote speeches, and networking sessions. Attendees will have the opportunity to gain hands-on experience with AI tools, understand the latest industry trends, and discuss the challenges and opportunities that AI presents. If you’re passionate about AI and its transformative impact, this summit is a must-attend event.` 
//   }
// ];

// const categories = ["All", "Conference", "Summit", "Meetup"];

// function Event() {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const filteredEvents = events.filter(event =>
//     (selectedCategory === "All" || event.type === selectedCategory) &&
//     event.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleOpenDialog = (event) => {
//     setSelectedEvent(event);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setSelectedEvent(null);
//   };

//   return (
//     <div>
//       <Navbar />

//       <Container className="event-container1">
//         <Typography variant="h4" className="event-title1">Discover Events</Typography>
//         <Typography variant="body1" className="event-description1">
//           Find and attend the best events from around the world.
//         </Typography>
//         <br />
//         <br />

//         <TextField
//           variant="outlined"
//           placeholder="Search events by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-bar1"
//         />
//         <br />
//         <br />

//         <Box className="filter-container1">
//           {categories.map((category) => (
//             <Chip
//               key={category}
//               label={category}
//               onClick={() => setSelectedCategory(category)}
//               className={selectedCategory === category ? "active-chip" : "chip"}
//             />
//           ))}
//         </Box>
//         <br />

//         <Grid container spacing={3}>
//           {filteredEvents.map((event, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="event-card1">
//                 <CardMedia component="img" height="200" image={event.image} alt={event.title} />
//                 <CardContent>
//                   <Typography variant="h6">{event.title}</Typography>
//                   <Typography variant="body2" color="textSecondary">{event.type}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton aria-label="share">
//                     <ShareIcon />
//                   </IconButton>
//                   <Button size="small" onClick={() => handleOpenDialog(event)}>View Details</Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Dialog Box */}
//       <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//         {selectedEvent && (
//           <>
//             <DialogTitle>{selectedEvent.title}</DialogTitle>
//             <DialogContent>
//               <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
//                 Type: {selectedEvent.type}
//               </Typography>
//               <Typography variant="body1" sx={{ textAlign: "justify" }}>
//                 {selectedEvent.description}
//               </Typography>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleCloseDialog} color="primary">Close</Button>
//             </DialogActions>
//           </>
//         )}
//       </Dialog>

//       <Footer />
//     </div>
//   );
// }

// export default Event;





// import React, { useState } from 'react';
// import { 
//   Card, Typography, Box, Button, Container, Grid, TextField, Chip 
// } from "@mui/material";
// import CardMedia from '@mui/material/CardMedia';
// import ShareIcon from '@mui/icons-material/Share';
// import IconButton from '@mui/material/IconButton';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import { Link, useNavigate } from 'react-router-dom';
// import './Event.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// export const events = [
//   { 
//     title: "React Conference 2024", 
//     image: "/React.jpeg",
//     type: "Conference", 
//     date: "2024-05-15",
//     location: "San Francisco Convention Center",
//     description: `The React Conference 2024 is one of the most anticipated events for developers worldwide. It brings together React enthusiasts, industry experts, and top engineers to discuss the latest advancements in React, front-end development, and JavaScript. The conference will feature keynote sessions by React core team members, hands-on workshops, and panel discussions. Topics will include server-side rendering, performance optimization, state management, and integrating React with AI-powered applications. Whether you're a beginner or an experienced developer, this event will provide invaluable insights and networking opportunities to help you grow in the industry. Attendees will also get access to exclusive resources, open-source projects, and career-enhancing workshops led by top software engineers.` 
// },
//   { 
//     title: "JavaScript Meetup", 
//     image: "/JS.jpeg", 
//     type: "Meetup",
//     date: "2024-06-10",
//     location: "London Tech Hub",
//     description: `The JavaScript Meetup is a gathering of web developers, software engineers, and coding enthusiasts who share a passion for JavaScript. This meetup provides a platform for developers to network, learn new skills, and collaborate on exciting projects. Topics covered include modern ES6+ features, frameworks like React, Vue, and Angular, and best practices for writing efficient JavaScript code. Participants can engage in live coding sessions, Q&A panels with industry experts, and hands-on coding challenges. Whether you’re a beginner exploring JavaScript or a seasoned developer looking for advanced discussions, this meetup offers something for everyone. Attendees will leave with new knowledge, fresh ideas, and valuable connections that can shape their careers in software development.` 
// },
//   { 
//     title: "AI & ML Summit", 
//     image: "/Summit.JPEG", 
//     type: "Summit",
//     date: "2024-07-22",
//     location: "Berlin Innovation Arena",
//     description: `The AI & ML Summit is a high-profile event designed to bring together researchers, engineers, and business leaders from the fields of artificial intelligence and machine learning. This summit will explore cutting-edge advancements in deep learning, neural networks, natural language processing, and AI ethics. Leading experts from top tech companies and universities will share insights on the future of AI-driven applications, including healthcare, finance, and autonomous systems. The event will feature interactive workshops, keynote speeches, and networking sessions. Attendees will have the opportunity to gain hands-on experience with AI tools, understand the latest industry trends, and discuss the challenges and opportunities that AI presents. If you’re passionate about AI and its transformative impact, this summit is a must-attend event.` 
//   }
//  ];

// const categories = ["All", "Conference", "Summit", "Meetup"];

// function Event() {
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const navigate = useNavigate();

//   const filteredEvents = events.filter(event =>
//     (selectedCategory === "All" || event.type === selectedCategory) &&
//     event.title.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleViewDetails = (eventTitle) => {
//     navigate(`/events/${encodeURIComponent(eventTitle)}`);
//   };

//   return (
    // <div>
    //   <Navbar />
//       <Container className="event-container1">
//              <Typography variant="h4" className="event-title1">Discover Events</Typography>
//        <Typography variant="body1" className="event-description1">
//           Find and attend the best events from around the world.
//         </Typography>
//         <br />
//         <br />

//          <TextField
//           variant="outlined"
//           placeholder="Search events by name..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-bar1"
//         />
//         <br />
//         <br />

//         <Box className="filter-container1">
//           {categories.map((category) => (
//             <Chip
//               key={category}
//               label={category}
//               onClick={() => setSelectedCategory(category)}
//               className={selectedCategory === category ? "active-chip" : "chip"}
//             />
//           ))}
//         </Box>
//         <br />



//         <Grid container spacing={3}>
//           {filteredEvents.map((event, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card className="event-card1">
//               <CardMedia component="img" height="200" image={event.image} alt={event.title} />
//                <CardContent>
//                 <Typography variant="h6">{event.title}</Typography>
//                    <Typography variant="body2" color="textSecondary">{event.type}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <IconButton aria-label="share">
//                     <ShareIcon />
//                   </IconButton>
//                   <Button 
//                     size="small" 
//                     onClick={() => handleViewDetails(event.title)}
//                   >
//                     View Details
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Footer />
//     </div>
//   );
// }

// export default Event;

import React, { useState, useEffect } from 'react';
import {
  Card, Typography, Box, Button, Container, Grid, TextField, Chip, CircularProgress
} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Event.css';

function Event() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/events");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result); // Debug the actual response

        // Handle different response structures
        let eventsData = [];

        if (Array.isArray(result)) {
          // Case 1: Response is directly an array
          eventsData = result;
        } else if (result.data && Array.isArray(result.data)) {
          // Case 2: Response has data property containing array
          eventsData = result.data;
        } else if (result.events && Array.isArray(result.events)) {
          // Case 3: Response has events property containing array
          eventsData = result.events;
        } else {
          console.warn("Unexpected API response structure:", result);
        }

        // Transform data to match component expectations
        const formattedEvents = eventsData.map(item => ({
          _id: item._id || item.id || Math.random().toString(36).substring(2, 9),
          eventName: item.title || item.eventName || item.name || "Untitled Event",
          eventType: item.type || item.eventType || "General",
          startDate: item.start_date || item.startDate || new Date(),
          endDate: item.end_date || item.endDate || new Date(),
          image: item.image_url || item.image || item.picture || "/default-event.jpg",
          venue: item.location || item.venue || item.place,
          city: item.city || item.location_city,
          description: item.desc || item.description || item.details || ""
        }));

        setEvents(formattedEvents);

      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setEvents([]); // Ensure events is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" ||
      event.eventType.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = event.eventName.toLowerCase().includes(search.toLowerCase()) ||
      (event.description && event.description.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />;
  }

  if (error) {
    return <Typography color="error" sx={{ textAlign: 'center', margin: '2rem' }}>{error}</Typography>;
  }

  return (
    <div>
      <Navbar />
      <br/>
      <br/><br/>
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>Discover Events</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {["All"].map(category => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? "primary" : "default"}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <Grid item xs={12} sm={6} md={4} key={event._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image || '/default-event.jpg'}
                  alt={event.name}
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: '#f5f5f5'
                  }}
                  onError={(e) => {
                    e.target.src = '/default-event.jpg';
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {event.eventName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {event.eventType} • {new Date(event.startDate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {event.description?.substring(0, 100)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => navigate(`/events/${event._id}`)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center" sx={{ py: 4 }}>
              {events.length === 0 ? "No events available" : "No matching events found"}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
      <Footer />
           </div>
  );
}

export default Event;