const { getExternalData } = require('../services/externalApiService');

const fetchData = async (req, res) => {
    const data = await getExternalData();
    res.json(data);
};

module.exports = { fetchData };