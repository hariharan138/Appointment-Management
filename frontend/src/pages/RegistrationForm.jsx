import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slot } = location.state;

  const [patientData, setPatientData] = useState({
    Patient_name: '',
    number: '',
    email: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Register the patient
      const response = await axios.post('http://localhost:4000/api/patients/add', {
        ...patientData,
        appointmentId: slot._id,
        appointmentTime: slot.time,
      });

      console.log('Patient registered successfully', response.data);

      // Update appointment availability
      await axios.put(`http://localhost:4000/api/appointments/${slot._id}/book`, {
        availability: 'booked',
        patientEmail: patientData.email,
        appointmentTime: slot.time,
      });

      console.log('Appointment booked successfully');

      // Redirect to thank you page
      navigate('/thank-you', { state: { message: 'Appointment booked successfully!' } });
    } catch (err) {
      console.error('Error during registration or updating appointment', err.response || err);
      setError(err.response?.data?.message || 'Failed to register patient or book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-page">
      <h2>Patient Registration</h2>
      <p>Selected Time Slot: <strong>{slot.time}</strong></p>
      {error && <p className="error-message">{error}</p>}
      {loading && <p>Loading...</p>}
      <form onSubmit={handleSubmit} className="registration-form">
        <div>
          <label htmlFor="Patient_name">Name:</label>
          <input
            type="text"
            id="Patient_name"
            name="Patient_name"
            value={patientData.Patient_name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={patientData.number}
            onChange={handleInputChange}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={patientData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Register and Book'}
        </button>
      </form>
    </div>
  );
};
  
export default RegistrationForm;
