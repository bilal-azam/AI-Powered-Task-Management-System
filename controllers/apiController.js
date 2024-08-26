const { fetchFromApi } = require('../services/apiService');

const getApiData = async (req, res) => {
    const { endpoint } = req.params;
    try {
        const data = await fetchFromApi(endpoint);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
};

module.exports = { getApiData };