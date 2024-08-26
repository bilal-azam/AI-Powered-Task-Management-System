const axios = require('axios');

const fetchExternalData = async () => {
    try {
        const response = await axios.get('https://api.example.com/data');
        return response.data;
    } catch (error) {
        console.error('Error fetching external data:', error);
        throw error;
    }
};

module.exports = { fetchExternalData };