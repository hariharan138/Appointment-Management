const Patient = require('../models/patient');

// Add a new patient
const createPatient = async (req, res) => {
    try {
        const { Patient_name, number, email, appointmentTime  } = req.body;

        // Validate inputs (could add more robust validation here)
        if (!Patient_name || !number || !email) {
            return res.status(400).json({
                error: true,
                message: "All fields are required",
            });
        }

        // Create patient record
        const patient = await Patient.create({ Patient_name, number, email, bookedAppointments: [], appointmentTime });

        res.status(201).json({
            error: false,
            message: "Patient added successfully",
            data: patient,
        });
    } catch (err) {
        res.status(500).json({ error: true, message: "EmailID or Mobile Number are already exist" });
    }
};

// Get all patients
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find({})

        res.status(200).json({
            error: false,
            message: "Patients fetched successfully",
            data: patients,
        });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
};

// Edit a patient's details
const editPatient = async (req, res) => {
    try {
        const { patientId } = req.params;
        const updatedData = req.body;

        // Validate if patient exists before trying to update
        const patientExists = await Patient.findById(patientId);
        if (!patientExists) {
            return res.status(404).json({
                error: true,
                message: "Patient not found",
            });
        }

        // Update patient data
        const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatedData, { new: true });

        res.status(200).json({
            error: false,
            message: "Patient updated successfully",
            data: updatedPatient,
        });
    } catch (err) {
        res.status(500).json({ error: true, message: err.message });
    }
};

// Check if patient has already booked a slot
const checkPatientBooking = async (patientId, appointmentId) => {
    try {
        const patient = await Patient.findById(patientId);
        if (!patient) {
            throw new Error("Patient not found");
        }
        return patient.bookedAppointments.includes(appointmentId);
    } catch (err) {
        throw err;
    }
};


module.exports = { createPatient, getAllPatients, editPatient, checkPatientBooking };

