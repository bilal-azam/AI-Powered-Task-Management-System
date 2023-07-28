const { logAction } = require('../services/loggerService');

// Example of logging an action
const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        logAction('CREATE_TASK', { taskId: task._id });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask };