import React from "react";
import { Box, Typography, Button, IconButton, TextField, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import { Search, FilterList, MoreVert, CloudDownload } from "@mui/icons-material";
// import Header from "./Header";

const user = [
  { name: "John Doe", email: "john.doe@example.com", role: "admin", status: "active", lastLogin: "Sep 27, 2023", registered: "Jun 15, 2022" },
  { name: "Jane Smith", email: "jane.smith@example.com", role: "organizer", status: "active", lastLogin: "Sep 26, 2023", registered: "Jul 8, 2022" },
  { name: "Michael Johnson", email: "michael.johnson@example.com", role: "attendee", status: "active", lastLogin: "Sep 25, 2023", registered: "Jan 22, 2023" },
  { name: "Emily Davis", email: "emily.davis@example.com", role: "organizer", status: "active", lastLogin: "Sep 24, 2023", registered: "Sep 5, 2022" },
  { name: "Robert Wilson", email: "robert.wilson@example.com", role: "attendee", status: "inactive", lastLogin: "Aug 15, 2023", registered: "Nov 18, 2022" },
  { name: "Sarah Thompson", email: "sarah.thompson@example.com", role: "attendee", status: "active", lastLogin: "Sep 23, 2023", registered: "Apr 7, 2023" },
  { name: "David Miller", email: "david.miller@example.com", role: "organizer", status: "inactive", lastLogin: "Jul 30, 2023", registered: "Aug 12, 2022" },
  { name: "Lisa Anderson", email: "lisa.anderson@example.com", role: "attendee", status: "active", lastLogin: "Sep 22, 2023", registered: "Mar 29, 2023" },
];

const roleColors = {
  admin: "primary",
  organizer: "default",
  attendee: "info",
};

const statusColors = {
  active: "success",
  inactive: "default",
};

const Users = () => {
  return (
    <Box p={3}>
        {/* <Header/> */}
      <Typography variant="h5" fontWeight="bold">Users</Typography>
      <Typography variant="body2" color="textSecondary">Manage user accounts and permissions</Typography>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} mb={2}>
        <TextField variant="outlined" size="small" placeholder="Search users..." InputProps={{ startAdornment: <Search fontSize="small" /> }} />
        <Box>
          <Button variant="outlined" startIcon={<FilterList />}>Role</Button>
          <Button variant="outlined" startIcon={<FilterList />} sx={{ ml: 1 }}>Status</Button>
          <Button variant="contained" startIcon={<CloudDownload />} sx={{ ml: 1 }}>Export</Button>
          <Button variant="contained" sx={{ ml: 1 }}>+ Add User</Button>
        </Box>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Registered</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ bgcolor: "#ccc", mr: 1 }}>{user.name.charAt(0)}</Avatar>
                    <Typography>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip label={user.role} color={roleColors[user.role]} variant="outlined" />
                </TableCell>
                <TableCell>
                  <Chip label={user.status} color={statusColors[user.status]} variant="outlined" />
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
                <TableCell>{user.registered}</TableCell>
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

export default Users;