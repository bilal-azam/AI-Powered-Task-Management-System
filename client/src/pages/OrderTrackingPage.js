import React from 'react';
import OrderTracking from '../components/OrderTracking';

const OrderTrackingPage = ({ match }) => {
    const { orderId } = match.params;

    return (
        <div>
            <h1>Order Tracking</h1>
            <OrderTracking orderId={orderId} />
        </div>
    );
};

export default OrderTrackingPage;