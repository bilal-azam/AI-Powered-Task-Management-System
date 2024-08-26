const logger = require('../services/loggerService');

const logRequests = (req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
};

module.exports = logRequests;