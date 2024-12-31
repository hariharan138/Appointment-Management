import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import Meeting from './pages/Meeting';
import Booking from './pages/Booking';

import './App.css';
import RegistrationForm from './pages/RegistrationForm';
// import ThankYou from './ThankYou';
import ThankYou from './pages/ThankYou';
import RescheduleForm from './pages/RescheduleForm';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/reschedule" element={<RescheduleForm/>} />
          <Route path="/book" element={<Booking />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

