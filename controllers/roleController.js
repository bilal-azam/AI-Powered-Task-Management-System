const Role = require('../models/Role');

const createRole = async (req, res) => {
    const { name, permissions } = req.body;
    try {
        const role = new Role({ name, permissions });
        await role.save();
        res.status(201).json(role);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createRole, getRoles };