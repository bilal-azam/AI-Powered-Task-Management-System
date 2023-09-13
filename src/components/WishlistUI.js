// UI Component for Wishlist Management
function WishlistUI({ wishlist }) {
    return (
        <div className="wishlist-ui">
            <h2>Your Wishlist</h2>
            <ul>
                {wishlist.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { WishlistUI };