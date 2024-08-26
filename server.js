const express = require('express');
const i18n = require('./services/i18nService');

const app = express();
app.use(i18n.init);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});