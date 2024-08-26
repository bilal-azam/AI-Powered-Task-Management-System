import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await axios.get('/api/profile');
            setProfile(response.data);
        };
        fetchProfile();
    }, []);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
        </div>
    );
};

export default UserProfile;