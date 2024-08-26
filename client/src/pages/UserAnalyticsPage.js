import React, { useEffect, useState } from 'react';
import UserAnalytics from '../components/UserAnalytics';
import axios from 'axios';

const UserAnalyticsPage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get('/api/user-analytics/data')
            .then(response => setUserData(response.data))
            .catch(error => console.error('Error fetching user analytics data:', error));
    }, []);

    return (
        <div>
            <h1>User Analytics</h1>
            {userData ? <UserAnalytics userData={userData} /> : 'Loading...'}
        </div>
    );
};

export default UserAnalyticsPage;