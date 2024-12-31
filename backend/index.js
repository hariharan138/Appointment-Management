const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const appointmentRoutes = require('./Routes/appointmentroutes');
const patientRoutes = require('./Routes/patientroutes');
require('dotenv').config();


const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use CORS middleware to allow cross-origin requests
app.use(cors());  // This will allow all origins by default

// Route Handlers
app.use("/api/appointments", appointmentRoutes);
app.use("/api/patients", patientRoutes);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Hospital')
  .then(() => {
      console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
      console.error("MongoDB Connection Failed:", err);
  });

// Start the Server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
