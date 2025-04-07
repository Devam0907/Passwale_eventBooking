import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Paper, 
  InputAdornment, 
  IconButton, 
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@mui/material";
import { Mail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }
    setError("");
    console.log("Login Data:", formData);
  };

  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => {
    setOpenForgotPassword(false);
    setForgotEmail("");
  };

  const handleForgotPasswordSubmit = () => {
    if (!forgotEmail) {
      setError("Please enter your email address");
      return;
    }
    console.log("Password reset requested for:", forgotEmail);
    handleForgotPasswordClose();
  };

  return (
    <div className={`Background ${openForgotPassword ? "blurred" : ""}`}>
      <Box className="Login-container" maxWidth="sm">
        <Container maxWidth="sm">
          <Paper elevation={3} className="Login-card">
            <Box className="Login-header" sx={{ p: 3 }}>
              <Typography variant="h5" className="Login-title">
                Login to Your Account
              </Typography>
            </Box>

            <Box component="form" className="login-form" onSubmit={handleLogin} sx={{ p: 3 }}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
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

              {error && (
                <Alert severity="error" className="Error-alert">
                  {error}
                </Alert>
              )}

              <Button fullWidth size="large" type="submit" variant="contained" className="Login-button">
                Login
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Don't have an account? {" "}
                <a href="/register" style={{ textDecoration: "none", color: "#3f51b5" }}>
                  Register Here
                </a>
              </Typography>

              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                <a 
                  href="#!"
                  onClick={handleForgotPasswordOpen}
                  style={{ textDecoration: "none", color: "#3f51b5" }}
                >
                  Forgot Password?
                </a>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Forgot Password Dialog */}
      <Dialog 
        open={openForgotPassword} 
        onClose={handleForgotPasswordClose}
        slotProps={{
          backdrop: {
            sx: {
              background: "rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(5px)"
            }
          }
        }}
      >
        <DialogTitle sx={{ fontWeight: 'bold' }}>Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 3 }}>
            Enter your email address and we'll send you a link to reset your password.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            label="Email Address"
            type="email"
            variant="outlined"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Mail fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleForgotPasswordSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Send Reset Link
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;