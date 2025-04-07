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
//   IconButton,
//   Divider,
// } from "@mui/material";
// import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material"; // ✅ Correct icon imports

// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { format } from "date-fns";
// import "./CreateEvent.css";

// const CreateEvent = () => {
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

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
  
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//     <Box className="banner">
//       <Typography variant="h4" fontWeight="bold">
//         Create Event
//       </Typography>
//       <Typography variant="body1" className="banner-subtext">
//         Provide basic event details to get started. Once the event is created, you'll be directed to the event admin dashboard.
//       </Typography>
//     </Box>

//     <Card  className="event-card" >
   
//     <CardContent>
//         <FormControl fullWidth sx={{ mb: 3 }}>
//           <TextField 
//             label="Event Name *" 
//             variant="outlined" 
//             name="eventName" 
//             value={formData.eventName} 
//             onChange={handleChange} 
//           />
//         </FormControl>

//         <Grid container spacing={3} sx={{ mb: 3 }}>
//           <Grid item xs={12} sm={6}>
//             <DateTimePicker 
//               label="Starts On *" 
//               value={formData.startDate} 
//               onChange={(date) => setFormData({ ...formData, startDate: date })} 
//               renderInput={(params) => <TextField {...params} fullWidth />} 
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <DateTimePicker 
//               label="Ends On *" 
//               value={formData.endDate} 
//               onChange={(date) => setFormData({ ...formData, endDate: date })} 
//               renderInput={(params) => <TextField {...params} fullWidth />} 
//             />
//           </Grid>
//         </Grid>

//         <FormControl fullWidth sx={{ mb: 3 }}>
//           <InputLabel>Time Zone *</InputLabel>
//           <Select name="timeZone" value={formData.timeZone} onChange={handleChange}>
//             <MenuItem value="(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi">
//               (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
//             </MenuItem>
//           </Select>
//         </FormControl>

//           <FormControl sx={{ mb: 3 }}>
//             <Typography>Event Type *</Typography>
//             <RadioGroup
//               row
//               name="eventType"
//               value={formData.eventType}
//               onChange={handleChange}
//             >
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

//           {formData.eventMode === "In-Person" && (
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
//                     <TextField label="City *" value={formData.city} 
//                     // disabled
//                      />
//                   </FormControl>
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

//             {/* Ticket Section when 'Free' is selected */}
//             {formData.eventType === "Free" && (
//             <Box sx={{ mb: 3, maxWidth: '70%' }}>
//               <Box sx={{ mb: 2 }}>
//                 <Box sx={{ 
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Typography variant="body1">Community Ticket</Typography>
//                     <Box sx={{ ml: 1 }}>
//                       <IconButton size="small">
//                         <EditIcon fontSize="small" />
//                       </IconButton>
//                       <IconButton size="small">
//                         <DeleteIcon fontSize="small" />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                   <Typography variant="body1" color="primary">
//                     Free
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" color="text.secondary">
//                   {format(formData.startDate, "MMM d")} -{" "}
//                   {format(formData.endDate, "MMM d, y")}
//                 </Typography>
//                 <Typography variant="body2" color="error">
//                   Sold Out
//                 </Typography>
//               </Box>
//               <Divider />
//               <Box sx={{ mt: 2 }}>
//                 <Button 
//                   variant="contained" 
//                   sx={{ cursor: "pointer" }} 
//                   className="primary-button1"
//                 >
//                   New Ticket
//                 </Button>
//               </Box>
//             </Box>
//           )}

//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Button 
//                 variant="contained" 
//                 className="primary-button1"
//                 sx={{ mt: 2 }}
//               >
//                 Create Event
//               </Button>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format, isSameDay, isSameYear } from "date-fns";
import "./CreateEvent.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    startDate: new Date(),
    endDate: new Date(),
    timeZone: "(GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi",
    eventType: "",
    eventMode: "",
    venue: "",
    country: "",
    state: "",
    city: "",
    joinURL: "",
  });

  // const [errorMessage, setErrorMessage] = useState("");
  // const [openSnackbar, setOpenSnackbar] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const formatDateRange = (start, end) => {
  //   if (!start || !end) return "";
  //   const startDate = new Date(start);
  //   const endDate = new Date(end);

  //   if (isSameDay(startDate, endDate)) {
  //     return format(startDate, "MMM d, yyyy");
  //   } else if (isSameYear(startDate, endDate)) {
  //     return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d, yyyy")}`;
  //   } else {
  //     return `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`;
  //   }
  // };

  // const validateForm = () => {
  //   const { eventName, startDate, endDate, eventType, eventMode, venue, country, state, city, joinURL } = formData;

  //   if (!eventName || !startDate || !endDate || !eventType || !eventMode) {
  //     return "Please fill all required fields.";
  //   }

  //   if (eventMode === "In-Person" && (!venue || !country || !state || !city)) {
  //     return "Please fill venue details for In-Person events.";
  //   }

  //   if (eventMode === "Online" && !joinURL) {
  //     return "Please provide a valid Join URL for Online events.";
  //   }

  //   return null;
  // };

  // const handleCreateEvent = () => {
  //   const validationMessage = validateForm();

  //   if (validationMessage) {
  //     setErrorMessage(validationMessage);
  //     setOpenSnackbar(true);
  //   } else {
  //     navigate("/event-details");
  //   }
  // };


  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { eventName, startDate, endDate, eventType, eventMode, venue, country, state, city, joinURL } = formData;

    if (!eventName || !startDate || !endDate || !eventType || !eventMode) {
      return "Please fill all required fields.";
    }

    if (eventMode === "In-Person" && (!venue || !country || !state || !city)) {
      return "Please fill venue details for In-Person events.";
    }

    if (eventMode === "Online" && !joinURL) {
      return "Please provide a valid Join URL for Online events.";
    }

    return null;
  };

  const handleCreateEvent = () => {
    const validationMessage = validateForm();

    if (validationMessage) {
      setErrorMessage(validationMessage);
      setOpenSnackbar(true);
    } else {
      navigate("/event-details");
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="Banner">
        <Typography variant="h4" fontWeight="bold">
          Create Event
        </Typography>
        <Typography variant="body1" className="Banner-subtext">
          Provide basic event details to get started. Once the event is created, you'll be directed to the event admin dashboard.
        </Typography>
      </Box>

      <Card className="event-cardCD">
        <CardContent>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField label="Event Name *" variant="outlined" name="eventName" value={formData.eventName} onChange={handleChange} />
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
                <TextField label="Venue *" variant="outlined" name="venue" value={formData.venue} onChange={handleChange} />
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
                    <TextField label="City *" name="city" value={formData.city} onChange={handleChange} />
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

{formData.eventType && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tickets
              </Typography>
              <Card variant="outlined" sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="body1" fontWeight="bold">
                    Community Ticket
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {format(formData.startDate, 'MMM d')} - {format(formData.endDate, 'MMM d, y')}
                  </Typography>
                  <Typography variant="body2">
                    Type: {formData.eventType} Ticket
                  </Typography>
                  <Typography variant="body2" color="error">
                    Sold Out
                  </Typography>
                </CardContent>
              </Card>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                New Ticket
              </Typography>
            </Box>
          )}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button variant="contained" className="primary-button1" sx={{ mt: 2 }} onClick={handleCreateEvent}>
                Create Event
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="info" onClose={() => setOpenSnackbar(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default CreateEvent;
