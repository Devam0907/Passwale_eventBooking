import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EventDetail.css";
import { TextField, MenuItem, Button, Tabs, Tab, Box, Typography, Radio, RadioGroup, FormControlLabel, Card, CardMedia,} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { format } from "date-fns";

const EventDetail = () => {
  const location = useLocation();
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
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const generateEventURL = (eventName) => {
    if (!eventName) return "";
    return eventName.toLowerCase().replace(/\s+/g, '-') + "-event";
  };

  const generateShortName = (eventName) => {
    if (!eventName) return "";
    return eventName.substring(0, 20);
  };

  useEffect(() => {
    if (location.state?.formData) {
      const receivedData = location.state.formData;
      const startDate = receivedData.startDate instanceof Date ? receivedData.startDate : new Date(receivedData.startDate);
      const endDate = receivedData.endDate instanceof Date ? receivedData.endDate : new Date(receivedData.endDate);
      
      setFormData(prev => ({
        ...prev,
        ...receivedData,
        startDate,
        endDate,
        eventURL: receivedData.eventURL || generateEventURL(receivedData.eventName),
        eventShortName: receivedData.eventShortName || generateShortName(receivedData.eventName),
      }));
    }
  }, [location.state]);

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
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSave = () => {
    console.log("Form data saved:", formData);
  };

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
                rows={2}
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
            <Button className="save-btnD" onClick={handleSave}>Save</Button>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default EventDetail;