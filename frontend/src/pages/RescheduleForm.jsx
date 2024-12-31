import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RescheduleForm = ({ patientId, currentAppointmentId, currentAppointmentTime }) => {
  const [newAppointmentId, setNewAppointmentId] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4000/api/patients/reschedule', {
        patientId,
        oldAppointmentId: currentAppointmentId,
        newAppointmentId,
      });

      console.log('Appointment rescheduled successfully', response.data);
      navigate('/thank-you', { state: { message: 'Appointment rescheduled successfully!' } });
    } catch (err) {
      console.error('Error rescheduling appointment', err.response || err);
      setError(err.response?.data?.message || 'Failed to reschedule appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reschedule-form">
      <h2>Reschedule Appointment</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newAppointmentId">New Appointment Time:</label>
          <input
            type="datetime-local"
            id="newAppointmentId"
            value={newAppointmentId}
            onChange={(e) => setNewAppointmentId(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Rescheduling...' : 'Reschedule'}
        </button>
      </form>
    </div>
  );
};

export default RescheduleForm;
