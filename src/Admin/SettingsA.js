import React, { useState } from "react";
import {
  TextField,
  Button,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Grid,
  Box,
  Switch,
  FormControlLabel,
  Paper,
  useTheme,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PersonIcon from "@mui/icons-material/Person";
import SaveIcon from "@mui/icons-material/Save";

const Settings = () => {
  const theme = useTheme();
  const [tab, setTab] = useState(0);
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Conference administrator with over 5 years of experience managing tech events.",
  });
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSecurityChange = (e) => {
    setSecurity({ ...security, [e.target.name]: e.target.value });
  };

  const handleToggleTwoFactor = () => {
    setSecurity((prev) => ({ ...prev, twoFactorAuth: !prev.twoFactorAuth }));
  };

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    newConference: true,
    newUserRegistration: true,
    paymentProcessed: true,
    conferenceUpdates: true,
    systemUpdates: false,
    marketingPromotions: false,
  });

  const handleToggleNotification = (event) => {
    const { name, checked } = event.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };
  
  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: "95%", mb: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Manage your account and application preferences
        </Typography>
      </Box>

      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} sx={{ mb: 4 }}>
        <Tab label="Account" icon={<PersonIcon />} iconPosition="start" />
        <Tab label="Notifications" icon={<NotificationsActiveIcon />} iconPosition="start" />
      </Tabs>

      {/* Profile Section */}
      {tab === 0 && (
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "95%",
            p: 3,
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Update your personal information
          </Typography>

          {/* Profile Picture Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4, mb: 4 }}>
            <Avatar sx={{ width: 100, height: 100, bgcolor: "secondary.main", fontSize: 35 }}>
              JD
            </Avatar>
            <Box>
              <Button variant="contained" component="label" sx={{ fontSize: "0.875rem", px: 2, py: 0.75 }}>
                Upload
                <input type="file" hidden />
              </Button>
              <Button variant="outlined" color="error" sx={{ ml: 2, fontSize: "0.875rem", px: 2, py: 0.75 }}>
                Remove
              </Button>
            </Box>
          </Box>

          {/* Grid Layout for Inputs */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                size="small"
              />
            </Grid>
          </Grid>

          {/* Bio Section */}
          <TextField
            fullWidth
            label="Bio"
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            margin="dense"
            multiline
            rows={3}
            size="small"
            sx={{ mt: 3 }}
          />

          {/* Action Buttons */}
          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Button variant="outlined" sx={{ mr: 2, fontSize: "0.875rem", px: 3, py: 1 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" sx={{ fontSize: "0.875rem", px: 3, py: 1 }}>
              Save Changes
            </Button>
          </Box>
        </Paper>
      )}

      {/* Security Section */}
      {tab === 0 && (
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "95%",
            p: 3,
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Security
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Update your password and security settings
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Current Password"
                type="password"
                name="currentPassword"
                value={security.currentPassword}
                onChange={handleSecurityChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="New Password"
                type="password"
                name="newPassword"
                value={security.newPassword}
                onChange={handleSecurityChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={security.confirmPassword}
                onChange={handleSecurityChange}
                size="small"
              />
            </Grid>
          </Grid>

          {/* Two-Factor Authentication */}
          <FormControlLabel
            control={
              <Switch checked={security.twoFactorAuth} onChange={handleToggleTwoFactor} />
            }
            label={
              <Typography variant="body1" fontWeight="bold">
                Two-Factor Authentication
              </Typography>
            }
            sx={{ mt: 2 }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
            Add an extra layer of security to your account
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Button variant="outlined" sx={{ mr: 2, fontSize: "0.875rem", px: 3, py: 1 }}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" sx={{ fontSize: "0.875rem", px: 3, py: 1 }}>
              Save Changes
            </Button>
          </Box>
        </Paper>
      )}

      {/* Notification Section */}
      {tab === 1 && (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Notification Preferences
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Choose how you want to be notified
          </Typography>

          {/* Email Notification */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon color="primary" />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Email Notifications
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Receive notifications via email
                </Typography>
              </Box>
            </Box>
            <Switch
              checked={notifications.emailNotifications}
              onChange={handleToggleNotification}
              name="emailNotifications"
            />
          </Box>

          {/* Notification List Header */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, mb: 1, fontWeight: "bold" }}
          >
            Email Notification Types
          </Typography>

          {/* Notification Toggles */}
          <Grid container spacing={1}>
            {[
              { label: "New Conference Created", name: "newConference" },
              { label: "New User Registration", name: "newUserRegistration" },
              { label: "Payment Processed", name: "paymentProcessed" },
              { label: "Conference Updates", name: "conferenceUpdates" },
              { label: "System Updates", name: "systemUpdates" },
              { label: "Marketing & Promotions", name: "marketingPromotions" },
            ].map((item) => (
              <Grid item xs={12} key={item.name}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 0.5,
                  }}
                >
                  <Typography variant="body1">{item.label}</Typography>
                  <Switch
                    checked={notifications[item.name]}
                    onChange={handleToggleNotification}
                    name={item.name}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Action Buttons */}
          <Box sx={{ mt: 4, textAlign: "right" }}>
            <Button variant="outlined" sx={{ mr: 2, px: 3, py: 1 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              sx={{ px: 3, py: 1 }}
            >
              Save Changes
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default Settings;