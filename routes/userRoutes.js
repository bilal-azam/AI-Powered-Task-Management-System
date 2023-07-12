const express = require('express');
const router = express.Router();
const { registerUser, loginUser, assignRole, notifyUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/role', assignRole);
router.post('/notify', notifyUser); // New route for notifications

module.exports = router;