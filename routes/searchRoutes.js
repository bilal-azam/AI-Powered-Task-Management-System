const express = require('express');
const router = express.Router();
const { searchTasks } = require('../controllers/searchController');

router.get('/tasks', searchTasks);

module.exports = router;