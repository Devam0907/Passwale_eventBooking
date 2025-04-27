import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Paper, 
  Divider, 
  List, 
  ListItem, 
  ListItemText,
  ListItemAvatar,
  CircularProgress,
  Alert,
  Button,
  Chip
} from '@mui/material';
import { useAuth } from './AuthContext';
import axios from 'axios';
import EditProfile from './EditProfile';
import { format } from 'date-fns';

const Profile = () => {
  const { user: authUser, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setProfile(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError(err.response?.data?.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    if (authUser) {
      fetchProfile();
    }
  }, [authUser]);

  const handleUpdateSuccess = (updatedUser) => {
    setProfile(updatedUser.user);
    setEditMode(false);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box maxWidth={600} mx="auto" mt={4}>
        <Alert severity="error">{error}</Alert>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.reload()}
          sx={{ mt: 2 }}
        >
          Retry
        </Button>
      </Box>
    );
  }

  if (editMode) {
    return <EditProfile profile={profile} onSuccess={handleUpdateSuccess} onCancel={() => setEditMode(false)} />;
  }

  return (
    <Box maxWidth={800} mx="auto" mt={4} p={2}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">My Profile</Typography>
          <Box>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => setEditMode(true)}
              sx={{ mr: 2 }}
            >
              Edit Profile
            </Button>
            <Button 
              variant="outlined" 
              color="error"
              onClick={logout}
            >
              Logout
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          <Box flex={1}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar 
                    src={profile?.profileImage 
                      ? `http://localhost:5000${profile.profileImage}` 
                      : ''}
                    sx={{ width: 80, height: 80 }}
                  >
                    {profile?.firstName?.charAt(0)}{profile?.lastName?.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography variant="h5">{profile?.firstName} {profile?.lastName}</Typography>}
                  secondary={profile?.email}
                />
              </ListItem>

              <Divider component="li" sx={{ my: 2 }} />

              <ListItem>
                <ListItemText
                  primary="Phone"
                  secondary={profile?.phone || 'Not provided'}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Date of Birth"
                  secondary={profile?.dateOfBirth ? format(new Date(profile.dateOfBirth), 'MMM dd, yyyy') : 'Not provided'}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Gender"
                  secondary={
                    profile?.gender ? (
                      <Chip 
                        label={profile.gender} 
                        size="small" 
                        color="primary" 
                        variant="outlined" 
                      />
                    ) : 'Not specified'
                  }
                />
              </ListItem>
            </List>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" gutterBottom>
              Account Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Member since: {format(new Date(profile?.createdAt), 'MMM dd, yyyy')}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;