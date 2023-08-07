// UI Component for Purchase History
function PurchaseHistoryUI({ history }) {
    return (
        <div className="purchase-history-ui">
            <h2>Purchase History</h2>
            <ul>
                {history.map(order => (
                    <li key={order.id}>{order.productName}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { PurchaseHistoryUI };