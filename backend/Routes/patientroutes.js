const express = require('express');
const { createPatient, getAllPatients, editPatient } = require('../Controllers/patientcontroller');

const router = express.Router();

router.post('/add', createPatient);
router.get('/get', getAllPatients);
router.put('/:patientId', editPatient);

module.exports = router;
