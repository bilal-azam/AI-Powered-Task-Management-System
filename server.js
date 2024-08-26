const express = require('express');
const i18n = require('./middleware/i18nMiddleware');

const app = express();
app.use(i18n.init);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});