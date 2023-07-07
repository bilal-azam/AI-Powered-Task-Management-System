const updateTaskStatus = async (req, res) => {
    const { taskId, status } = req.body;
    try {
        const task = await Task.findById(taskId);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.status = status;
        await task.save();
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask, assignTask, updateTaskStatus };