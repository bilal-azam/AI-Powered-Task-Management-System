const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, updateTask, deleteTask, assignTask } = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/assign', assignTask); // New route for task assignment

module.exports = router;