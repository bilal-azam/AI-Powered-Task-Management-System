import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/profile')
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.username}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default UserProfile;