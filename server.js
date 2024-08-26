const express = require('express');
const authenticateJWT = require('./middlewares/authMiddleware');

const app = express();
app.use(express.json());

app.use('/api', authenticateJWT);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});