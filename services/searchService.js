const mongoose = require('mongoose');
const Item = require('../models/Item'); // Assuming an Item model exists

const searchItems = async (query) => {
    return await Item.find({ name: new RegExp(query, 'i') });
};

module.exports = { searchItems };