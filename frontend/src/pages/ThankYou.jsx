import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-page">
      <h2>Thank You!</h2>
      <p>Your appointment has been successfully booked.</p>
      <p>We look forward to seeing you at your scheduled time.</p>
      <button className="home-button" onClick={handleHomeClick}>
        Return to Home
      </button>
    </div>
  );
};

export default ThankYou;

