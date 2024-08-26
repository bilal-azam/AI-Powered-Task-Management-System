import React from 'react';

const UserAnalytics = ({ userData }) => {
    return (
        <div>
            <h2>User Analytics</h2>
            <p>Total Users: {userData.totalUsers}</p>
            <p>Active Users: {userData.activeUsers}</p>
            <p>Inactive Users: {userData.inactiveUsers}</p>
        </div>
    );
};

export default UserAnalytics;