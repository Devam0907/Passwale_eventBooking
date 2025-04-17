import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine, FaUsers, FaEnvelope,
  //  FaUsersCog, FaGamepad,
    FaFileAlt, 
  FaTools, FaCode, FaStar, FaCog, FaTicketAlt, FaMicrophone, 
  FaHandHoldingUsd, FaCommentAlt
} from "react-icons/fa";
import { MdDashboard, MdEvent, MdExpandMore } from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  const [eventOpen, setEventOpen] = useState(false);
  const [postEventOpen, setPostEventOpen] = useState(false);

  return (
    <nav className="sidebarS">
      {/* Company Logo */}
      {/* <div className="sidebar-logo">
        <img src="/Yellow.jpg" alt="Company Logo" />
      </div> */}
 <div className="sidebar-logo">
        <Link to="/dashboard" className="logo-link">
          <img 
            src= "/Yellow.jpg" 
            alt="EventSphere Platform Logo"
            className="sidebar-logo-img"
          />
        </Link>
      </div>
      <ul>
        <li><Link to="/overview"><MdDashboard className="icon" /> Overview</Link></li>
        <li><Link to="/analytics"><FaChartLine className="icon" /> Analytics</Link></li>

        {/* Event Info with Enhanced Dropdown */}
        <li className={`dropdown ${eventOpen ? "activeS" : ""}`} onClick={() => setEventOpen(!eventOpen)}>
          <span><MdEvent className="icon" /> Event Info <MdExpandMore className="dropdown-iconS" /></span>
        </li>
        {eventOpen && (
          <ul className="dropdown-menuS">
            <li><Link to="/event-details"><MdEvent className="icon sub-icon" /> Event Details</Link></li>
            <li><Link to="/tickets"><FaTicketAlt className="icon sub-icon" /> Tickets</Link></li>
            <li><Link to="/organizer-details"><FaUsers className="icon sub-icon" /> Organizer Details</Link></li>
            <li><Link to="/speaker"><FaMicrophone className="icon sub-icon" /> Speaker</Link></li>
            <li><Link to="/sponsors"><FaHandHoldingUsd className="icon sub-icon" /> Sponsors</Link></li>
          </ul>
        )}

        <li><Link to="/participants"><FaUsers className="icon" /> Participants</Link></li>
        {/* <li><Link to="/contact-attendees"><FaEnvelope className="icon" /> Contact Attendees</Link></li> */}
        {/* <li><Link to="/team"><FaUsersCog className="icon" /> Team</Link></li>
        <li><Link to="/gamification"><FaGamepad className="icon" /> Gamification</Link></li> */}
        
        {/* Post Event with Dropdown */}
        <li className={`dropdown ${postEventOpen ? "activeS" : ""}`} onClick={() => setPostEventOpen(!postEventOpen)}>
          <span><FaFileAlt className="icon" /> Post Event <MdExpandMore className="dropdown-iconS" /></span>
        </li>
        {postEventOpen && (
          <ul className="dropdown-menuS">
            <li><Link to="/feedback"><FaCommentAlt className="icon sub-icon" /> Feedback</Link></li>
          </ul>
        )}

        <li><Link to="/advanced"><FaTools className="icon" /> Advanced</Link></li>
        {/* <li><Link to="/developers"><FaCode className="icon" /> Developers</Link></li> */}
        <li><Link to="/credits"><FaStar className="icon" /> Credits</Link></li>
        {/* <li><Link to="/settings"><FaCog className="icon" /> Settings</Link></li> */}
      </ul>
    </nav>
  );
}

export default Sidebar;