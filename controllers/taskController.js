const Task = require('../models/Task');
const User = require('../models/User');

const assignTask = async (req, res) => {
    const { taskId, userId } = req.body;
    try {
        const task = await Task.findById(taskId);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        task.assignedTo = userId;
        await task.save();
        res.json({ message: 'Task assigned successfully', task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask, assignTask };