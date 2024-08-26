const getProfile = async (req, res) => {
    // Sample data
    const profile = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    res.json(profile);
};

module.exports = { getProfile };