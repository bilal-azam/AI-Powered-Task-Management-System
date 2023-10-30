// UI Component for Displaying Analytics Dashboard
function AnalyticsDashboardUI({ report }) {
    return (
        <div className="analytics-dashboard-ui">
            <h2>Analytics Dashboard</h2>
            <p>Total Users: {report.totalUsers}</p>
            <p>Total Sales: {report.totalSales}</p>
        </div>
    );
}

module.exports = { AnalyticsDashboardUI };