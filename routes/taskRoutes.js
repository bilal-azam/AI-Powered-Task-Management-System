const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, updateTask, deleteTask, assignTask, getTasksByUser } = require('../controllers/taskController');

router.post('/', createTask);
router.get('/', getTasks);
router.get('/user', getTasksByUser); // New route for filtering tasks by user
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/assign', assignTask);

module.exports = router;