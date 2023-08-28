// UI Component for Viewing Order History
function OrderHistoryUI({ history }) {
    return (
        <div className="order-history-ui">
            <h2>Order History</h2>
            <ul>
                {history.map(order => (
                    <li key={order.id}>{order.productName}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { OrderHistoryUI };