const { Parser } = require('json2csv');
const fs = require('fs');

const exportDataToCSV = async (req, res) => {
    const data = [{ name: 'Item 1', price: 10 }, { name: 'Item 2', price: 20 }];
    const csv = new Parser().parse(data);

    fs.writeFileSync('data.csv', csv);
    res.download('data.csv');
};

module.exports = { exportDataToCSV };