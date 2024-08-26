const Task = require('../models/Task');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().lean(); // Use lean() for performance
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getTasks };