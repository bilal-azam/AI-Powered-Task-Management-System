const express = require('express');
const router = express.Router();
const { getUsers, getTasks } = require('../controllers/adminController');

router.get('/users', getUsers);
router.get('/tasks', getTasks);

module.exports = router;