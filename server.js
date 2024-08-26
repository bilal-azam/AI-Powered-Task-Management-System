const express = require('express');
const logRequests = require('./middlewares/loggerMiddleware');

const app = express();
app.use(logRequests);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});