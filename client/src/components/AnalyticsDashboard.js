import React from 'react';
import DataVisualization from './DataVisualization';

const AnalyticsDashboard = ({ data }) => {
    return (
        <div>
            <h2>Analytics Dashboard</h2>
            <DataVisualization data={data} />
        </div>
    );
};

export default AnalyticsDashboard;