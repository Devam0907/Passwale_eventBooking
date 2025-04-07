import React, { useState } from "react";
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
} from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UploadFileIcon from "@mui/icons-material/UploadFile";


const EventDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const [eventType, setEventType] = useState("Free");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <Box className="eventD-container">
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        className="eventD-tabs"
      >
        <Tab label={<span className="tab-labelD">BASIC INFO</span>} />
        {/* <Tab label="BASIC INFO" className="tab-label" /> */}
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
              />
              <TextField
                className="fullD-width"
                label="Event Short Name *"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <TextField
              className="fullD-width"
              label="Event URL"
              variant="outlined"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box className="input-group">
                <DateTimePicker
                  label="Start Date & Time *"
                  renderInput={(params) => (
                    <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
                  )}
                />
                <DateTimePicker
                  label="End Date & Time *"
                  renderInput={(params) => (
                    <TextField {...params} className="fullD-width" margin="normal" InputLabelProps={{ shrink: true }} />
                  )}
                />
              </Box>
            </LocalizationProvider>

            <TextField select className="fullD-width" label="Time Zone *" margin="normal" InputLabelProps={{ shrink: true }}>
              <MenuItem value="GMT+5:30">
                (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi
              </MenuItem>
            </TextField>

            <TextField select className="fullD-width" label="Event Mode *" margin="normal" InputLabelProps={{ shrink: true }}>
              <MenuItem value="In-Person">In-Person</MenuItem>
              <MenuItem value="Online">Online</MenuItem>
            </TextField>

            <Box className="input-group">
              <TextField className="fullD-width" label="Venue" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />
              <TextField className="fullD-width" label="City *" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />
            </Box>
            <TextField className="fullD-width" label="Country *" variant="outlined" margin="normal" InputLabelProps={{ shrink: true }} />

            <TextField
              className="fullD-width"
              label="Additional Venue Details"
              multiline
              rows={4}
              variant="outlined"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />

            <Box mt={3}>
              <Typography mb={1}>Event Type *</Typography>
              <RadioGroup row value={eventType} onChange={(e) => setEventType(e.target.value)}>
                <FormControlLabel value="Free" control={<Radio />} label={<span className="radio-labelD">Free</span>} />
                <FormControlLabel value="Paid" control={<Radio />} label={<span className="radio-labelD">Paid</span>} />
              </RadioGroup>
            </Box>

            <Box className="upload-sectionD">
              {selectedImage && (
                <Card sx={{ width: 80, height: 80 }}>
                  <CardMedia component="img" height="80" image={selectedImage} />
                </Card>
              )}
              <Button variant="outlined" component="label" startIcon={<UploadFileIcon />}>
                Upload Image
                <input type="file" hidden onChange={handleImageUpload} />
              </Button>
            </Box>
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <TextField
              className="fullD-width"
              label="Event Description"
              multiline
              rows={6}
              variant="outlined"
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        )}

        <Box className="buttonD-group" sx={{ mt: 3 }}>
          <Button className="cancel-btnD">Cancel</Button>
          <Button className="save-btnD">Save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetail;
