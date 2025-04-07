import React from "react";
import { Card, Typography, Button, Box, LinearProgress } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import "./Overview.css"; // Link to the CSS file

const Overview = () => {
  return (
    <div className="overview-containerO">
      {/* Overview Title */}
      <Typography variant="h5" className="overview-titleO">Overview</Typography>

      {/* Top Section */}
      <div className="top-sectionO">
        {/* Event Transactions */}
        <Card className="event-transactionsO">
          <Typography variant="h6" className="card-titleO">Event Transactions</Typography>
          <Typography variant="body2" className="card-subtitleO">
            Here is the trend of your ticket sale and amount collected
          </Typography>
          <div className="empty-dataO">No data to display</div>
        </Card>

        {/* Stats Boxes */}
        <div className="stats-boxesO">
          <Card className="stats-cardO">
            <Typography className="stats-titleO">Today's Registrations</Typography>
            <Typography className="stats-value">0</Typography>
          </Card>

          <Card className="stats-cardO">
            <Typography className="stats-titleO">Total Registrations</Typography>
            <Typography className="stats-value">0</Typography>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-sectionO">
        {/* Recent Transactions */}
        <Card className="recent-transactionsO">
          <div className="transactions-headerO">
            <Typography variant="h6" className="card-titleO">Recent Transactions</Typography>
            <Button variant="contained" className="view-all-btnO">View All</Button>
          </div>
          <div className="empty-dataO">No Attendees</div>
        </Card>

        {/* Tickets Status */}
        <Card className="tickets-statusO">
          <div className="ticket-headerO">
            <Typography variant="h6" className="card-titleO">
              Tickets Status <OpenInNew className="external-icon" />
            </Typography>
            <div className="ticket-countO">0</div>
          </div>
          <Typography variant="body2" className="ticket-typeO">
            Community Ticket (0/100) <OpenInNew className="external-iconO" />
          </Typography>
          <Box className="progress-barO">
            <LinearProgress variant="determinate" value={0} />
            <Typography variant="body2">0%</Typography>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
