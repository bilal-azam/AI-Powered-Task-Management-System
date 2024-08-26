const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});