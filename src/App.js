// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// // Admin components
// import NavbarA from "./Admin/NavbarA";
// import HeaderA from "./Admin/HeaderA";
// import DashboardA from "./Admin/DashboardA";
// import ConferencesA from "./Admin/ConferencesA";
// import UsersA from "./Admin/UsersA";
// import SettingsA from "./Admin/SettingsA";

// // User components
// import Homepage from "./User/Homepage";
// import Login from "./User/Login";
// import Registration from "./User/Registration";
// import VerifyOTP from "./User/VerifyOTP";
// import Event from "./User/Event";
// import ViewDetails from './User/ViewDetails';
// import Price from "./User/Price";
// import Feature from "./User/Feature";
// import Usecases from "./User/Usecases";
// import CreateEvent from "./CreateEvent";

// // Organizer components
// import Overview from "./Organizer/Overview";
// import EventDetails from "./Organizer/Event/EventDetails";
// import Tickets from "./Organizer/Event/Tickets";
// import OrganizerDetails from "./Organizer/Event/OrganizerDetails";
// import Speaker from "./Organizer/Event/Speaker";
// import Sponsors from "./Organizer/Event/Sponsors";
// import Participants from "./Organizer/Participants";
// import Feedback from "./Organizer/Feedback";
// import Advanced from "./Organizer/Advanced";
// import Credits from "./Organizer/Credits";
// import Sidebar from "./Organizer/Sidebar";
// import Analytics from "./Organizer/Analytics";
// import HeaderO from "./Organizer/HeaderO";

// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
//       </Router>
//     </ThemeProvider>
//   );
// }

// function MainContent({ darkMode, setDarkMode }) {
//   const location = useLocation();

//   const adminRoutes = ["/admin", "/conferences", "/admin-users", "/admin-settings"];
//   const organizerRoutes = [
//     "/analytics", "/overview", "/event-details",
//     "/tickets", "/organizer-details", "/speaker", "/sponsors",
//     "/participants", "/feedback", "/advanced", "/credits"
//   ];

//   const isAdminRoute = adminRoutes.includes(location.pathname);
//   const isOrganizerRoute = organizerRoutes.includes(location.pathname);

//   if (isAdminRoute) {
//     return (
//       <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//         <HeaderA darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Box sx={{ display: "flex", flexGrow: 1 }}>
//           <NavbarA />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <Routes>
//               <Route path="/admin" element={<DashboardA />} />
//               <Route path="/conferences" element={<ConferencesA />} />
//               <Route path="/admin-users" element={<UsersA />} />
//               <Route path="/admin-settings" element={<SettingsA />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <div className="app-container">
//       {isOrganizerRoute && <Sidebar />}
//       <main className={`main-content ${isOrganizerRoute ? "with-sidebar" : ""}`}>
//         {isOrganizerRoute && <HeaderO />}
//         <div className="content-wrapper">
//           <Routes>
//             {/* User Routes */}
//             <Route path="/" element={<Homepage />} />
//             <Route path="/home" element={<Homepage />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Registration />} />
//             <Route path="/verify-otp" element={<VerifyOTP />} />
//             <Route path="/events" element={<Event />} />
//             <Route path="/events/:eventTitle" element={<ViewDetails />} />
//             <Route path="/pricing" element={<Price />} />
//             <Route path="/features" element={<Feature />} />
//             <Route path="/use-cases" element={<Usecases />} />
//             <Route path="/createEvent" element={<CreateEvent />} />

//             {/* Organizer Routes */}
//             <Route path="/overview" element={<Overview />} />
//             <Route path="/event-details" element={<EventDetails />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/tickets" element={<Tickets />} />
//             <Route path="/organizer-details" element={<OrganizerDetails />} />
//             <Route path="/speaker" element={<Speaker />} />
//             <Route path="/sponsors" element={<Sponsors />} />
//             <Route path="/participants" element={<Participants />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/advanced" element={<Advanced />} />
//             <Route path="/credits" element={<Credits />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { AuthProvider, useAuth } from "./User/AuthContext";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Admin components
import NavbarA from "./Admin/NavbarA";
import HeaderA from "./Admin/HeaderA";
import DashboardA from "./Admin/DashboardA";
import ConferencesA from "./Admin/ConferencesA";
import UsersA from "./Admin/UsersA";
import SettingsA from "./Admin/SettingsA";

// User components
import Homepage from "./User/Homepage";
import Login from "./User/Login";
import Registration from "./User/Registration";
import VerifyOTP from "./User/VerifyOTP";
import ResetPassword from './User/ResetPassword';
import Profile from "./User/Profile";
import Event from "./User/Event";
import ViewDetails from './User/ViewDetails';
import EditEvent from "./Organizer/Event/EditEvent";
import Price from "./User/Price";
import Feature from "./User/Feature";
import Usecases from "./User/Usecases";
import CreateEvent from "./Organizer/CreateEvent";

// Organizer components
import Overview from "./Organizer/Overview";
import EventDetails from "./Organizer/Event/EventDetails";
import Tickets from "./Organizer/Event/Tickets";
import OrganizerDetails from "./Organizer/Event/OrganizerDetails";
import Speaker from "./Organizer/Event/Speaker";
import Sponsors from "./Organizer/Event/Sponsors";
import Participants from "./Organizer/Participants";
import Feedback from "./Organizer/Feedback";
import Advanced from "./Organizer/Advanced";
import Credits from "./Organizer/Credits";
import Sidebar from "./Organizer/Sidebar";
import Analytics from "./Organizer/Analytics";
import HeaderO from "./Organizer/HeaderO";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AuthProvider>
            <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function MainContent({ darkMode, setDarkMode }) {
  const location = useLocation();

  const adminRoutes = ["/admin", "/conferences", "/admin-users", "/admin-settings"];
  const organizerRoutes = [
    "/analytics", "/overview", "/event-details",
    "/tickets", "/organizer-details", "/speaker", "/sponsors",
    "/participants", "/feedback", "/advanced", "/credits"
  ];

  const isAdminRoute = adminRoutes.includes(location.pathname);
  const isOrganizerRoute = organizerRoutes.includes(location.pathname);

  if (isAdminRoute) {
    return (
      <ProtectedRoute requiredRole="admin">
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <HeaderA darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <NavbarA />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/admin" element={<DashboardA />} />
                <Route path="/conferences" element={<ConferencesA />} />
                <Route path="/admin-users" element={<UsersA />} />
                <Route path="/admin-settings" element={<SettingsA />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </ProtectedRoute>
    );
  }

  return (
    <div className="app-container">
      {isOrganizerRoute && <Sidebar />}
      <main className={`main-content ${isOrganizerRoute ? "with-sidebar" : ""}`}>
        {isOrganizerRoute && <HeaderO />}
        <div className="content-wrapper">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/events" element={<Event />} />
            <Route path="/events/:id" element={<ViewDetails />} />
            <Route path="/events/:id/edit" element={<EditEvent />} />
            <Route path="/pricing" element={<Price />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/use-cases" element={<Usecases />} />

            {/* Protected User Routes */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

            <Route path="/createEvent" element={
              <ProtectedRoute>
                <CreateEvent />
              </ProtectedRoute>
            } />

            {/* Protected Organizer Routes */}
            <Route path="/overview" element={
              <ProtectedRoute requiredRole="organizer">
                <Overview />
              </ProtectedRoute>
            } />
            <Route path="/event-details" element={
              <ProtectedRoute requiredRole="organizer">
                <EventDetails />
              </ProtectedRoute>
            } />
            <Route path="/event-details/:eventId" element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute requiredRole="organizer">
                <Analytics />
              </ProtectedRoute>
            } />
            <Route path="/tickets" element={
              <ProtectedRoute requiredRole="organizer">
                <Tickets />
              </ProtectedRoute>
            } />
            <Route path="/organizer-details" element={
              <ProtectedRoute requiredRole="organizer">
                <OrganizerDetails />
              </ProtectedRoute>
            } />
            <Route path="/speaker" element={
              <ProtectedRoute requiredRole="organizer">
                <Speaker />
              </ProtectedRoute>
            } />
            <Route path="/sponsors" element={
              <ProtectedRoute requiredRole="organizer">
                <Sponsors />
              </ProtectedRoute>
            } />
            <Route path="/participants" element={
              <ProtectedRoute requiredRole="organizer">
                <Participants />
              </ProtectedRoute>
            } />
            <Route path="/feedback" element={
              <ProtectedRoute requiredRole="organizer">
                <Feedback />
              </ProtectedRoute>
            } />
            <Route path="/advanced" element={
              <ProtectedRoute requiredRole="organizer">
                <Advanced />
              </ProtectedRoute>
            } />
            <Route path="/credits" element={
              <ProtectedRoute requiredRole="organizer">
                <Credits />
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
// import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// // Admin components
// import NavbarA from "./Admin/NavbarA";
// import HeaderA from "./Admin/HeaderA";
// import DashboardA from "./Admin/DashboardA";
// import ConferencesA from "./Admin/ConferencesA";
// import UsersA from "./Admin/UsersA";
// import SettingsA from "./Admin/SettingsA";

// // User components
// import Homepage from "./User/Homepage";
// import Login from "./User/Login";
// import Registration from "./User/Registration";
// import Event from "./User/Event";
// import ViewDetails from './User/ViewDetails';
// import Price from "./User/Price";
// import Feature from "./User/Feature";
// import Usecases from "./User/Usecases";
// import CreateEvent from "./CreateEvent";

// // Organizer components
// import Overview from "./Organizer/Overview";
// import EventDetails from "./Organizer/Event/EventDetails";
// import Tickets from "./Organizer/Event/Tickets";
// import OrganizerDetails from "./Organizer/Event/OrganizerDetails";
// import Speaker from "./Organizer/Event/Speaker";
// import Sponsors from "./Organizer/Event/Sponsors";
// import Participants from "./Organizer/Participants";
// import Feedback from "./Organizer/Feedback";
// import Advanced from "./Organizer/Advanced";
// import Credits from "./Organizer/Credits";
// import Sidebar from "./Organizer/Sidebar";
// import Analytics from "./Organizer/Analytics";
// import HeaderO from "./Organizer/HeaderO";

// import "./App.css";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const theme = createTheme({
//     palette: {
//       mode: darkMode ? "dark" : "light",
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <MainContent
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           isAuthenticated={isAuthenticated}
//           setIsAuthenticated={setIsAuthenticated}
//         />
//       </Router>
//     </ThemeProvider>
//   );
// }

// function MainContent({ darkMode, setDarkMode, isAuthenticated, setIsAuthenticated }) {
//   const location = useLocation();

//   const adminRoutes = ["/admin", "/conferences", "/admin-users", "/admin-settings"];
//   const organizerRoutes = [
//     "/analytics", "/overview", "/event-details",
//     "/tickets", "/organizer-details", "/speaker", "/sponsors",
//     "/participants", "/feedback", "/advanced", "/credits"
//   ];

//   const isAdminRoute = adminRoutes.includes(location.pathname);
//   const isOrganizerRoute = organizerRoutes.includes(location.pathname);

//   // Redirect to login if trying to access admin routes without authentication
//   if (isAdminRoute && !isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (isAdminRoute) {
//     return (
//       <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//         <HeaderA
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           setIsAuthenticated={setIsAuthenticated}
//         />
//         <Box sx={{ display: "flex", flexGrow: 1 }}>
//           <NavbarA />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <Routes>
//               <Route path="/admin" element={<DashboardA />} />
//               <Route path="/conferences" element={<ConferencesA />} />
//               <Route path="/admin-users" element={<UsersA />} />
//               <Route path="/admin-settings" element={<SettingsA />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Box>
//     );
//   }

//   return (
//     <div className="app-container">
//       {isOrganizerRoute && <Sidebar />}
//       <main className={`main-content ${isOrganizerRoute ? "with-sidebar" : ""}`}>
//         {isOrganizerRoute && <HeaderO />}
//         <div className="content-wrapper">
//           <Routes>
//             {/* User Routes */}
//             <Route path="/" element={<Homepage />} />
//             <Route path="/home" element={<Homepage />} />
//             <Route
//               path="/login"
//               element={<Login setIsAuthenticated={setIsAuthenticated} />}
//             />
//             <Route path="/register" element={<Registration />} />
//             <Route path="/events" element={<Event />} />
//             <Route path="/events/:eventTitle" element={<ViewDetails />} />
//             <Route path="/pricing" element={<Price />} />
//             <Route path="/features" element={<Feature />} />
//             <Route path="/use-cases" element={<Usecases />} />
//             <Route path="/createEvent" element={<CreateEvent />} />

//             {/* Organizer Routes */}
//             <Route path="/overview" element={<Overview />} />
//             <Route path="/event-details" element={<EventDetails />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/tickets" element={<Tickets />} />
//             <Route path="/organizer-details" element={<OrganizerDetails />} />
//             <Route path="/speaker" element={<Speaker />} />
//             <Route path="/sponsors" element={<Sponsors />} />
//             <Route path="/participants" element={<Participants />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/advanced" element={<Advanced />} />
//             <Route path="/credits" element={<Credits />} />
//           </Routes>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;