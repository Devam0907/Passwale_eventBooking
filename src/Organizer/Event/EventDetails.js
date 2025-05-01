// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./EventDetail.css";
// import { TextField, MenuItem, Button, Tabs, Tab, Box, Typography, Radio, RadioGroup, FormControlLabel, Card, CardMedia,} from "@mui/material";
// import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import UploadFileIcon from "@mui/icons-material/UploadFile";
// import { format } from "date-fns";
// import { useParams, useLocation } from "react-router-dom";

// const EventDetail = () => {
//   const { eventId } = useParams(); // Get eventId from URL
//   const location = useLocation();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [tabValue, setTabValue] = useState(0);
//   const [formData, setFormData] = useState({
//     eventName: "",
//     eventShortName: "",
//     eventURL: "",
//     startDate: new Date(),
//     endDate: new Date(),
//     timeZone: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
//     eventType: "Free",
//     eventMode: "",
//     venue: "",
//     country: "",
//     state: "",
//     city: "",
//     joinURL: "",
//     eventDescription: "",
//     image: null,
//   });

//   const [selectedImage, setSelectedImage] = useState(null);

//   const generateEventURL = (eventName) => {
//     if (!eventName) return "";
//     return eventName.toLowerCase().replace(/\s+/g, '-') + "-event";
//   };

//   const generateShortName = (eventName) => {
//     if (!eventName) return "";
//     return eventName.substring(0, 20);
//   };

//   useEffect(() => {
//     if (location.state?.formData) {
//       const receivedData = location.state.formData;
//       const startDate = receivedData.startDate instanceof Date ? receivedData.startDate : new Date(receivedData.startDate);
//       const endDate = receivedData.endDate instanceof Date ? receivedData.endDate : new Date(receivedData.endDate);

//       setFormData(prev => ({
//         ...prev,
//         ...receivedData,
//         startDate,
//         endDate,
//         eventURL: receivedData.eventURL || generateEventURL(receivedData.eventName),
//         eventShortName: receivedData.eventShortName || generateShortName(receivedData.eventName),
//       }));
//     }
//   }, [location.state]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value,
//       ...(name === "eventName" && {
//         eventURL: generateEventURL(value),
//         eventShortName: generateShortName(value)
//       })
//     }));
//   };

//   const handleDateChange = (name, date) => {
//     setFormData(prev => ({ ...prev, [name]: date }));
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//       setFormData(prev => ({ ...prev, image: file }));
//     }
//   };

//   const handleSave = () => {
//     console.log("Form data saved:", formData);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box className="eventD-container">

// <Tabs
//   value={tabValue}
//   onChange={(e, newValue) => setTabValue(newValue)}
//   className="eventD-tabs"
// >
//   <Tab label={<span className="tab-labelD">BASIC INFO</span>} />
//   <Tab label={<span className="tab-labelD">ABOUT</span>} />
// </Tabs>

//         <Box mt={2} className="eventD-form">
//           {tabValue === 0 && (
//             <Box>
//               <Box className="inputD-group">
//                 <TextField
//                   className="fullD-width"
//                   label="Event Name *"
//                   variant="outlined"
//                   margin="normal"
//                   InputLabelProps={{ shrink: true }}
//                   name="eventName"
//                   value={formData.eventName}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   className="fullD-width"
//                   label="Event Short Name"
//                   variant="outlined"
//                   margin="normal"
//                   InputLabelProps={{ shrink: true }}
//                   name="eventShortName"
//                   value={formData.eventShortName}
//                   onChange={handleChange}
//                   helperText="Max 20 characters"
//                 />
//               </Box>

//               <TextField
//                 className="fullD-width"
//                 label="Event URL"
//                 variant="outlined"
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//                 name="eventURL"
//                 value={formData.eventURL}
//                 onChange={handleChange}
//                 helperText="This will be used for your event page URL"
//               />

//               <Box className="inputD-group">
//                 <DateTimePicker
//                   label="Start Date & Time *"
//                   value={formData.startDate}
//                   onChange={(date) => handleDateChange("startDate", date)}
//                   renderInput={(params) => (
//                     <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
//                   )}
//                 />

//                 <DateTimePicker
//                   label="End Date & Time *"
//                   value={formData.endDate}
//                   onChange={(date) => handleDateChange("endDate", date)}
//                   renderInput={(params) => (
//                     <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
//                   )}
//                 />
//               </Box>

//               <TextField
//                 select
//                 className="fullD-width"
//                 label="Time Zone *"
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//                 name="timeZone"
//                 value={formData.timeZone}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
//                   (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
//                 </MenuItem>
//               </TextField>

//               <TextField
//                 select
//                 className="fullD-width"
//                 label="Event Mode *"
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//                 name="eventMode"
//                 value={formData.eventMode}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="In-Person">In-Person</MenuItem>
//                 <MenuItem value="Online">Online</MenuItem>
//               </TextField>

//               {formData.eventMode === "In-Person" && (
//                 <>
//                   <Box className="input-group">
//                     <TextField
//                       className="fullD-width"
//                       label="Venue *"
//                       variant="outlined"
//                       margin="normal"
//                       InputLabelProps={{ shrink: true }}
//                       name="venue"
//                       value={formData.venue}
//                       onChange={handleChange}
//                     />
//                     <TextField
//                       className="fullD-width"
//                       label="City *"
//                       variant="outlined"
//                       margin="normal"
//                       InputLabelProps={{ shrink: true }}
//                       name="city"
//                       value={formData.city}
//                       onChange={handleChange}
//                     />
//                   </Box>
//                   <TextField
//                     className="fullD-width"
//                     label="Country *"
//                     variant="outlined"
//                     margin="normal"
//                     InputLabelProps={{ shrink: true }}
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                   />
//                   <TextField
//                     className="fullD-width"
//                     label="State *"
//                     variant="outlined"
//                     margin="normal"
//                     InputLabelProps={{ shrink: true }}
//                     name="state"
//                     value={formData.state}
//                     onChange={handleChange}
//                   />
//                 </>
//               )}

//               {formData.eventMode === "Online" && (
//                 <TextField
//                   className="fullD-width"
//                   label="Join URL *"
//                   variant="outlined"
//                   margin="normal"
//                   InputLabelProps={{ shrink: true }}
//                   name="joinURL"
//                   value={formData.joinURL}
//                   onChange={handleChange}
//                   placeholder="https://example.com/join"
//                 />
//               )}

//               <Box mt={3}>
//                 <Typography mb={1}>Event Type *</Typography>
//                 <RadioGroup
//                   row
//                   name="eventType"
//                   value={formData.eventType}
//                   onChange={handleChange}
//                 >
//                   <FormControlLabel
//                     value="Free"
//                     control={<Radio />}
//                     label={<span className="radio-labelD">Free</span>}
//                   />
//                   <FormControlLabel
//                     value="Paid"
//                     control={<Radio />}
//                     label={<span className="radio-labelD">Paid</span>}
//                   />
//                 </RadioGroup>
//               </Box>

//               <Box className="upload-sectionD">
//                 {selectedImage ? (
//                   <Card sx={{ width: 80, height: 80 }}>
//                     <CardMedia component="img" height="80" image={selectedImage} />
//                   </Card>
//                 ) : formData.image ? (
//                   <Card sx={{ width: 80, height: 80 }}>
//                     <CardMedia component="img" height="80" image={URL.createObjectURL(formData.image)} />
//                   </Card>
//                 ) : null}
//                 <Button
//                   variant="outlined"
//                   component="label"
//                   startIcon={<UploadFileIcon />}
//                 >
//                   Upload Image
//                   <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
//                 </Button>
//               </Box>

//               <TextField
//                 className="fullD-width"
//                 label="Event Description"
//                 multiline
//                 rows={2}
//                 variant="outlined"
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//                 name="eventDescription"
//                 value={formData.eventDescription}
//                 onChange={handleChange}
//                 placeholder="Describe your event in detail..."
//                 sx={{ mt: 3 }}
//               />
//             </Box>
//           )}

//           {tabValue === 1 && (
//             <Box>
//               <TextField
//                 className="fullD-width"
//                 label="Event Description"
//                 multiline
//                 rows={2}
//                 variant="outlined"
//                 margin="normal"
//                 InputLabelProps={{ shrink: true }}
//                 name="eventDescription"
//                 value={formData.eventDescription}
//                 onChange={handleChange}
//                 placeholder="Describe your event in detail..."
//               />
//             </Box>
//           )}

//           <Box className="buttonD-group" sx={{ mt: 3 }}>
//             <Button className="cancel-btnD">Cancel</Button>
//             <Button className="save-btnD" onClick={handleSave}>Save</Button>
//           </Box>
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default EventDetail;

import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./EventDetail.css";
import {
  TextField,
  MenuItem,
  Button,
  Tabs,
  Tab,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardMedia,
  CircularProgress,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert
} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { format } from 'date-fns';
import axios from 'axios';

const EventDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [event, setEvent] = useState(location.state?.event || null);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    eventName: "",
    eventShortName: "",
    eventURL: "",
    startDate: new Date(),
    endDate: new Date(),
    timeZone: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
    eventType: "Free",
    eventMode: "",
    venue: "",
    country: "",
    state: "",
    city: "",
    joinURL: "",
    eventDescription: "",
    image: null,
    ticketTypes: []
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Fetch event data if eventId exists
  const fetchEventData = async (eventId) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:5000/api/events/${eventId}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (!result.success || !result.data) {
        throw new Error("Invalid event data structure");
      }

      setFormData({
        eventName: result.data.name || "",
        eventShortName: result.data.eventShortName || generateShortName(result.data.name),
        eventURL: result.data.eventURL || generateEventURL(result.data.name),
        startDate: result.data.datetime ? new Date(result.data.datetime) : new Date(),
        endDate: result.data.endDate ? new Date(result.data.endDate) : new Date(),
        timeZone: result.data.timeZone || "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
        eventType: result.data.eventType || "Free",
        eventMode: result.data.eventMode || "",
        venue: result.data.venue || "",
        country: result.data.country || "",
        state: result.data.state || "",
        city: result.data.city || "",
        joinURL: result.data.joinURL || "",
        eventDescription: result.data.description || "",
        image: result.data.image || null,
        ticketTypes: result.data.ticketTypes || []
      });
      if (result.data.image) {
        setSelectedImage(`http://localhost:5000${result.data.image}`);
      }
    } catch (error) {
      console.error('Event fetch error:', error);
      setError(error.message);
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!event) {
      const fetchEvent = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/events/${id}`);
          setEvent(response.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message || 'Failed to load event');
        } finally {
          setLoading(false);
        }
      };
      fetchEvent();
    }
  }, [id, event]);

  const generateEventURL = (eventName) => {
    if (!eventName) return "";
    return eventName.toLowerCase().replace(/\s+/g, '-') + "-event";
  };

  const generateShortName = (eventName) => {
    if (!eventName) return "";
    return eventName.substring(0, 20);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "eventName" && {
        eventURL: generateEventURL(value),
        eventShortName: generateShortName(value)
      })
    }));
  };

  const handleDateChange = (name, date) => {
    setFormData(prev => ({ ...prev, [name]: date }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError("Only image files are allowed");
        setSnackbarOpen(true);
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleTicketChange = (index, field, value) => {
    const newTickets = [...formData.ticketTypes];
    newTickets[index][field] = field === 'price' || field === 'quantity'
      ? Number(value)
      : value;
    setFormData(prev => ({ ...prev, ticketTypes: newTickets }));
  };

  // Add ticket type function
  const addTicketType = () => {
    setFormData(prev => ({
      ...prev,
      ticketTypes: [...prev.ticketTypes, { name: "", price: 0, quantity: 0 }]
    }));
  };

  const removeTicketType = (index) => {
    if (formData.ticketTypes.length > 1) {
      const newTickets = [...formData.ticketTypes];
      newTickets.splice(index, 1);
      setFormData(prev => ({ ...prev, ticketTypes: newTickets }));
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Authentication required');
  
      const formPayload = new FormData();
  
      // Add all required fields
      formPayload.append('name', formData.eventName);
      formPayload.append('description', formData.eventDescription);
      
      // Format date and time correctly
      const date = format(formData.startDate, 'yyyy-MM-dd');
      const time = format(formData.startDate, 'HH:mm');
      formPayload.append('date', date);
      formPayload.append('time', time);
      
      // Handle location based on event mode
      formPayload.append('location', 
        formData.eventMode === "In-Person" 
          ? `${formData.venue}, ${formData.city}, ${formData.state}, ${formData.country}`
          : formData.joinURL
      );
  
      // Add ticket types
      formPayload.append('ticketTypes', JSON.stringify(formData.ticketTypes));
  
      // Add optional fields
      if (formData.eventType) formPayload.append('eventType', formData.eventType);
      if (formData.eventMode) formPayload.append('eventMode', formData.eventMode);
      
      // Add image if exists
      if (formData.image instanceof File) {
        formPayload.append('image', formData.image);
      }
  
      const method = id ? 'PUT' : 'POST';
      const url = `http://localhost:5000/api/events${id ? `/${id}` : ''}`;
  
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formPayload
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.message || `Server error: ${response.status}`);
      }
  
      navigate('/events');
    } catch (error) {
      console.error('Save error:', error);
      setError(error.message || "Failed to save event. Please check all required fields.");
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!event) return <Typography>Event not found</Typography>;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="eventD-container">
        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          className="eventD-tabs"
        >
          <Tab label={<span className="tab-labelD">BASIC INFO</span>} />
          <Tab label={<span className="tab-labelD">ABOUT</span>} />
        </Tabs>

        <Box mt={2} className="eventD-form">
          {tabValue === 0 && (
            <Box>
              <Box className="inputD-group">
                <TextField
                  className="fullD-width"
                  label="Event Name *"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                />
                <TextField
                  className="fullD-width"
                  label="Event Short Name"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  name="eventShortName"
                  value={formData.eventShortName}
                  onChange={handleChange}
                  helperText="Max 20 characters"
                />
              </Box>

              <TextField
                className="fullD-width"
                label="Event URL"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                name="eventURL"
                value={formData.eventURL}
                onChange={handleChange}
                helperText="This will be used for your event page URL"
              />

              <Box className="inputD-group">
                <DateTimePicker
                  label="Start Date & Time *"
                  value={formData.startDate}
                  onChange={(date) => handleDateChange("startDate", date)}
                  renderInput={(params) => (
                    <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
                  )}
                />

                <DateTimePicker
                  label="End Date & Time *"
                  value={formData.endDate}
                  onChange={(date) => handleDateChange("endDate", date)}
                  renderInput={(params) => (
                    <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Box>

              <TextField
                select
                className="fullD-width"
                label="Time Zone *"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
              >
                <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
                  (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
                </MenuItem>
              </TextField>

              <TextField
                select
                className="fullD-width"
                label="Event Mode *"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                name="eventMode"
                value={formData.eventMode}
                onChange={handleChange}
              >
                <MenuItem value="In-Person">In-Person</MenuItem>
                <MenuItem value="Online">Online</MenuItem>
              </TextField>

              {formData.eventMode === "In-Person" && (
                <>
                  <Box className="input-group">
                    <TextField
                      className="fullD-width"
                      label="Venue *"
                      variant="outlined"
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      name="venue"
                      value={formData.venue}
                      onChange={handleChange}
                    />
                    <TextField
                      className="fullD-width"
                      label="City *"
                      variant="outlined"
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Box>
                  <TextField
                    className="fullD-width"
                    label="Country *"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <TextField
                    className="fullD-width"
                    label="State *"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </>
              )}

              {formData.eventMode === "Online" && (
                <TextField
                  className="fullD-width"
                  label="Join URL *"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  name="joinURL"
                  value={formData.joinURL}
                  onChange={handleChange}
                  placeholder="https://example.com/join"
                />
              )}

              <Box mt={3}>
                <Typography mb={1}>Event Type *</Typography>
                <RadioGroup
                  row
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Free"
                    control={<Radio />}
                    label={<span className="radio-labelD">Free</span>}
                  />
                  <FormControlLabel
                    value="Paid"
                    control={<Radio />}
                    label={<span className="radio-labelD">Paid</span>}
                  />
                </RadioGroup>
              </Box>

              <Box sx={{ mt: 3, border: '1px solid #eee', p: 2, borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                  Ticket Types
                  <Button
                    onClick={addTicketType}
                    size="small"
                    sx={{ ml: 2 }}
                    startIcon={<AddIcon />}
                  >
                    Add Ticket Type
                  </Button>
                </Typography>

                {formData.ticketTypes.map((ticket, index) => (
                  <Box key={index} sx={{ mb: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                    <TextField
                      label="Ticket Name"
                      value={ticket.name}
                      onChange={(e) => handleTicketChange(index, 'name', e.target.value)}
                      sx={{ flex: 2 }}
                    />
                    <TextField
                      label="Price (₹)"
                      type="number"
                      value={ticket.price}
                      onChange={(e) => handleTicketChange(index, 'price', e.target.value)}
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      label="Quantity"
                      type="number"
                      value={ticket.quantity}
                      onChange={(e) => handleTicketChange(index, 'quantity', e.target.value)}
                      sx={{ flex: 1 }}
                    />
                    {formData.ticketTypes.length > 1 && (
                      <IconButton
                        onClick={() => removeTicketType(index)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>

              <Box className="upload-sectionD">
                {selectedImage ? (
                  <Card sx={{ width: 80, height: 80 }}>
                    <CardMedia component="img" height="80" image={selectedImage} />
                  </Card>
                ) : formData.image ? (
                  <Card sx={{ width: 80, height: 80 }}>
                    <CardMedia component="img" height="80" image={URL.createObjectURL(formData.image)} />
                  </Card>
                ) : null}
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadFileIcon />}
                >
                  Upload Image
                  <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                </Button>
              </Box>

              <TextField
                className="fullD-width"
                label="Event Description"
                multiline
                rows={2}
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                placeholder="Describe your event in detail..."
                sx={{ mt: 3 }}
              />
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              <TextField
                className="fullD-width"
                label="Event Description"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                placeholder="Describe your event in detail..."
              />
            </Box>
          )}

          <Box className="buttonD-group" sx={{ mt: 3 }}>
            <Button className="cancel-btnD">Cancel</Button>
            <Button className="save-btnD" onClick={handleSave}>
              {id ? "Update" : "Save"}
            </Button>
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
          >
            <Alert severity="error" onClose={handleCloseSnackbar}>
              {error}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default EventDetail;