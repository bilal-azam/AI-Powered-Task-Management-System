const getTasksByUser = async (req, res) => {
    const { userId } = req.query;
    try {
        const tasks = await Task.find({ assignedTo: userId });
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask, assignTask, getTasksByUser };