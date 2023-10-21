// UI Component for Viewing User Activity Logs
function ActivityLogUI({ logs }) {
    return (
        <div className="activity-log-ui">
            <h2>User Activity Logs</h2>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log.activity}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { ActivityLogUI };