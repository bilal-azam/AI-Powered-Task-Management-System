const getNotifications = async (req, res) => {
    // Sample data
    const notifications = [
        { message: 'Your order has been shipped!' },
        { message: 'New products added to your favorite category.' }
    ];
    res.json(notifications);
};

module.exports = { getNotifications };