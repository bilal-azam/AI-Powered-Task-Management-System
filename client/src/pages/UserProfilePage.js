import React from 'react';
import UserProfile from '../components/UserProfile';
import LogoutButton from '../components/LogoutButton';

const UserProfilePage = () => {
    return (
        <div>
            <h1>User Profile</h1>
            <UserProfile />
            <LogoutButton />
        </div>
    );
};

export default UserProfilePage;