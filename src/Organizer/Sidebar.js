import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaUsers, FaEnvelope, FaUsersCog, FaGamepad, FaFileAlt, FaTools, FaCode, FaStar, FaCog, FaTicketAlt, FaMicrophone, FaHandHoldingUsd } from "react-icons/fa";
import { MdDashboard, MdEvent, MdExpandMore } from "react-icons/md";
import "./Sidebar.css"; 

function Sidebar() {
  const [eventOpen, setEventOpen] = useState(false);

  return (
    <nav className="sidebarS">
      <ul>
        <li><Link to="/"><MdDashboard className="iconS" /> Overview</Link></li>
        <li><Link to="/analytics"><FaChartLine className="iconS" /> Analytics</Link></li>

        {/* Event Info with Enhanced Dropdown */}
        <li className={`dropdown ${eventOpen ? "activeS" : ""}`} onClick={() => setEventOpen(!eventOpen)}>
          <span><MdEvent className="iconS" /> Event Info <MdExpandMore className="dropdown-iconS" /></span>
        </li>
        {eventOpen && (
          <ul className="dropdown-menuS">
            <li><Link to="/event-details"><MdEvent className="iconS sub-iconS" /> Event Details</Link></li>
            <li><Link to="/tickets"><FaTicketAlt className="iconS sub-iconS" /> Tickets</Link></li>
            <li><Link to="/organizer-details"><FaUsers className="iconS sub-iconS" /> Organizer Details</Link></li>
            <li><Link to="/speaker"><FaMicrophone className="iconS sub-iconS" /> Speaker</Link></li>
            <li><Link to="/sponsors"><FaHandHoldingUsd className="iconS sub-iconS" /> Sponsors</Link></li>
          </ul>
        )}

        <li><Link to="/participants"><FaUsers className="iconS" /> Participants</Link></li>
        <li><Link to="/contact-attendees"><FaEnvelope className="iconS" /> Contact Attendees</Link></li>
        <li><Link to="/team"><FaUsersCog className="iconS" /> Team</Link></li>
        <li><Link to="/gamification"><FaGamepad className="iconS" /> Gamification</Link></li>
        <li><Link to="/post-event"><FaFileAlt className="iconS" /> Post Event</Link></li>
        <li><Link to="/advanced"><FaTools className="iconS" /> Advanced</Link></li>
        <li><Link to="/developers"><FaCode className="iconS" /> Developers</Link></li>
        <li><Link to="/credits"><FaStar className="iconS" /> Credits</Link></li>
        <li><Link to="/settings"><FaCog className="iconS" /> Settings</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;

