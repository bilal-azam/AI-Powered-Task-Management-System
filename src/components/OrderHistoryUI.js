// UI Component for Order History Feature
function OrderHistoryUI({ userId, orders }) {
    return (
        <div className="order-history-ui">
            <h2>My Order History</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        <p>Order #{order.id}</p>
                        <p>Date: {order.date}</p>
                        <p>Total: {order.total}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { OrderHistoryUI };