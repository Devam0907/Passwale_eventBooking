import React, { useState } from 'react';
import AddSponsorModal from './AddSponsorModal';
import './Sponsors.css';

const Sponsors = () => {
  // State to show/hide the Add Sponsor modal
  const [showAddSponsor, setShowAddSponsor] = useState(false);

  // Handlers for opening/closing the modal
  const handleOpenAddSponsor = () => {
    setShowAddSponsor(true);
  };

  const handleCloseAddSponsor = () => {
    setShowAddSponsor(false);
  };

  // Basic sponsors screen layout, same as before
  return (
    <div className="sponsors-wrapper">
      {/* Title Field */}
      <div className="field-group">
        <div className="label-row">
          <label className="field-label">
            Sponsors Section Title <span className="required">*</span>
          </label>
          <span className="char-limit">Maximum Characters: 200</span>
        </div>
        <input type="text" className="input-field" maxLength={200} />
      </div>

      {/* Description Field */}
      <div className="field-group">
        <div className="label-row">
          <label className="field-label">Sponsors Section Description</label>
          <span className="char-limit">Maximum Characters: 2000</span>
        </div>
        <textarea
          className="description-textarea"
          placeholder="Write your description here"
          maxLength={2000}
        />
        <div className="desc-footer">
          <span>0 Characters</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="cancel-button">Cancel</button>
        <button className="save-button">Save</button>
      </div>

      {/* List of Sponsors */}
      <div className="sponsor-list-section">
        <p className="sponsor-list-title">List of Sponsors</p>
        <p className="no-sponsors">No sponsors are added</p>
      </div>

      {/* Add Sponsor / Create Category */}
      <div className="bottom-buttons">
        <button className="add-sponsor-button" onClick={handleOpenAddSponsor}>
          Add Sponsor
        </button>
        <button className="create-category-button">Create Category</button>
      </div>

      {/* Add Sponsor Modal */}
      {showAddSponsor && <AddSponsorModal onClose={handleCloseAddSponsor} />}
    </div>
  );
};

export default Sponsors;
