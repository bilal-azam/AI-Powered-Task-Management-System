const getWishlist = async (req, res) => {
    // Sample data
    const wishlist = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 }
    ];
    res.json(wishlist);
};

module.exports = { getWishlist };