import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';

function Feedback() {
  const navigate = useNavigate();
  return (
    <div className="feedback-container">
      {/* Text Content Section */}
      <div className="feedback-card">
        <h1>Start collecting attendee feedback!</h1>
        <div className="feedback-content">
          <p>Get valuable feedbacks from your event attendees</p>
          <p>post-event with customize feedback forms to</p>
          <p>optimize your future events and distribute</p>
          <p>certificates!</p>
        </div>
        <button className="create-button"
          onClick={() => navigate('/feedback-form')}>Create Feedback Form</button>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img 
          src="/feedbak.jpg" 
          alt="Feedback Dashboard Preview" 
          className="feedback-image"
        />
      </div>
    </div>
  );
}

export default Feedback;