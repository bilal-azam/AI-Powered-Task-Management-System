const express = require('express');
const router = express.Router();
const { prioritizeTasks } = require('../controllers/aiController');

router.post('/prioritize', (req, res) => {
    const { tasks } = req.body;
    const prioritizedTasks = prioritizeTasks(tasks);
    res.json(prioritizedTasks);
});

module.exports = router;