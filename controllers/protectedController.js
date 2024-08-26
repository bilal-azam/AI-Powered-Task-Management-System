const protectedRoute = (req, res) => {
    res.send('This is a protected route');
};

module.exports = { protectedRoute };