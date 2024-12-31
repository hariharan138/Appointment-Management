const mongoose = require('mongoose');

// Patient Schema
const patientSchema = new mongoose.Schema({
    Patient_name: {
        required: true,
        type: String,
        trim: true // Removes leading and trailing spaces
    },
    number: {
        required: true,
        type: String, // Use String for phone numbers to preserve leading zeroes
        match: /^[0-9]{10}$/, // Ensure it is exactly 10 digits
    },
    email: {
        required: true,
        type: String,
        unique: true, // Ensure no duplicate emails
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email validation
    },
    timestamp: {
        type: Date,
        default: Date.now // Automatically sets the current date and time
    },
    status: {
        type: String,
        enum: ['pending', 'attended'], // Restrict to specific values
        default: 'pending'
    },
    appointmentTime: {
        type: String, // Use Date type for accurate time management
    },
    bookedAppointments: {
        type: [mongoose.Schema.Types.ObjectId], // Array of ObjectIds for appointments
        ref: 'Appointment', // Reference to Appointment model
    }
});

// Export the Patient model
module.exports = mongoose.model("Patient", patientSchema);
