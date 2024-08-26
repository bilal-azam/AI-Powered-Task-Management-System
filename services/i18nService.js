const i18n = require('i18n');

i18n.configure({
    locales: ['en', 'es'],
    directory: __dirname + '/../locales',
    defaultLocale: 'en',
    autoReload: true,
    syncFiles: true,
    updateFiles: false,
});

module.exports = i18n;