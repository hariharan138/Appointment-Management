import React from 'react';
import { Link } from 'react-router-dom';

const DoctorProfileCard = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src="/placeholder.svg?height=150&width=150" alt="Doctor" className="profile-img" />
          <h2 className="doctor-name">Dr. Jane Smith</h2>
          <p className="doctor-email">dr.jane.smith@example.com</p>
          <Link to="/book" className="book-button">Book Your Slot</Link>
        </div>
        <div className="card-back">
          <h3>About Dr. Jane Smith</h3>
          <p>Specializing in Cardiology with over 10 years of experience. Committed to providing excellent patient care and using the latest medical advancements.</p>
          <Link to="/book" className="book-button">Book Your Slot</Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;

