const Task = require('../models/Task');

const searchTasks = async (req, res) => {
    const { query } = req.query;
    try {
        const tasks = await Task.find({ title: { $regex: query, $options: 'i' } });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { searchTasks };