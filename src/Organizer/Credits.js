import React, { useState } from 'react';
import './Credits.css';

const Credits = () => {
  const [credits, setCredits] = useState(0);
  const [additionalCredits, setAdditionalCredits] = useState('');
  const [tab, setTab] = useState('request');

  const handleRequest = () => {
    if (additionalCredits && !isNaN(additionalCredits)) {
      setCredits(credits + parseInt(additionalCredits));
      setAdditionalCredits('');
      alert('Credit request submitted!');
    }
  };

  return (
    <div className="credits-page">
      <div className="credits-container">
        <h2 className="credits-title">Credits</h2>

        <div className="tabs">
          {['request', 'history', 'usage'].map((t) => (
            <div
              key={t}
              className={`tab ${tab === t ? 'active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="credits-info">
          <span>Credits Consumption:</span> <strong>{credits}/0</strong>
        </div>

        {tab === 'request' && (
          <div className="tab-content request-tab">
            <div className="info-section">
              <h4>WhatsApp Message</h4>
              <p>Each WhatsApp message sent via our platform consumes 1 credit.</p>
              <p><strong>Rate:</strong> 1 Message = 1 Credit</p>

              <h4>Gallery Image Upload</h4>
              <p>Uploading a gallery image consumes 2 credits.</p>
              <p><strong>Rate:</strong> 1 Image = 2 Credits</p>
            </div>

            <div className="form-section">
              <p>You have <strong>{credits}</strong> credits</p>
              <label htmlFor="additionalCredits">Additional credits required</label>
              <input
                id="additionalCredits"
                type="number"
                value={additionalCredits}
                onChange={(e) => setAdditionalCredits(e.target.value)}
                placeholder="Enter number of credits"
              />

              <div className="button-group">
                <button className="btn cancel" onClick={() => setAdditionalCredits('')}>Cancel</button>
                <button className="btn request" onClick={handleRequest}>Request</button>
              </div>
              <small className="note">No card details / payment required</small>
            </div>
          </div>
        )}

        {tab === 'history' && (
          <div className="tab-content">
            <p className="empty-msg">There are no records to display</p>
          </div>
        )}

        {tab === 'usage' && (
          <div className="tab-content usage-tab">
            <div className="usage-box">Campaigns Launched <span>0</span></div>
            <div className="usage-box">Test Messages <span>0</span></div>
            <div className="usage-box">Registration Messages <span>0</span></div>
            <div className="usage-box">Gallery Uploads <span>0</span></div>
            <p className="empty-msg">There are no records to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Credits;
