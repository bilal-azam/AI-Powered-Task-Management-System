const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(loggerMiddleware);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});