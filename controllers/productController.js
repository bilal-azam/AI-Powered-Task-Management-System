const getProducts = async (req, res) => {
    const { search } = req.query;
    let query = {};
    if (search) {
        query.name = { $regex: search, $options: 'i' };
    }
    const products = await Product.find(query);
    res.json(products);
};

module.exports = { getProducts };