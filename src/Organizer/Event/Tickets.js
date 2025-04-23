// import React from 'react';
// import { Paper, Typography, Button, Grid, Chip } from '@mui/material';
// import './Tickets.css';

// const Tickets = () => {
//   const ticketCategories = [
//     {
//       name: 'Uncategorized Tickets',
//       date: 'Mar 24 - Mar 24, 2025',
//       status: 'Sold Out',
//     },
//     {
//       name: 'Community Ticket',
//       date: 'Mar 24 - Mar 24, 2025',
//       status: 'Sold Out',
//     },
//   ];

//   return (
//     <div className="tickets-container">
//       <Typography variant="h5" className="main-title">
//         TICKETS
//       </Typography>

//       <Paper elevation={0} className="settings-container">
//         <Typography variant="subtitle1" className="settings-title">
//           TICKET SETTINGS
//         </Typography>

//         <Paper elevation={1} className="create-category-paper">
//           <Grid container justifyContent="space-between" alignItems="center">
//             <Typography variant="body1">Create Category</Typography>
//             <Button 
//               variant="contained" 
//               size="small"
//               className="new-ticket-btn"
//             >
//               New Ticket
//             </Button>
//           </Grid>
//         </Paper>

//         {ticketCategories.map((category, index) => (
//           <Paper key={index} elevation={1} className="ticket-category">
//             <Grid container justifyContent="space-between">
//               <Grid item xs={8}>
//                 <Typography variant="body1" className="category-name">
//                   {category.name}
//                 </Typography>
//                 <Typography variant="caption" className="date-range">
//                   {category.date}
//                 </Typography>
//               </Grid>
//               <Grid item xs={4} className="status-container">
//                 <Chip
//                   label={category.status}
//                   size="small"
//                   className="sold-out-chip"
//                 />
//               </Grid>
//             </Grid>
//           </Paper>
//         ))}
//       </Paper>
//     </div>
//   );
// };

// export default Tickets;


import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Pencil, Copy, Trash2, Settings } from "lucide-react";

const Tickets = () => {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      name: "Community Ticket",
      date: new Date().toLocaleDateString(),
      status: "Sold Out",
      free: true,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTicketName, setNewTicketName] = useState("");

  const handleNewTicketClick = () => {
    setShowForm(true);
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();

    const newTicket = {
      id: tickets.length + 1,
      name: newTicketName,
      date: new Date().toLocaleDateString(),
      status: "Available",
      free: true,
    };

    setTickets([...tickets, newTicket]);
    setNewTicketName("");
    setShowForm(false);
  };

  const handleEdit = (ticket) => {
    console.log("Edit:", ticket);
  };

  const handleCopy = (ticket) => {
    console.log("Copy:", ticket);
  };

  const handleDelete = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">Tickets</Typography>
        <Box>
          <Button variant="outlined" startIcon={<Settings />}>
            Ticket Settings
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2, backgroundColor: "#1976d2" }}
            onClick={handleNewTicketClick}
          >
            New Ticket
          </Button>
        </Box>
      </Box>

      {/* Ticket Form */}
      {showForm && (
        <Card sx={{ mb: 3, p: 3 }}>
          <form onSubmit={handleCreateTicket}>
            <TextField
              label="Ticket Name"
              variant="outlined"
              fullWidth
              value={newTicketName}
              onChange={(e) => setNewTicketName(e.target.value)}
              required
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained">
              Create Ticket
            </Button>
          </form>
        </Card>
      )}

      {/* Ticket List */}
      {tickets.map((ticket) => (
        <Card key={ticket.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h6">{ticket.name}</Typography>
              <Typography variant="body2" color="text.secondary">{ticket.date}</Typography>
              <Typography variant="body2" color="error">{ticket.status}</Typography>
              <Box mt={1}>
                <IconButton onClick={() => handleEdit(ticket)}>
                  <Pencil size={18} />
                </IconButton>
                <IconButton onClick={() => handleCopy(ticket)}>
                  <Copy size={18} />
                </IconButton>
                <IconButton onClick={() => handleDelete(ticket.id)}>
                  <Trash2 size={18} />
                </IconButton>
              </Box>
            </Box>
            <Box textAlign="right">
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "#e1bee7",
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  color: "#6a1b9a",
                }}
              >
                {ticket.free ? "Free" : "Paid"}
              </Typography>
              <Typography variant="h6" mt={1}>1</Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Tickets;
