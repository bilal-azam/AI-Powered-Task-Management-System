// UI Component for Viewing Notifications
function NotificationsUI({ notifications }) {
    return (
        <div className="notifications-ui">
            <h2>Notifications</h2>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { NotificationsUI };