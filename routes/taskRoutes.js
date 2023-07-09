const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, updateTask, deleteTask, assignTask, updateTaskStatus, searchTasks } = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/assign', assignTask);
router.put('/status', updateTaskStatus);
router.get('/search', searchTasks); // New route for search functionality

module.exports = router;