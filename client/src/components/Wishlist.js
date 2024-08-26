import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            const response = await axios.get('/api/wishlist');
            setWishlist(response.data);
        };
        fetchWishlist();
    }, []);

    return (
        <div>
            <h2>My Wishlist</h2>
            <ul>
                {wishlist.map(item => (
                    <li key={item.id}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;