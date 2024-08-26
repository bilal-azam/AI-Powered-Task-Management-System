const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');

const app = express();
app.use(loggerMiddleware);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});