import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { format } from 'date-fns';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState({
        name: '',
        description: '',
        location: '',
        datetime: new Date()
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/events/${id}`);
                if (response.data.success) {
                    setEvent({
                        ...response.data.data,
                        datetime: response.data.data.datetime ? 
                            new Date(response.data.data.datetime) : 
                            new Date()
                    });

                    if (response.data.data.image) {
                        setPreviewImage(
                            `http://localhost:5000${response.data.data.image}?${Date.now()}`
                        );
                    }
                }
            } catch (err) {
                setError(err.response?.data?.message || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();

        return () => {
            if (previewImage) {
                URL.revokeObjectURL(previewImage);
            }
        };
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent(prev => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setEvent(prev => ({ ...prev, datetime: date }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.match('image.*')) {
                setError('Only image files are allowed');
                return;
            }
            
            if (file.size > 50 * 1024 * 1024) {
                setError('Image must be smaller than 50MB');
                return;
            }

            if (previewImage) URL.revokeObjectURL(previewImage);

            setImage(file);
            setPreviewImage(URL.createObjectURL(file));
            setError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);
        
        try {
            // Validate required fields
            if (!event.name || !event.location || !event.datetime) {
                throw new Error('Name, location, and date are required');
            }

            const formData = new FormData();
            const date = new Date(event.datetime);
            formData.append('name', event.name.trim());
            formData.append('description', event.description?.trim() || '');
            formData.append('location', event.location.trim());
            formData.append('date', format(event.datetime, 'yyyy-MM-dd'));
            formData.append('time', format(event.datetime, 'HH:mm'));

            if (image) {
                formData.append('image', image);
            }

            console.log('Submitting form data:');
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }

            const response = await axios.put(
                `http://localhost:5000/api/events/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    timeout: 20000
                }
            );

            if (response.data.success) {
                navigate(`/events/${id}`, {
                    state: { message: 'Event updated successfully' }
                });
            }
        } catch (err) {
            console.error('Submission error:', {
                message: err.message,
                response: err.response?.data,
                stack: err.stack
            });
            
            setError(
                err.response?.data?.message || 
                err.message || 
                'Failed to update event'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    }

    if (!event) {
        return (
            <Typography variant="h6" color="error" align="center" mt={4}>
                Event not found
            </Typography>
        );
    }

    return (
        <Container maxWidth="md">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Typography variant="h4" gutterBottom>Edit Event</Typography>
                
                {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error}
                    </Alert>
                )}

                <TextField
                    fullWidth
                    margin="normal"
                    label="Event Name"
                    name="name"
                    value={event.name || ''}
                    onChange={handleChange}
                    required
                    error={!event.name}
                    helperText={!event.name ? 'Required field' : ''}
                />
                
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    name="description"
                    value={event.description || ''}
                    onChange={handleChange}
                    multiline
                    rows={4}
                />
                
                <TextField
                    fullWidth
                    margin="normal"
                    label="Location"
                    name="location"
                    value={event.location || ''}
                    onChange={handleChange}
                    required
                    error={!event.location}
                    helperText={!event.location ? 'Required field' : ''}
                />
                
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Event Date & Time"
                        value={event.datetime || new Date()}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                fullWidth 
                                margin="normal" 
                                required
                                error={!event.datetime}
                                helperText={!event.datetime ? 'Required field' : ''}
                            />
                        )}
                    />
                </LocalizationProvider>
                
                <Box sx={{ mt: 2, mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        Event Image
                    </Typography>
                    {previewImage && (
                        <Box mb={2}>
                            <img 
                                src={previewImage} 
                                alt="Preview" 
                                style={{ 
                                    maxWidth: '100%', 
                                    maxHeight: '300px',
                                    borderRadius: '4px'
                                }} 
                            />
                        </Box>
                    )}
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload Image
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            hidden
                        />
                    </Button>
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                        Max file size: 50MB (JPG, JPEG, PNG, GIF)
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                    <Button
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
                    >
                        {isSubmitting ? 'Updating...' : 'Update Event'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EditEvent;