const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const aiRoutes = require('./routes/aiRoutes');
const profileRoutes = require('./routes/profileRoutes');
const chatRoutes = require('./routes/chatRoutes');
const fileRoutes = require('./routes/fileRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { sendDueDateNotifications } = require('./services/notificationService');

connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Send notifications on startup
    sendDueDateNotifications().catch(console.error);
});