const authenticateToken = require('./middleware/authMiddleware');

app.use('/api/protected', authenticateToken);