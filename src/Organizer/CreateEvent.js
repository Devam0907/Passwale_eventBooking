// import React, { useState } from "react";
// import {
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   Box,
//   Divider,
//   Snackbar,
//   Alert,
//   IconButton,
//   Checkbox,
//   Stack,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { format } from "date-fns";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import "./CreateEvent.css";

// const CreateEvent = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     eventName: "",
//     startDate: new Date(),
//     endDate: new Date(),
//     timeZone: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
//     eventType: "",
//     eventMode: "",
//     venue: "",
//     country: "",
//     state: "",
//     city: "",
//     joinURL: "",
//   });

//   const [tickets, setTickets] = useState([]);
//   const [editingTicketIndex, setEditingTicketIndex] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTicketChange = (e, index) => {
//     const newTickets = [...tickets];
//     newTickets[index][e.target.name] =
//       e.target.type === "checkbox" ? e.target.checked : e.target.value;
//     setTickets(newTickets);
//   };

//   const handleAddTicket = () => {
//     setTickets([
//       ...tickets,
//       {
//         title: "Community Ticket",
//         soldOut: false,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//       },
//     ]);
//     setEditingTicketIndex(tickets.length);
//   };

//   const handleEditTicket = (index) => {
//     setEditingTicketIndex(index);
//   };

//   const handleDeleteTicket = (index) => {
//     const newTickets = tickets.filter((_, i) => i !== index);
//     setTickets(newTickets);
//     setEditingTicketIndex(null);
//   };

//   const handleCreateEvent = () => {
//     const validationMessage = validateForm();
//     if (validationMessage) {
//       setErrorMessage(validationMessage);
//       setOpenSnackbar(true);
//     } else {
//       navigate("/event-details", { state: { formData, tickets } });
//     }
//   };

//   const validateForm = () => {
//     const {
//       eventName,
//       startDate,
//       endDate,
//       eventType,
//       eventMode,
//       venue,
//       country,
//       state,
//       city,
//       joinURL,
//     } = formData;
//     if (!eventName || !startDate || !endDate || !eventType || !eventMode) {
//       return "Please fill all required fields.";
//     }
//     if (
//       eventMode === "In-Person" && (!venue || !country || !state || !city)
//     ) {
//       return "Please fill venue details for In-Person events.";
//     }
//     if (eventMode === "Online" && !joinURL) {
//       return "Please provide a valid Join URL for Online events.";
//     }
//     return null;
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Box className="Banner">
//         <Typography variant="h4" fontWeight="bold">
//           Create Event
//         </Typography>
//         <Typography variant="body1" className="Banner-subtext">
//           Provide basic event details to get started. Once the event is created,
//           you'll be directed to the event admin dashboard.
//         </Typography>
//       </Box>

//       <Card className="event-cardCD">
//         <CardContent>
//           {/* Form Fields */}
//           <FormControl fullWidth sx={{ mb: 3 }}>
//             <TextField
//               label="Event Name *"
//               variant="outlined"
//               name="eventName"
//               value={formData.eventName}
//               onChange={handleChange}
//             />
//           </FormControl>

//           <Grid container spacing={3} sx={{ mb: 3 }}>
//             <Grid item xs={12} sm={6}>
//               <DateTimePicker
//                 label="Starts On *"
//                 value={formData.startDate}
//                 onChange={(date) =>
//                   setFormData({ ...formData, startDate: date })
//                 }
//                 renderInput={(params) => <TextField {...params} fullWidth />}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <DateTimePicker
//                 label="Ends On *"
//                 value={formData.endDate}
//                 onChange={(date) =>
//                   setFormData({ ...formData, endDate: date })
//                 }
//                 renderInput={(params) => <TextField {...params} fullWidth />}
//               />
//             </Grid>
//           </Grid>

//           <FormControl fullWidth sx={{ mb: 3 }}>
//             <InputLabel>Time Zone *</InputLabel>
//             <Select name="timeZone" value={formData.timeZone} onChange={handleChange}>
//               <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
//                 (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
//               </MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl sx={{ mb: 3 }}>
//             <Typography>Event Type *</Typography>
//             <RadioGroup row name="eventType" value={formData.eventType} onChange={handleChange}>
//               <FormControlLabel value="Free" control={<Radio />} label="Free" />
//               <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
//             </RadioGroup>
//           </FormControl>

//           <FormControl fullWidth sx={{ mb: 3 }}>
//             <InputLabel>Event Mode *</InputLabel>
//             <Select name="eventMode" value={formData.eventMode} onChange={handleChange}>
//               <MenuItem value="In-Person">In-Person</MenuItem>
//               <MenuItem value="Online">Online</MenuItem>
//             </Select>
//           </FormControl>

//                   {formData.eventMode === "In-Person" && (
//             <Box sx={{ mt: 3 }}>
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <TextField 
//                   label="Venue *" 
//                   variant="outlined" 
//                   name="venue" 
//                   value={formData.venue} 
//                   onChange={handleChange} 
//                 />
//               </FormControl>

//               <Grid container spacing={3} sx={{ mb: 3 }}>
//                 <Grid item xs={12} sm={4}>
//                   <FormControl fullWidth>
//                     <InputLabel>Country *</InputLabel>
//                     <Select name="country" value={formData.country} onChange={handleChange}>
//                       <MenuItem value="India">India</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <FormControl fullWidth>
//                     <InputLabel>State *</InputLabel>
//                     <Select name="state" value={formData.state} onChange={handleChange}>
//                       <MenuItem value="Gujarat">Gujarat</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <FormControl fullWidth>
//                     {/* <TextField label="City *" value={formData.city}  */}
//                     <InputLabel>City *</InputLabel>
//                     <Select name="city" value={formData.city} onChange={handleChange}>
//                       <MenuItem value="Gujarat">Ahmedabad</MenuItem>
//                       </Select>
//                       </FormControl>
//                 </Grid>
//               </Grid>
//             </Box>
//           )}

//           {formData.eventMode === "Online" && (
//             <Box sx={{ mt: 3 }}>
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <TextField 
//                   label="Join URL *" 
//                   variant="outlined" 
//                   name="joinURL" 
//                   value={formData.joinURL} 
//                   onChange={handleChange} 
//                   placeholder="https://example.com/join" 
//                 />
//               </FormControl>
//             </Box>
//           )}


//           {/* Tickets Section */}
//           {formData.eventType && (
//             <Box sx={{ mt: 3 }}>
//               <Stack direction="row" justifyContent="space-between" alignItems="center">
//                 <Typography variant="h6">Tickets</Typography>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   size="small"
//                   onClick={handleAddTicket}
//                   startIcon={<AddIcon />}
//                 >
//                   New Ticket
//                 </Button>
//               </Stack>

//               {tickets.map((ticket, index) => (
//                 <Card
//                   key={index}
//                   variant="outlined"
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     p: 2,
//                     my: 2,
//                     borderRadius: 2,
//                   }}
//                 >
//                   <Box>
//                     <Typography variant="body1" fontWeight="bold">
//                       {ticket.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {format(ticket.startDate, "MMM d")} - {format(ticket.endDate, "MMM d, yyyy")}
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={1}>
//                       <Checkbox
//                         name="soldOut"
//                         checked={ticket.soldOut}
//                         onChange={(e) => handleTicketChange(e, index)}
//                         size="small"
//                       />
//                       <Typography variant="body2">Sold Out</Typography>
//                       <IconButton onClick={() => handleEditTicket(index)} size="small">
//                         <EditIcon color="primary" />
//                       </IconButton>
//                       <IconButton onClick={() => handleDeleteTicket(index)} size="small">
//                         <DeleteIcon color="error" />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                   <Box textAlign="center">
//                     <Typography>{index + 1}</Typography>
//                     <Box
//                       sx={{
//                         background: "#5e2750",
//                         color: "white",
//                         px: 2,
//                         py: 0.5,
//                         borderRadius: 1,
//                         mt: 1,
//                       }}
//                     >
//                       {formData.eventType}
//                     </Box>
//                   </Box>
//                 </Card>
//               ))}
//             </Box>
//           )}

//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Button
//                 variant="contained"
//                 className="primary-button1"
//                 sx={{ mt: 2 }}
//                 onClick={handleCreateEvent}
//               >
//                 Create Event
//               </Button>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={4000}
//         onClose={() => setOpenSnackbar(false)}
//       >
//         <Alert severity="info" onClose={() => setOpenSnackbar(false)}>
//           {errorMessage}
//         </Alert>
//       </Snackbar>
//     </LocalizationProvider>
//   );
// };

// export default CreateEvent;

import React, { useState } from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Divider,
  Snackbar,
  Alert,
  IconButton,
  Checkbox,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useAuth } from "../User/AuthContext";
import "./CreateEvent.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    startDate: new Date(),
    endDate: new Date(new Date().setHours(new Date().getHours() + 2)),
    timeZone: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
    eventType: "Free",
    eventMode: "In-Person",
    location: "",
    country: "",
    state: "",
    city: "",
    joinURL: "",
    description: "",
    image: null
  });

  const [tickets, setTickets] = useState([{
    title: "General Admission",
    price: 0,
    quantity: 100,
    description: "",
    startDate: new Date(),
    endDate: new Date(new Date().setHours(new Date().getHours() + 2)),
    soldOut: false
  }]);

  const [editingTicketIndex, setEditingTicketIndex] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "eventMode" && value === "Online" ? {
        location: "",
        country: "",
        state: "",
        city: ""
      } : {}),
      ...(name === "eventMode" && value === "In-Person" ? {
        joinURL: ""
      } : {})
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    // Check file type
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Only image files are allowed (JPEG, PNG)');
      setOpenSnackbar(true);
      return;
    }
  
    // Check file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Image size must be less than 10MB');
      setOpenSnackbar(true);
      return;
    }
  
    setSelectedImage(URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, image: file }));
  };

  // Handle ticket field changes
  const handleTicketChange = (e, index) => {
    const { name, value, type, checked } = e.target;
    setTickets(prev => prev.map((ticket, i) =>
      i === index ? {
        ...ticket,
        [name]: type === 'checkbox' ? checked : value,
        ...(name === 'price' && formData.eventType === 'Free' ? { price: 0 } : {})
      } : ticket
    ));
  };

  // Add a new ticket
  const handleAddTicket = () => {
    const newTicket = {
      title: "New Ticket",
      price: formData.eventType === "Free" ? 0 : "",
      quantity: 100,
      description: "",
      startDate: formData.startDate,
      endDate: formData.endDate,
      soldOut: false
    };
    setTickets(prev => [...prev, newTicket]);
    setEditingTicketIndex(tickets.length);
  };

  // Edit a ticket
  const handleEditTicket = (index) => {
    setEditingTicketIndex(index);
  };

  // Delete a ticket
  const handleDeleteTicket = (index) => {
    if (tickets.length <= 1) {
      setErrorMessage("You must have at least one ticket type");
      setOpenSnackbar(true);
      return;
    }
    setTickets(prev => prev.filter((_, i) => i !== index));
    setEditingTicketIndex(null);
  };

  // Validate form inputs
  const validateForm = () => {
    const { name, startDate, endDate, eventType, eventMode, description } = formData;

    if (!name || !startDate || !endDate || !eventType || !eventMode || !description) {
      return "Please fill all required fields.";
    }

    if (startDate >= endDate) {
      return "End date must be after start date.";
    }

    if (eventMode === "In-Person") {
      if (!formData.location || !formData.city || !formData.state || !formData.country) {
        return "Please fill all venue details for In-Person events.";
      }
    } else if (!formData.joinURL) {
      return "Please provide a valid Join URL for Online events.";
    }

    if (tickets.length === 0) {
      return "Please add at least one ticket type.";
    }

    for (const ticket of tickets) {
      if (!ticket.title || !ticket.startDate || !ticket.endDate) {
        return "Please fill all required ticket fields.";
      }

      if (ticket.startDate >= ticket.endDate) {
        return "Ticket end date must be after start date.";
      }

      if (formData.eventType === "Paid" && (isNaN(ticket.price) || ticket.price <= 0)) {
        return "Please enter valid prices for all tickets.";
      }

      if (isNaN(ticket.quantity) || ticket.quantity <= 0) {
        return "Please enter valid quantities for all tickets.";
      }
    }

    return null;
  };

  const handleCreateEvent = async () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      setErrorMessage(validationMessage);
      setOpenSnackbar(true);
      return;
    }

    try {
      setLoading(true);

      const formPayload = new FormData();

      // Append all form data
      formPayload.append('name', formData.name);
      formPayload.append('date', format(formData.startDate, 'yyyy-MM-dd'));
      formPayload.append('time', format(formData.startDate, 'HH:mm'));
      formPayload.append('eventType', formData.eventType);
      formPayload.append('eventMode', formData.eventMode);
      formPayload.append('description', formData.description);

      // Handle location based on event mode
      if (formData.eventMode === "In-Person") {
        formPayload.append('location', `${formData.location}, ${formData.city}, ${formData.state}, ${formData.country}`);
      } else {
        formPayload.append('location', formData.joinURL);
      }

      // Append image if exists
      if (formData.image) {
        formPayload.append('image', formData.image);
      }

      // Append tickets
      formPayload.append('ticketTypes', JSON.stringify(
        tickets.map(ticket => ({
          name: ticket.title,
          price: Number(ticket.price),
          quantity: Number(ticket.quantity),
          description: ticket.description,
          validFrom: format(ticket.startDate, 'yyyy-MM-dd'),
          validTo: format(ticket.endDate, 'yyyy-MM-dd')
        }))
      ));

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await axios.post(
        'http://localhost:5000/api/events',
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        }
      );

      if (!response.data.success) {
        throw new Error(response.data.message || 'Event creation failed');
      }

      navigate(`/event-details/${response.data.event._id}`, {
        state: {
          event: response.data.event,
          badgePath: response.data.badgePath,
          badgePDFPath: response.data.badgePDFPath
        }
      });
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        'Failed to create event. Please try again.'
      );
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="Banner">
        <Typography variant="h4" fontWeight="bold">
          Create Event
        </Typography>
        <Typography variant="body1" className="Banner-subtext">
          Provide basic event details to get started.
        </Typography>
      </Box>

      <Card className="event-cardCD">
        <CardContent>
          {/* Form Fields */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField
              label="Event Name *"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField
              label="Description *"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
            />
          </FormControl>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Starts On *"
                value={formData.startDate}
                onChange={(date) => setFormData({ ...formData, startDate: date })}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Ends On *"
                value={formData.endDate}
                onChange={(date) => setFormData({ ...formData, endDate: date })}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Time Zone *</InputLabel>
            <Select name="timeZone" value={formData.timeZone} onChange={handleChange}>
              <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
                (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <Typography>Event Type *</Typography>
            <RadioGroup row name="eventType" value={formData.eventType} onChange={handleChange}>
              <FormControlLabel value="Free" control={<Radio />} label="Free" />
              <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Event Mode *</InputLabel>
            <Select name="eventMode" value={formData.eventMode} onChange={handleChange}>
              <MenuItem value="In-Person">In-Person</MenuItem>
              <MenuItem value="Online">Online</MenuItem>
            </Select>
          </FormControl>

          {formData.eventMode === "In-Person" && (
            <Box sx={{ mt: 3 }}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  label="Venue *"
                  variant="outlined"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </FormControl>

              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel>Country *</InputLabel>
                    <Select name="country" value={formData.country} onChange={handleChange}>
                      <MenuItem value="India">India</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel>State *</InputLabel>
                    <Select name="state" value={formData.state} onChange={handleChange}>
                      <MenuItem value="Gujarat">Gujarat</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel>City *</InputLabel>
                    <Select name="city" value={formData.city} onChange={handleChange}>
                      <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          )}

          {formData.eventMode === "Online" && (
            <Box sx={{ mt: 3 }}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  label="Join URL *"
                  variant="outlined"
                  name="joinURL"
                  value={formData.joinURL}
                  onChange={handleChange}
                  placeholder="https://example.com/join"
                />
              </FormControl>
            </Box>
          )}

          {/* Tickets Section */}
          <Box sx={{ mt: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Tickets *</Typography>
              <Button
                variant="contained"
                color="error"
                size="small"
                onClick={handleAddTicket}
                startIcon={<AddIcon />}
              >
                New Ticket
              </Button>
            </Stack>

            {tickets.map((ticket, index) => (
              <Card
                key={index}
                variant="outlined"
                sx={{
                  p: 2,
                  my: 2,
                  borderRadius: 2,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Ticket Name *"
                      name="title"
                      value={ticket.title}
                      onChange={(e) => handleTicketChange(e, index)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      value={ticket.description}
                      onChange={(e) => handleTicketChange(e, index)}
                      multiline
                      rows={2}
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {formData.eventType === "Paid" && (
                      <TextField
                        fullWidth
                        label="Price (₹) *"
                        name="price"
                        type="number"
                        value={ticket.price}
                        onChange={(e) => handleTicketChange(e, index)}
                        sx={{ mb: 2 }}
                      />
                    )}
                    <TextField
                      fullWidth
                      label="Quantity"
                      name="quantity"
                      type="number"
                      value={ticket.quantity}
                      onChange={(e) => handleTicketChange(e, index)}
                      sx={{ mb: 2 }}
                    />
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Box display="flex" alignItems="center">
                        <Checkbox
                          name="soldOut"
                          checked={ticket.soldOut}
                          onChange={(e) => handleTicketChange(e, index)}
                          size="small"
                        />
                        <Typography variant="body2">Sold Out</Typography>
                      </Box>
                      <Box>
                        <IconButton onClick={() => handleEditTicket(index)}>
                          <EditIcon color="primary" />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteTicket(index)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Box>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                variant="contained"
                className="primary-button1"
                sx={{ mt: 2 }}
                onClick={handleCreateEvent}
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create Event'}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error" onClose={handleCloseSnackbar}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default CreateEvent;