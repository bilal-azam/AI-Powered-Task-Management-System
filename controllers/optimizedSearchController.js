const { optimizedSearchItems } = require('../services/optimizedSearchService');

const search = async (req, res) => {
    const { query } = req.query;
    try {
        const results = await optimizedSearchItems(query);
        res.json(results);
    } catch (error) {
        res.status(500).send('Error performing search');
    }
};

module.exports = { search };