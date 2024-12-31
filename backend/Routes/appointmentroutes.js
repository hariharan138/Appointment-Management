const express = require('express');
const { createAppointment, getAllAppointments, editAppointment } = require('../Controllers/appointmentController');
const { updateAppointmentAndNotify } = require('../Controllers/appointmentController');

const nodemailer = require('nodemailer');

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: "hariharan98704@gmail.com",
    pass: "bhcaozpchzjguljr",
  },
});

// Create a new appointment
router.post('/add', createAppointment);

// Get all appointments
router.get('/', getAllAppointments);

// Edit an appointment
router.put('/:appointmentId', editAppointment);

// Update appointment availability and send email notification
router.put('/:appointmentId/book', async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const { patientEmail, appointmentTime } = req.body;

    // Update appointment and get the result
    const updatedAppointment = await updateAppointmentAndNotify(appointmentId, 'booked');

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Send email
    const mailOptions = {
      from: "hariharan98704@gmail.com",
      to: patientEmail,
      subject: 'Appointment Confirmation',
      text: `Your appointment has been booked successfully for ${appointmentTime}.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: 'Appointment updated and email sent', appointment: updatedAppointment });
  } catch (error) {
    console.error('Error updating appointment and sending email:', error);
    res.status(500).json({ message: 'Error updating appointment and sending email' });
  }
});

module.exports = router;
