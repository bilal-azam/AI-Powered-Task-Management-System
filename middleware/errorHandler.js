const logger = require('../services/loggerService');

const errorHandler = (err, req, res, next) => {
    logger.error(err.message);
    res.status(err.status || 500).json({ message: err.message });
};

module.exports = errorHandler;