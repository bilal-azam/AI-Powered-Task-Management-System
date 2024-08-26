const mongoose = require('mongoose');
const Item = require('../models/Item');

const optimizedSearchItems = async (query) => {
    return await Item.find({ name: new RegExp(query, 'i') }).limit(50); // Added limit for optimization
};

module.exports = { optimizedSearchItems };