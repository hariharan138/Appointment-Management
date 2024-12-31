const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    Availability: {
        type: String,
        enum: ['booked', 'not_booked'],
        default: 'not_booked',
    },
});

module.exports = mongoose.model("appointment", appointmentSchema);