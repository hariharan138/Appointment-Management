    const Appointment = require('../models/appointment');

    // Add a new appointment
    const createAppointment = async (req, res) => {
        try {
            const { time, Availability } = req.body; // Ensure 'availability' matches the schema field
            const appointment = await Appointment.create({ time, Availability });
            res.status(201).json({
                error: false,
                message: "Appointment added successfully",
                data: appointment,
            });
        } catch (err) {
            res.status(500).json({ error: true, message: err.message });
        }
    };

    // Update appointment and notify
    const updateAppointmentAndNotify = async (appointmentId, Availability) => {
        try {
            const updatedAppointment = await Appointment.findByIdAndUpdate(
                appointmentId,
                { Availability }, // Corrected field name to match the schema
                { new: true }
            );
            return updatedAppointment;
        } catch (error) {
            console.error('Error updating appointment:', error);
            throw error;
        }
    };

    // Get all appointments
    const getAllAppointments = async (req, res) => {
        try {
            const appointments = await Appointment.find({});
            res.status(200).json({
                error: false,
                message: "Appointments fetched successfully",
                data: appointments,
            });
        } catch (err) {
            res.status(500).json({ error: true, message: err.message });
        }
    };

    // Edit an appointment
    const editAppointment = async (req, res) => {
        try {
            const { appointmentId } = req.params;
            const updatedData = req.body;
            const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, updatedData, { new: true });
            if (!updatedAppointment) {
                return res.status(404).json({
                    error: true,
                    message: "Appointment not found",
                });
            }
            res.status(200).json({
                error: false,
                message: "Appointment updated successfully",
                data: updatedAppointment,
            });
        } catch (err) {
            res.status(500).json({ error: true, message: err.message });
        }
    };

    module.exports = { createAppointment, getAllAppointments, editAppointment, updateAppointmentAndNotify };
