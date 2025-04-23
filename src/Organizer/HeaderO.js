// import React from 'react';
// import './HeaderO.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLink, faPlus, faTh, faEllipsisV, faUsers } from '@fortawesome/free-solid-svg-icons';

// function HeaderO() {
//   return (
//     <header className="header-container">
//       {/* Top Section */}
//       <div className="header-top">
//         {/* Left Controls */}
//         <div className="header-section left-controls">
//           <span className="plan-badge">Free Plan</span>
//           <button className="btn-primary">
//             <FontAwesomeIcon icon={faPlus} className="btn-icon" />
//             Create Event
//           </button>
//           <button className="btn-secondary">
//             <FontAwesomeIcon icon={faTh} className="btn-icon" />
//             Switch Event
//           </button>
//         </div>

//         {/* Center Content */}
//         <div className="header-section center-content">
//           <h1 className="app-title">
//             react.js
//             <a href="#" className="chain-link">
//               <FontAwesomeIcon icon={faLink} />
//             </a>
//           </h1>
//           <nav className="filters-nav">
//             <span className="filter-item active">Past</span>
//             <span className="filter-item">In-Person</span>
//             <span className="filter-item">Free</span>
//             <span className="filter-item">IST</span>
//           </nav>
//         </div>

//         {/* Right Controls */}
//         <div className="header-section right-controls">
//           <div className="avatar-stack">
//             <div className="avatar-circle" style={{ backgroundColor: '#FF6B6B' }}>JD</div>
//             <div className="avatar-circle" style={{ backgroundColor: '#4ECDC4' }}>AS</div>
//           </div>
//           <button className="menu-toggle">
//             <FontAwesomeIcon icon={faEllipsisV} />
//           </button>
//         </div>
//       </div>

//       {/* Bottom Status Bar */}
//       <div className="header-bottom">
//         <div className="attendance-status">
//           <FontAwesomeIcon icon={faUsers} className="status-icon" />
//           <span className="attendance-count">0/100</span>
//           <div className="progress-bar">
//             <div className="progress-fill" style={{ width: '0%' }}></div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default HeaderO;

// HeaderO.js
import React, { useState } from 'react';
import './HeaderO.css';
import AddIcon from '@mui/icons-material/Add';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PeopleIcon from '@mui/icons-material/People';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HeaderO() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/home';
  };

  return (
    <header className="event-header">
      <div className="header-top">
        {/* Left Section */}
        <div className="header-left">
          <span className="plan-badge">Plan: Free</span>
          <button className="header-button primary">
            <AddIcon fontSize="small" className="icon-spacing" />
            <span>Create Event</span>
          </button>
          <button className="header-button">
            <SwapHorizIcon fontSize="small" className="icon-spacing" />
            <span>Switch Event</span>
          </button>
        </div>

        {/* Center Section */}
        <div className="header-center">
          <h1 className="event-title">react.js</h1>
          <div className="event-tags">
            <span className="tag active">Past</span>
            <span className="tag">In-Person</span>
            <span className="tag">Free</span>
            <span className="tag">IST</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="header-right">
          <div className="participant-info">
            <PeopleIcon fontSize="small" className="icon-spacing" />
            <span>0/100</span>
          </div>

          <div className="profile-menu">
            <button 
              className="profile-trigger"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-label="User menu"
            >
              <AccountCircleIcon fontSize="medium" className="user-icon" />
            </button>

            {showDropdown && (
              <div className="dropdown-menu">
                <button 
                  className="dropdown-item"
                  onClick={handleLogout}
                >
                  <ExitToAppIcon fontSize="small" className="icon-spacing" />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderO;