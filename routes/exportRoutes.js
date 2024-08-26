const express = require('express');
const router = express.Router();
const { exportDataToCSV } = require('../controllers/exportController');

router.get('/export', exportDataToCSV);

module.exports = router;