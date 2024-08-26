import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('/api/user/profile')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching user profile:', error));
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default UserProfile;