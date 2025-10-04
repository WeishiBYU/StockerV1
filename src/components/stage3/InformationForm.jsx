import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InformationForm.css';

const InformationForm = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/confirmation');
  };

  const handleBack = () => {
    navigate('/schedule');
  };

  return (
    <div className="information-form">
      <h2>Step 3: Your Information</h2>
      <p>Please provide your contact details and preferences:</p>
      
      <form className="info-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Service Address *</label>
          <textarea id="address" name="address" rows="3" required></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="instructions">Special Instructions</label>
          <textarea id="instructions" name="instructions" rows="4" placeholder="Any special requirements or notes..."></textarea>
        </div>
      </form>
      
      <div className="form-navigation">
        <button onClick={handleBack} className="back-button">
          ← Back to Schedule
        </button>
        <button onClick={handleNext} className="next-button">
          Continue to Confirmation →
        </button>
      </div>
    </div>
  );
};

export default InformationForm;