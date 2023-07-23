const Task = require('../models/Task');
const { getCachedData, setCacheData } = require('../services/cacheService');

const getTasks = async (req, res) => {
    const cacheKey = 'tasks';
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
        return res.json(cachedData);
    }

    try {
        const tasks = await Task.find();
        setCacheData(cacheKey, tasks, 600); // Cache for 10 minutes
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getTasks };