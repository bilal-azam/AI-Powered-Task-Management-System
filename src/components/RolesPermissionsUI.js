// UI Component for Managing User Roles and Permissions
function RolesPermissionsUI({ users, onAssignRole }) {
    return (
        <div className="roles-permissions-ui">
            <h2>Manage User Roles</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                        <select onChange={(e) => onAssignRole(user.id, e.target.value)}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { RolesPermissionsUI };