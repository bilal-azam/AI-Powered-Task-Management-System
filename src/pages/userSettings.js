// Integrate Account Reactivation with User Settings
const { reactivateAccount } = require('../features/accountReactivation');

function renderUserSettings(userId) {
    const handleReactivateAccount = () => reactivateAccount(userId);
    return (
        <div>
            <h1>User Settings</h1>
            <button onClick={handleReactivateAccount}>Reactivate Account</button>
        </div>
    );
}

module.exports = { renderUserSettings };