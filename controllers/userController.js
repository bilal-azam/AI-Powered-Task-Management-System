const getUserProfile = async (req, res) => {
    // Sample profile data
    const profile = {
        username: 'JohnDoe',
        email: 'john.doe@example.com'
    };
    res.json(profile);
};

module.exports = { getUserProfile };