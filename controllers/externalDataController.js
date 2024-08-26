const { fetchExternalData } = require('../services/externalApiService');

const getExternalData = async (req, res) => {
    try {
        const data = await fetchExternalData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getExternalData };