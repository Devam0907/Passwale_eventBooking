import React from "react";
import { Box, Typography, Button, IconButton, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import { Search, FilterList, MoreVert, CloudDownload } from "@mui/icons-material";
// import Header from "./Header";

const conferences = [
  { name: "DevConf 2023", date: "Sep 15 - Sep 17, 2023", location: "San Francisco, CA", attendees: 1250, status: "active" },
  { name: "TechSummit 2023", date: "Oct 10 - Oct 12, 2023", location: "New York, NY", attendees: 870, status: "upcoming" },
  { name: "WebDev Conference", date: "Jul 5 - Jul 7, 2023", location: "Austin, TX", attendees: 650, status: "completed" },
  { name: "AI Summit 2023", date: "Nov 20 - Nov 22, 2023", location: "Seattle, WA", attendees: 1500, status: "upcoming" },
  { name: "React Conference", date: "May 12 - May 14, 2023", location: "Chicago, IL", attendees: 920, status: "completed" },
  { name: "Data Science Forum", date: "Dec 8 - Dec 10, 2023", location: "Boston, MA", attendees: 780, status: "upcoming" },
  { name: "Security Conference 2023", date: "Aug 25 - Aug 27, 2023", location: "Washington, DC", attendees: 1100, status: "completed" },
  { name: "Future Tech Expo", date: "Jun 18 - Jun 20, 2023", location: "Miami, FL", attendees: 1350, status: "completed" },
];

const statusColors = {
  active: "success",
  upcoming: "info",
  completed: "default",
};

const Conferences = () => {
  return (
    <Box p={3}>
        {/* <Header/> */}
      <Typography variant="h5" fontWeight="bold">Conferences</Typography>
      <Typography variant="body2" color="textSecondary">Manage your conferences and events</Typography>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2}>
        <TextField variant="outlined" size="small" placeholder="Search conferences..." InputProps={{ startAdornment: <Search fontSize="small" /> }} />
        <Box>
          <Button variant="outlined" startIcon={<FilterList />}>Status</Button>
          <Button variant="contained" startIcon={<CloudDownload />} sx={{ ml: 1 }}>Export</Button>
          <Button variant="contained" sx={{ ml: 1 }}>+ Add Conference</Button>
        </Box>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Conference</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Attendees</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conferences.map((conf, index) => (
              <TableRow key={index}>
                <TableCell>{conf.name}</TableCell>
                <TableCell>{conf.date}</TableCell>
                <TableCell>{conf.location}</TableCell>
                <TableCell>{conf.attendees}</TableCell>
                <TableCell>
                  <Chip label={conf.status} color={statusColors[conf.status]} variant="outlined" />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Conferences;
