import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Meeting = () => {
  const [meetingId, setMeetingId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleJoin = (e) => {
    e.preventDefault();
    // Here you would typically validate the input and join the meeting
    console.log('Joining meeting', meetingId, phoneNumber);
    // For now, we'll just redirect back to the home page
    navigate('/');
  };

  return (
    <div className="meeting-form">
      <h2>Join Meeting</h2>
      <form onSubmit={handleJoin}>
        <div className="form-group">
          <label htmlFor="meetingId">Meeting ID:</label>
          <input
            type="text"
            id="meetingId"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="join-button">Join</button>
      </form>
    </div>
  );
};

export default Meeting;

