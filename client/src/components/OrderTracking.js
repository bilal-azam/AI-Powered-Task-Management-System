import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTracking = ({ orderId }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            const response = await axios.get(`/api/orders/${orderId}`);
            setOrder(response.data);
        };
        fetchOrder();
    }, [orderId]);

    return (
        <div>
            <h2>Order Tracking</h2>
            {order ? (
                <div>
                    <p>Status: {order.status}</p>
                    <p>Estimated Delivery: {order.estimatedDelivery}</p>
                </div>
            ) : (
                'Loading...'
            )}
        </div>
    );
};

export default OrderTracking;