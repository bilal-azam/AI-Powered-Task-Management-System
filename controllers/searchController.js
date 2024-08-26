const { searchItems } = require('../services/searchService');

const search = async (req, res) => {
    const { query } = req.query;
    try {
        const results = await searchItems(query);
        res.json(results);
    } catch (error) {
        res.status(500).send('Error performing search');
    }
};

module.exports = { search };