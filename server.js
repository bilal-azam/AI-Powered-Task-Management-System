const express = require('express');
const limiter = require('./middlewares/rateLimitMiddleware');

const app = express();
app.use(limiter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});