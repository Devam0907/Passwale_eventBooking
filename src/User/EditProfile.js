import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  CircularProgress,
  Alert,
  MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { CloudUpload, Cancel } from '@mui/icons-material';
import { format, parseISO } from 'date-fns';
import axios from 'axios';

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

const EditProfile = ({ profile, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    phone: profile?.phone || '',
    dateOfBirth: profile?.dateOfBirth ? parseISO(profile.dateOfBirth) : null,
    gender: profile?.gender || '',
    profileImage: profile?.profileImage || ''
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(profile?.profileImage || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB
        setError('Image size must be less than 5MB');
        return;
      }
      
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
      setError('');
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setPreviewImage('');
    setFormData(prev => ({
      ...prev,
      profileImage: ''
    }));
  };

  const uploadProfileImage = async (file) => {
    const formData = new FormData();
    formData.append('profileImage', file); // Must match the field name in multer

    try {
        const response = await axios.post(
          'http://localhost:5000/api/users/profile-image',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            // Optional: Add progress tracking
            onUploadProgress: progressEvent => {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              console.log(`Upload progress: ${progress}%`);
            }
          }
        );
        return response.data.profileImage;
      } catch (error) {
        console.error('Image upload error:', error);
        throw new Error(error.response?.data?.message || 'Image upload failed');
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let imageUrl = formData.profileImage;
      
      // Upload new image if selected
      if (imageFile) {
        try {
          imageUrl = await uploadProfileImage(imageFile);
        } catch (uploadError) {
          console.error('Image upload failed:', uploadError);
          throw new Error(uploadError.response?.data?.message || 'Image upload failed');
        }
      }

      // Prepare update data
      const updateData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        dateOfBirth: formData.dateOfBirth ? format(formData.dateOfBirth, 'yyyy-MM-dd') : null,
        gender: formData.gender,
        profileImage: imageUrl
      };

      // Update profile
      const response = await axios.put(
        'http://localhost:5000/api/users/update',
        updateData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      
      onSuccess(response.data);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <Box maxWidth={800} mx="auto" mt={4} p={2}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
          <Box flex={1}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
            />

            <DatePicker
              label="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
              maxDate={new Date()}
            />

            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              margin="normal"
            >
              {genderOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box flex={1}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Profile Picture
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar
                src={previewImage || formData.profileImage}
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Box display="flex" gap={2}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<CloudUpload />}
                  disabled={loading}
                >
                  Upload
                  <input 
                    type="file" 
                    hidden 
                    accept="image/*" 
                    onChange={handleImageChange}
                    disabled={loading}
                  />
                </Button>
                {(previewImage || formData.profileImage) && (
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Cancel />}
                    onClick={removeImage}
                    disabled={loading}
                  >
                    Remove
                  </Button>
                )}
              </Box>
              {uploadProgress > 0 && uploadProgress < 100 && (
                <Box width="100%" mt={1}>
                  <Typography variant="caption">
                    Uploading: {uploadProgress}%
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button
            variant="outlined"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Save Changes'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfile;