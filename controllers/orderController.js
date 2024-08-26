const getOrder = async (req, res) => {
    const { orderId } = req.params;
    // Sample data
    const order = {
        id: orderId,
        status: 'Shipped',
        estimatedDelivery: '2023-12-10'
    };
    res.json(order);
};

module.exports = { getOrder };