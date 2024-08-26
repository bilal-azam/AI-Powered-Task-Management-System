const Role = require('../models/Role');

const createRole = async (req, res) => {
    try {
        const role = new Role(req.body);
        await role.save();
        res.status(201).send(role);
    } catch (error) {
        res.status(500).send('Error creating role');
    }
};

module.exports = { createRole };