const express = require('express');
const { protectedRoute } = require('../controllers/protectedController');
const router = express.Router();

router.get('/', protectedRoute);

module.exports = router;