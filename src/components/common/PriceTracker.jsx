import React from 'react';
import './PriceTracker.css';

const PriceTracker = () => {
  // TODO: Connect to global state management
  const selectedServices = [];
  function calculateTotalPrice() {
    let totalPrice = 0;
    
    return totalPrice;
  }

  return (
    <div className="price-tracker">
      <h3>Your Quote</h3>
      
      <div className="services-list">
        {selectedServices.length === 0 ? (
          <p className="no-services">No services selected</p>
        ) : (
          selectedServices.map((service, index) => (
            <div key={index} className="service-item">
              <span className="service-name">{service.name}</span>
              <span className="service-price">${service.price}</span>
            </div>
          ))
        )}
      </div>
      
      <div className="price-total">
        <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
        
      </div>
      
      <div className="price-note">
        <small>*Final price may vary based on assessment</small>
      </div>
    </div>
  );
};

export default PriceTracker;