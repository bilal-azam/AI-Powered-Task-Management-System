const searchTasks = async (req, res) => {
    const { query } = req.query;
    try {
        const tasks = await Task.find({ title: new RegExp(query, 'i') });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask, assignTask, updateTaskStatus, searchTasks };