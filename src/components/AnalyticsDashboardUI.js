// Refactor Analytics Dashboard UI for Better Performance
function AnalyticsDashboardUI({ data }) {
    return (
        <div className="analytics-dashboard-ui">
            <h2>Analytics Dashboard</h2>
            <div>
                <p>Total Sales: {data.totalSales}</p>
                <p>Total Users: {data.totalUsers}</p>
                <p>Total Orders: {data.totalOrders}</p>
            </div>
        </div>
    );
}

module.exports = { AnalyticsDashboardUI };