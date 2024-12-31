import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetching appointment slots from the API
    axios.get('http://localhost:4000/api/appointments/')
      .then(response => {
        setSlots(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Check for success message from registration
    if (location.state?.message) {
      alert(location.state.message);
      // Clear the message
      navigate('.', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleBooking = (slot) => {
    navigate('/register', { state: { slot } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="booking-page">
      <h2>Available Slots</h2>
      <div className="slot-list">
        {slots.map(slot => (
          <div key={slot._id} className="slot-item">
            <p className="slot-time">Time: {slot.time}</p>
            <p className="slot-availability">
              {slot.Availability === "not_booked" ? "Available" : "Booked"}
            </p>
            <button
              className="book-slot-button"
              disabled={slot.Availability !== "not_booked"}
              onClick={() => handleBooking(slot)}
            >
              Book This Slot
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;

