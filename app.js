const express = require('express');
const app = express();

// Import routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const adminRoutes = require('./routes/adminRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

// Middleware
app.use(express.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/admin', adminRoutes);
app.use('/recommendations', recommendationRoutes);

// Final code optimization
app.use((req, res, next) => {
    // Placeholder for final code optimization
    next();
});

module.exports = app;