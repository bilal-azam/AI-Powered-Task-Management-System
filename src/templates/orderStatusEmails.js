// Email Templates for Order Statuses
const templates = {
    'ORDER_CONFIRMED': (orderId) => `Your order #${orderId} has been confirmed!`,
    'ORDER_SHIPPED': (orderId) => `Your order #${orderId} has been shipped!`,
    'ORDER_DELIVERED': (orderId) => `Your order #${orderId} has been delivered!`,
};

module.exports = templates;