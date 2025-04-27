// import React from "react";
// import { 
//   Container, 
//   Typography, 
//   Box, 
//   TextField, 
//   Button, 
//   Paper, 
//   InputAdornment, 
//   IconButton, 
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText
// } from "@mui/material";
// import { Mail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Login.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [openForgotPassword, setOpenForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     // Basic validation
//     if (!formData.email || !formData.password) {
//       setError("Please enter both email and password");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/users/login",
//         {
//           email: formData.email.trim().toLowerCase(),
//           password: formData.password
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           }
//         }
//       );

//       if (response.data.success) {
//         // Store token in localStorage
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("user", JSON.stringify(response.data.user));
        
//         // Redirect based on user role
//         if (response.data.user.role === "admin") {
//           navigate("/admin");
//         } else {
//           navigate("/");
//         }
//       }
//     } catch (err) {
//       console.error("Login error:", err);
      
//       if (err.response) {
//         // Handle backend validation errors
//         setError(err.response.data.message || "Login failed. Please try again.");
//       } else if (err.request) {
//         // The request was made but no response was received
//         setError("Server is not responding. Please try again later.");
//       } else {
//         // Something happened in setting up the request
//         setError("An unexpected error occurred.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
//   const handleForgotPasswordClose = () => {
//     setOpenForgotPassword(false);
//     setForgotEmail("");
//   };

//   const handleForgotPasswordSubmit = async () => {
//     if (!forgotEmail) {
//       setError("Please enter your email address");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://localhost:5000/api/users/forgot-password",
//         { email: forgotEmail.trim().toLowerCase() }
//       );
//       handleForgotPasswordClose();
//       setError(""); // Clear any previous errors
//       alert("Password reset link sent to your email");
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to send reset link");
//     }
//   };

//   return (
//     <div className={`Background ${openForgotPassword ? "blurred" : ""}`}>
//       <Box className="Login-container" maxWidth="sm">
//         <Container maxWidth="sm">
//           <Paper elevation={3} className="Login-card">
//             <Box className="Login-header" sx={{ p: 3 }}>
//               <Typography variant="h5" className="Login-title">
//                 Login to Your Account
//               </Typography>
//             </Box>

//             <Box component="form" className="login-form" onSubmit={handleLogin} sx={{ p: 3 }}>
//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Mail />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Lock />
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton 
//                         onClick={handleClickShowPassword} 
//                         onMouseDown={handleMouseDownPassword}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {error && (
//                 <Alert severity="error" className="Error-alert" sx={{ mb: 2 }}>
//                   {error}
//                 </Alert>
//               )}

//               <Button 
//                 fullWidth 
//                 size="large" 
//                 type="submit" 
//                 variant="contained" 
//                 className="Login-button"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </Button>

//               <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                 Don't have an account? {" "}
//                 <a href="/register" style={{ textDecoration: "none", color: "#3f51b5" }}>
//                   Register Here
//                 </a>
//               </Typography>

//               <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//                 <a 
//                   href="#!"
//                   onClick={handleForgotPasswordOpen}
//                   style={{ textDecoration: "none", color: "#3f51b5" }}
//                 >
//                   Forgot Password?
//                 </a>
//               </Typography>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Forgot Password Dialog */}
//       <Dialog 
//         open={openForgotPassword} 
//         onClose={handleForgotPasswordClose}
//         slotProps={{
//           backdrop: {
//             sx: {
//               background: "rgba(0, 0, 0, 0.3)",
//               backdropFilter: "blur(5px)"
//             }
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 'bold' }}>Forgot Password</DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ mb: 3 }}>
//             Enter your email address and we'll send you a link to reset your password.
//           </DialogContentText>
//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}
//           <TextField
//             autoFocus
//             fullWidth
//             margin="dense"
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             value={forgotEmail}
//             onChange={(e) => setForgotEmail(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Mail fontSize="small" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleForgotPasswordSubmit}
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Send Reset Link
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Login;

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
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../User/AuthContext";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, location.state, navigate]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
  const handleForgotPasswordClose = () => {
    setOpenForgotPassword(false);
    setForgotEmail("");
  };

  const handleForgotPasswordSubmit = async () => {
    if (!forgotEmail) {
      setError("Please enter your email address");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/users/forgot-password",
        { email: forgotEmail.trim().toLowerCase() }
      );
      handleForgotPasswordClose();
      setError("");
      alert("Password reset link sent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link");
    }
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

              {error && (
                <Alert severity="error" className="Error-alert" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              <Button 
                fullWidth 
                size="large" 
                type="submit" 
                variant="contained" 
                className="Login-button"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
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
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
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

// import React from "react";
// import { 
//   Container, 
//   Typography, 
//   Box, 
//   TextField, 
//   Button, 
//   Paper, 
//   InputAdornment, 
//   IconButton, 
//   Alert,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText
// } from "@mui/material";
// import { Mail, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = ({ setIsAuthenticated }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [openForgotPassword, setOpenForgotPassword] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => setShowPassword(!showPassword);
//   const handleMouseDownPassword = (event) => event.preventDefault();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (formData.email === "pritamsuthar2003@gmail.com" && 
//         formData.password === "pritamsuthar2003") {
//       setIsAuthenticated(true);
//       navigate("/admin");
//       setError("");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   const handleForgotPasswordOpen = () => setOpenForgotPassword(true);
//   const handleForgotPasswordClose = () => {
//     setOpenForgotPassword(false);
//     setForgotEmail("");
//   };

//   const handleForgotPasswordSubmit = () => {
//     if (!forgotEmail) {
//       setError("Please enter your email address");
//       return;
//     }
//     console.log("Password reset requested for:", forgotEmail);
//     handleForgotPasswordClose();
//   };

//   return (
//     <div className={`Background ${openForgotPassword ? "blurred" : ""}`}>
//       <Box className="Login-container" maxWidth="sm">
//         <Container maxWidth="sm">
//           <Paper elevation={3} className="Login-card">
//             <Box className="Login-header" sx={{ p: 3 }}>
//               <Typography variant="h5" className="Login-title">
//                 Login to Your Account
//               </Typography>
//             </Box>

//             <Box component="form" className="login-form" onSubmit={handleLogin} sx={{ p: 3 }}>
//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Mail />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Lock />
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton 
//                         onClick={handleClickShowPassword} 
//                         onMouseDown={handleMouseDownPassword}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {error && (
//                 <Alert severity="error" className="Error-alert">
//                   {error}
//                 </Alert>
//               )}

//               <Button fullWidth size="large" type="submit" variant="contained" className="Login-button">
//                 Login
//               </Button>

//               <Typography variant="body2" align="center" sx={{ mt: 2 }}>
//                 Don't have an account? {" "}
//                 <a href="/register" style={{ textDecoration: "none", color: "#3f51b5" }}>
//                   Register Here
//                 </a>
//               </Typography>

//               <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//                 <a 
//                   href="#!"
//                   onClick={handleForgotPasswordOpen}
//                   style={{ textDecoration: "none", color: "#3f51b5" }}
//                 >
//                   Forgot Password?
//                 </a>
//               </Typography>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>

//       {/* Forgot Password Dialog */}
//       <Dialog 
//         open={openForgotPassword} 
//         onClose={handleForgotPasswordClose}
//         slotProps={{
//           backdrop: {
//             sx: {
//               background: "rgba(0, 0, 0, 0.3)",
//               backdropFilter: "blur(5px)"
//             }
//           }
//         }}
//       >
//         <DialogTitle sx={{ fontWeight: 'bold' }}>Forgot Password</DialogTitle>
//         <DialogContent>
//           <DialogContentText sx={{ mb: 3 }}>
//             Enter your email address and we'll send you a link to reset your password.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             fullWidth
//             margin="dense"
//             label="Email Address"
//             type="email"
//             variant="outlined"
//             value={forgotEmail}
//             onChange={(e) => setForgotEmail(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Mail fontSize="small" />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             color="primary"
//             onClick={handleForgotPasswordSubmit}
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Send Reset Link
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Login;