const rateLimiter = require('./middleware/rateLimiter');

// Apply rate limiter to all requests
app.use(rateLimiter);