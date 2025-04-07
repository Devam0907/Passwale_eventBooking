import React from 'react';
import { Paper, Typography, Button, Grid, Chip } from '@mui/material';
import './Tickets.css';

const Tickets = () => {
  const ticketCategories = [
    {
      name: 'Uncategorized Tickets',
      date: 'Mar 24 - Mar 24, 2025',
      status: 'Sold Out',
    },
    {
      name: 'Community Ticket',
      date: 'Mar 24 - Mar 24, 2025',
      status: 'Sold Out',
    },
  ];

  return (
    <div className="tickets-containerT">
      <Typography variant="h5" className="main-titleT">
        TICKETS
      </Typography>

      <Paper elevation={0} className="settings-containerT">
        <Typography variant="subtitle1" className="settings-titleT">
          TICKET SETTINGS
        </Typography>

        <Paper elevation={1} className="create-category-paperT">
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Create Category</Typography>
            <Button 
              variant="contained" 
              size="small"
              className="new-ticket-btnT"
            >
              New Ticket
            </Button>
          </Grid>
        </Paper>

        {ticketCategories.map((category, index) => (
          <Paper key={index} elevation={1} className="ticket-categoryT">
            <Grid container justifyContent="space-between">
              <Grid item xs={8}>
                <Typography variant="body1" className="category-nameT">
                  {category.name}
                </Typography>
                <Typography variant="caption" className="date-rangeT">
                  {category.date}
                </Typography>
              </Grid>
              <Grid item xs={4} className="status-containerT">
                <Chip
                  label={category.status}
                  size="small"
                  className="sold-out-chipT"
                />
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Paper>
    </div>
  );
};

export default Tickets;