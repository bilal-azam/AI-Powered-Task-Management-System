const axios = require('axios');

const getExternalData = async () => {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
};

module.exports = { getExternalData };