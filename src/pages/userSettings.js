// Integrate Account Deactivation with User Settings
const { deactivateAccount } = require('../features/accountDeactivation');

function renderUserSettings(userId) {
    const handleDeactivateAccount = () => deactivateAccount(userId);
    return (
        <div>
            <h1>User Settings</h1>
            <button onClick={handleDeactivateAccount}>Deactivate Account</button>
        </div>
    );
}

module.exports = { renderUserSettings };