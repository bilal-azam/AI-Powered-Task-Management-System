const express = require('express');
const router = express.Router();
const { searchTasks } = require('../controllers/taskController');

router.get('/search', searchTasks);

module.exports = router;