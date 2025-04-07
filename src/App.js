// import React from "react";
// import Login from "./User/Login";
// import Registration from "./User/Registration";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Homepage from "./User/Homepage";
// import Event from "./User/Event";
// import Price from "./User/Price";
// import Feature from "./User/Feature";
// import Usecases from "./User/Usecases";
// import CreateEvent from "./CreateEvent";
// import EventDetails from "./Organizer/Event/EventDetails";


// function App() {

//   return (
//     <div>

//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/Home" element={<Homepage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Registration />} />
//         <Route path="/events" element={<Event />} />
//         <Route path="/pricing" element={<Price />} />
//         <Route path="/features" element={<Feature />} />
//         <Route path="/use-cases" element={<Usecases/>} />
//         <Route path="/createEvent" element={<CreateEvent/>} />
//         <Route path="/event-details" element={<EventDetails/>} />

//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Admin components
import NavbarA from "./Admin/NavbarA";
import HeaderA from "./Admin/HeaderA";
import DashboardA from "./Admin/DashboardA";
import ConferencesA from "./Admin/ConferencesA";
import UsersA from "./Admin/UsersA";
import SettingsA from "./Admin/SettingsA";

// User & Organizer components
import Homepage from "./User/Homepage";
import Login from "./User/Login";
import Registration from "./User/Registration";
import Event from "./User/Event";
import Price from "./User/Price";
import Feature from "./User/Feature";
import Usecases from "./User/Usecases";
import CreateEvent from "./CreateEvent";
import EventDetails from "./Organizer/Event/EventDetails";
import Tickets from "./Organizer/Event/Tickets";
import OrganizerDetails from "./Organizer/Event/OrganizerDetails";
import Speaker from "./Organizer/Event/Speaker";
import Sponsors from "./Organizer/Event/Sponsors";
import Participants from "./Organizer/Participants";
import ContactAttendees from "./Organizer/ContactAttendees";
import Team from "./Organizer/Team";
import Gamification from "./Organizer/Gamification";
import PostEvent from "./Organizer/PostEvent";
import Advanced from "./Organizer/Advanced";
import Developers from "./Organizer/Developers";
import Credits from "./Organizer/Credits";
import OrganizerSettings from "./Organizer/Settings";
import Sidebar from "./Organizer/Sidebar";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainContent darkMode={darkMode} setDarkMode={setDarkMode} />
      </Router>
    </ThemeProvider>
  );
}

function MainContent({ darkMode, setDarkMode }) {
  const location = useLocation();

  const adminRoutes = ["/admin", "/conferences", "/admin-users", "/admin-settings"];
  const organizerRoutes = [
    "/event-details", "/tickets", "/organizer-details", "/speaker", "/sponsors",
    "/participants", "/contact-attendees", "/team", "/gamification", "/post-event",
    "/advanced", "/developers", "/credits", "/settings"
  ];

  const isAdminRoute = adminRoutes.includes(location.pathname);
  const isOrganizerRoute = organizerRoutes.includes(location.pathname);

  if (isAdminRoute) {
    return (
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
    );
  }

  return (
    <div className={`App-container ${isOrganizerRoute ? "With-sidebar" : "Without-sidebar"}`}>
      {isOrganizerRoute && <Sidebar />}
      <div className="content">
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/events" element={<Event />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/use-cases" element={<Usecases />} />
          <Route path="/createEvent" element={<CreateEvent />} />

          {/* Organizer Routes */}
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/organizer-details" element={<OrganizerDetails />} />
          <Route path="/speaker" element={<Speaker />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/contact-attendees" element={<ContactAttendees />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/post-event" element={<PostEvent />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/settings" element={<OrganizerSettings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
