import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography, Box, Alert, Paper, Container } from "@mui/material";

const VerifyOTP = () => {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const query = new URLSearchParams(location.search);
    const userId = query.get("userId");
    const email = query.get("email");

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            console.log("Verifying OTP for:", { userId, email, otp });

            const response = await axios.post(
                "http://localhost:5000/api/users/verify-otp",
                {
                    userId,
                    email: decodeURIComponent(email), // Decode the email
                    otp
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            console.log("Verification response:", response.data);

            if (response.data.success) {
                setSuccess("Account verified successfully! Redirecting to login...");

                // Store token if received
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                }

                setTimeout(() => navigate("/login"), 2000);
            }
        } catch (err) {
            console.error("Verification error:", err.response?.data || err);

            // Enhanced error handling
            const errorMessage = err.response?.data?.message ||
                "OTP verification failed. Please try again.";
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleResendOTP = async () => {
        try {
            setError("");
            setSuccess("");

            const response = await axios.post(
                "http://localhost:5000/api/users/resend-otp",
                {
                    userId,
                    email: decodeURIComponent(email)
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            if (response.data.message) {
                setSuccess("New OTP sent to your email");
            }
        } catch (err) {
            console.error("Resend OTP error:", err.response?.data || err);
            setError(err.response?.data?.message || "Failed to resend OTP");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Verify Your Email
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    We've sent a 6-digit OTP to {decodeURIComponent(email)}. Please enter it below.
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {success}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleVerify}>
                    <TextField
                        fullWidth
                        label="OTP Code"
                        variant="outlined"
                        value={otp}
                        onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setOtp(value);
                        }}
                        margin="normal"
                        required
                        inputProps={{ maxLength: 6 }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        sx={{ mt: 2 }}
                    >
                        {loading ? "Verifying..." : "Verify Account"}
                    </Button>

                    <Button
                        variant="text"
                        fullWidth
                        onClick={handleResendOTP}
                        sx={{ mt: 1 }}
                    >
                        Resend OTP
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default VerifyOTP;