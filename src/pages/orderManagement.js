// Integrate Notification System with Order Management
const { sendOrderStatusUpdate } = require('../features/notificationSystem');

function updateOrderStatus(orderId, status) {
    // Update order status and notify user
    sendOrderStatusUpdate(orderId, status);
}

module.exports = { updateOrderStatus };