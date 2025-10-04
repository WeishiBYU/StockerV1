import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuoteForm.css';

const QuoteForm = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/schedule');
  };

  return (
    <div className="quote-form">
      <h2>Step 1: Get Your Quote</h2>
      <p>Select the services you need:</p>
      
      <div className="service-options">
        <div className="service-card">
          <h3>Carpet Cleaning</h3>
          <p>Professional deep cleaning for carpets</p>
          <button className="service-button">Select Carpet Cleaning</button>
        </div>
        
        <div className="service-card">
          <h3>Upholstery Cleaning</h3>
          <p>Expert cleaning for furniture and upholstery</p>
          <button className="service-button">Select Upholstery Cleaning</button>
        </div>
      </div>
      
      <div className="form-navigation">
        <button onClick={handleNext} className="next-button">
          Continue to Scheduling →
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;