const express = require('express');
const apiLimiter = require('./middlewares/rateLimitMiddleware');

const app = express();
app.use(apiLimiter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});