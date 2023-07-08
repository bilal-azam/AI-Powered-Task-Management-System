const express = require('express');
const router = express.Router();
const { registerUser, loginUser, assignRole } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/role', assignRole); // New route for assigning roles

module.exports = router;