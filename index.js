const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const aiRoutes = require('./routes/aiRoutes');
const profileRoutes = require('./routes/profileRoutes');
const { sendDueDateNotifications } = require('./services/notificationService');

connectDB();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/profiles', profileRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Send notifications on startup
    sendDueDateNotifications().catch(console.error);
});