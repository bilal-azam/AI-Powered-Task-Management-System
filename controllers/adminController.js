const User = require('../models/User');
const Task = require('../models/Task');

const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role');
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getUsers, getTasks };