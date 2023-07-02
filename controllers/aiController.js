const prioritizeTasks = (tasks) => {
    return tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};

module.exports = { prioritizeTasks };