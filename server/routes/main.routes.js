const express = require('express');
const router = express.Router();

// Landing Page
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Healthcare AI Landing Page' });
});

// Login Page
router.get('/login', (req, res) => {
  res.json({ message: 'Select your role: doctor, patient, or staff' });
});

// Doctor Dashboard
router.get('/doctor', (req, res) => {
  res.json({ role: 'doctor', dashboard: 'Doctor Dashboard Data (placeholder)' });
});

// Patient Dashboard
router.get('/patient', (req, res) => {
  res.json({ role: 'patient', dashboard: 'Patient Dashboard Data (placeholder)' });
});

// Staff Dashboard
router.get('/staff', (req, res) => {
  res.json({ role: 'staff', dashboard: 'Staff Dashboard Data (placeholder)' });
});

module.exports = router;
