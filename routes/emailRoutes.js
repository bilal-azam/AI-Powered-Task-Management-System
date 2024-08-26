const express = require('express');
const router = express.Router();
const { notifyUser } = require('../controllers/emailController');

router.post('/notify', notifyUser);

module.exports = router;