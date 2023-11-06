// UI Component for Wishlist Feature
function WishlistUI({ userId, wishlist, onAddToWishlist }) {
    return (
        <div className="wishlist-ui">
            <h2>My Wishlist</h2>
            <ul>
                {wishlist.map((product, index) => (
                    <li key={index}>
                        <p>{product.name}</p>
                        <button onClick={() => onAddToWishlist(userId, product.id)}>
                            Add to Wishlist
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { WishlistUI };