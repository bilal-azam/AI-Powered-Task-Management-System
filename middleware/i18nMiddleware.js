const i18n = require('i18n');
const path = require('path');

i18n.configure({
    locales: ['en', 'es'],
    directory: path.join(__dirname, '../i18n'),
    defaultLocale: 'en',
    cookie: 'lang',
    queryParameter: 'lang'
});

const i18nMiddleware = (req, res, next) => {
    i18n.init(req, res);
    next();
};

module.exports = i18nMiddleware;