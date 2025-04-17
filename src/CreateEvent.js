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

  const [tickets, setTickets] = useState([]);
  const [editingTicketIndex, setEditingTicketIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTicketChange = (e, index) => {
    const newTickets = [...tickets];
    newTickets[index][e.target.name] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setTickets(newTickets);
  };

  const handleAddTicket = () => {
    setTickets([
      ...tickets,
      {
        title: "Community Ticket",
        soldOut: false,
        startDate: formData.startDate,
        endDate: formData.endDate,
      },
    ]);
    setEditingTicketIndex(tickets.length);
  };

  const handleEditTicket = (index) => {
    setEditingTicketIndex(index);
  };

  const handleDeleteTicket = (index) => {
    const newTickets = tickets.filter((_, i) => i !== index);
    setTickets(newTickets);
    setEditingTicketIndex(null);
  };

  const handleCreateEvent = () => {
    const validationMessage = validateForm();
    if (validationMessage) {
      setErrorMessage(validationMessage);
      setOpenSnackbar(true);
    } else {
      navigate("/event-details", { state: { formData, tickets } });
    }
  };

  const validateForm = () => {
    const {
      eventName,
      startDate,
      endDate,
      eventType,
      eventMode,
      venue,
      country,
      state,
      city,
      joinURL,
    } = formData;
    if (!eventName || !startDate || !endDate || !eventType || !eventMode) {
      return "Please fill all required fields.";
    }
    if (
      eventMode === "In-Person" && (!venue || !country || !state || !city)
    ) {
      return "Please fill venue details for In-Person events.";
    }
    if (eventMode === "Online" && !joinURL) {
      return "Please provide a valid Join URL for Online events.";
    }
    return null;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="Banner">
        <Typography variant="h4" fontWeight="bold">
          Create Event
        </Typography>
        <Typography variant="body1" className="Banner-subtext">
          Provide basic event details to get started. Once the event is created,
          you'll be directed to the event admin dashboard.
        </Typography>
      </Box>

      <Card className="event-cardCD">
        <CardContent>
          {/* Form Fields */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <TextField
              label="Event Name *"
              variant="outlined"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
            />
          </FormControl>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Starts On *"
                value={formData.startDate}
                onChange={(date) =>
                  setFormData({ ...formData, startDate: date })
                }
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                label="Ends On *"
                value={formData.endDate}
                onChange={(date) =>
                  setFormData({ ...formData, endDate: date })
                }
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
                  name="venue" 
                  value={formData.venue} 
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
                    {/* <TextField label="City *" value={formData.city}  */}
                    <InputLabel>City *</InputLabel>
                    <Select name="city" value={formData.city} onChange={handleChange}>
                      <MenuItem value="Gujarat">Ahmedabad</MenuItem>
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
          {formData.eventType && (
            <Box sx={{ mt: 3 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Tickets</Typography>
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    my: 2,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography variant="body1" fontWeight="bold">
                      {ticket.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {format(ticket.startDate, "MMM d")} - {format(ticket.endDate, "MMM d, yyyy")}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Checkbox
                        name="soldOut"
                        checked={ticket.soldOut}
                        onChange={(e) => handleTicketChange(e, index)}
                        size="small"
                      />
                      <Typography variant="body2">Sold Out</Typography>
                      <IconButton onClick={() => handleEditTicket(index)} size="small">
                        <EditIcon color="primary" />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteTicket(index)} size="small">
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <Typography>{index + 1}</Typography>
                    <Box
                      sx={{
                        background: "#5e2750",
                        color: "white",
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        mt: 1,
                      }}
                    >
                      {formData.eventType}
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          )}

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                variant="contained"
                className="primary-button1"
                sx={{ mt: 2 }}
                onClick={handleCreateEvent}
              >
                Create Event
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="info" onClose={() => setOpenSnackbar(false)}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
};

export default CreateEvent;
