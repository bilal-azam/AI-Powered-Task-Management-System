// UI Component for Product Review and Rating
function ReviewSystemUI({ productId, reviews, onAddReview }) {
    return (
        <div className="review-system-ui">
            <h2>Product Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                const review = e.target.review.value;
                const rating = e.target.rating.value;
                onAddReview(productId, review, rating);
            }}>
                <textarea name="review" required></textarea>
                <select name="rating" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
}

module.exports = { ReviewSystemUI };