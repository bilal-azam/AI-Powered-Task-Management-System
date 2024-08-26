const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const authenticateUser = (req, res) => {
    // Sample authentication logic
    const token = jwt.sign({ userId: 1 }, secretKey, { expiresIn: '1h' });
    res.json({ token });
};

module.exports = { authenticateUser };