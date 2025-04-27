import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  InputAdornment,
  IconButton,
  Grid,
  Alert,
} from "@mui/material";
import { Person, Mail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import "./Registration.css";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
  
    // Enhanced frontend validation
    const validationErrors = [];
    
    if (!formData.firstName?.trim()) validationErrors.push("First name is required");
    if (!formData.lastName?.trim()) validationErrors.push("Last name is required");
    if (!formData.email?.trim()) validationErrors.push("Email is required");
    if (!formData.password) validationErrors.push("Password is required");
    if (!formData.confirmPassword) validationErrors.push("Confirm password is required");
  
    if (validationErrors.length > 0) {
      setError(validationErrors.join(". "));
      setLoading(false);
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
  
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }
  
    try {
      // Prepare data for backend
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(), // normalize email
        password: formData.password,
        confirmPassword: formData.confirmPassword // Include confirmPassword for backend validation
      };
  
      // Get referral code from URL if exists
      const urlParams = new URLSearchParams(window.location.search);
      const referralCode = urlParams.get('ref');
      if (referralCode) payload.referralCode = referralCode;
  
      console.log("Registration payload:", payload); // Debug log
  
      const response = await axios.post(
        "http://localhost:5000/api/users/register", 
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000 // 10 second timeout
        }
      );
  
      console.log("Registration response:", response.data); // Debug log
  
      if (response.data.message) {
        setSuccess(response.data.message);
        navigate(`/verify-otp?userId=${response.data.userId}&email=${encodeURIComponent(response.data.email)}`);
      }
    } catch (err) {
      console.error("Registration error:", err);
      
      // Enhanced error handling
      if (err.response) {
        // Handle backend validation errors
        if (err.response.status === 400) {
          if (err.response.data.missingFields) {
            setError(`Missing fields: ${err.response.data.missingFields.join(', ')}`);
          } else if (err.response.data.errors) {
            setError(err.response.data.errors.join('. '));
          } else {
            setError(err.response.data.message || "Validation failed");
          }
        } else if (err.response.status === 409) {
          setError("User already exists with this email");
        } else {
          setError(err.response.data.message || "Registration failed");
        }
      } else if (err.request) {
        // The request was made but no response was received
        setError("Server is not responding. Please try again later.");
      } else {
        // Something happened in setting up the request
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Background1">
      <Box className="Registration-container" maxWidth="sm">
        <Container maxWidth="sm">
          <Paper elevation={3} className="Registration-card">
            <Box className="Registration-header" sx={{ p: 3 }}>
              <Typography variant="h5" className="Registration-title">
                Create Your Account
              </Typography>
            </Box>

            <Box 
              component="form" 
              className="Registration-form" 
              onSubmit={handleRegister} 
              sx={{ p: 3 }}
            >
              {error && (
                <Alert severity="error" className="Error-Alert" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              
              {success && (
                <Alert severity="success" className="Success-Alert" sx={{ mb: 2 }}>
                  {success}
                </Alert>
              )}

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Mail />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                className="Registration-button"
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? "Processing..." : "Sign Up"}
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <a href="/login" style={{ textDecoration: "none", color: "#3f51b5" }}>
                  Back to Login
                </a>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default Registration;