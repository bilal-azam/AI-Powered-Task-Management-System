const axios = require('axios');

const fetchFromApi = async (endpoint) => {
    try {
        const response = await axios.get(`https://api.example.com/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching from API:', error);
        throw error;
    }
};

module.exports = { fetchFromApi };