
import React, { useState, useRef } from 'react';
import './AddSponsorModal.css';

const AddSponsorModal = ({ onCancel, onSave }) => {
  // Form states
  const [sponsorName, setSponsorName] = useState('');
  const [website, setWebsite] = useState('');
  const [booth, setBooth] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  
  // Image states
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  // Handle click on image upload area
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Process selected image file and create a preview URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  // Save handler collects form data along with the image file
  const handleSave = () => {
    const formData = {
      sponsorName,
      website,
      booth,
      description,
      location,
      tags,
      image: imageFile, // To be used for uploading or further processing
    };

    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Modal Header with title and close (×) button */}
        <div className="modal-header">
          <h2>Add Sponsor</h2>
          <button className="close-button" onClick={onCancel}>×</button>
        </div>

        <div className="modal-body">
          {/* Top Section: Form fields and image upload */}
          <div className="form-top">
            <div className="form-left">
              {/* Sponsor Name */}
              <div className="form-group">
                <div className="form-label">
                  <label>Sponsor Name <span className="required">*</span></label>
                  <span className="max-chars">Maximum Characters: 250</span>
                </div>
                <input 
                  type="text" 
                  value={sponsorName}
                  maxLength={250}
                  onChange={(e) => setSponsorName(e.target.value)}
                  placeholder="Enter sponsor name"
                />
              </div>
              {/* Sponsor Website URL */}
              <div className="form-group">
                <div className="form-label">
                  <label>Sponsor Website URL</label>
                  <span className="max-chars">Maximum Characters: 255</span>
                </div>
                <input 
                  type="text" 
                  value={website}
                  maxLength={255}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter website URL"
                />
              </div>
              {/* Booth Number */}
              <div className="form-group">
                <div className="form-label">
                  <label>Booth Number</label>
                  <span className="max-chars">Maximum Characters: 6</span>
                </div>
                <input 
                  type="text" 
                  value={booth}
                  maxLength={6}
                  onChange={(e) => setBooth(e.target.value)}
                  placeholder="Enter booth number"
                />
              </div>
            </div>
            <div className="form-right">
              <div className="image-upload" onClick={handleImageClick}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Sponsor" className="image-preview" />
                ) : (
                  <div className="image-box">
                    <span>No Image Selected</span>
                  </div>
                )}
                <div className="recommended-dim">
                  Recommended Dimensions: 240 x 135
                </div>
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>

          {/* Description Field */}
          <div className="form-group">
            <div className="form-label">
              <label>Description</label>
              <span className="max-chars">Maximum Characters: 2000</span>
            </div>
            <textarea 
              value={description}
              maxLength={2000}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
            />
            <div className="char-count">{description.length} Characters</div>
          </div>

          {/* Sponsor Location */}
          <div className="form-group">
            <label className="form-label">Sponsor Location</label>
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter sponsor location"
            />
          </div>

          {/* Tags Field */}
          <div className="form-group">
            <div className="form-label">
              <label>Tags</label>
              <button className="link-button">Add New Tag</button>
            </div>
            <input 
              type="text" 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. business, startup, etc."
            />
          </div>

          {/* Sponsor Point of Contact */}
          <div className="form-group">
            <div className="form-label">
              <label>Sponsor Point of Contact</label>
              <button className="link-button">Add New Sponsor Contact</button>
            </div>
            <div className="placeholder">
              No contact added
            </div>
          </div>

          {/* List of Representatives */}
          <div className="form-group">
            <label className="form-label">List of Representatives</label>
            <div className="rep-box">
              <div className="add-rep">Add Representatives +</div>
            </div>
          </div>
        </div>
        {/* Footer with Cancel/Save buttons */}
        <div className="modal-footer">
          <button className="cancel-button" onClick={onCancel}>Cancel</button>
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddSponsorModal;

