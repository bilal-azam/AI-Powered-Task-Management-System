const express = require('express');
const { authenticateUser } = require('../controllers/authController');
const router = express.Router();

router.post('/login', authenticateUser);

module.exports = router;