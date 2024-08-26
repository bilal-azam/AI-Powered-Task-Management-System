import React, { useEffect, useState } from 'react';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import axios from 'axios';

const AnalyticsPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/analytics/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching analytics data:', error));
    }, []);

    return (
        <div>
            <h1>Analytics</h1>
            {data ? <AnalyticsDashboard data={data} /> : 'Loading...'}
        </div>
    );
};

export default AnalyticsPage;