const searchItems = (req, res) => {
    // Simulated search functionality
    const query = req.query.q;
    const filteredItems = [{ name: 'Item 1' }, { name: 'Item 2' }].filter(item => item.name.includes(query));
    res.json(filteredItems);
};

module.exports = { searchItems };