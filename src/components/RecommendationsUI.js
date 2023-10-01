// UI Component for Displaying Recommended Products
function RecommendationsUI({ recommendations }) {
    return (
        <div className="recommendations-ui">
            <h2>Recommended for You</h2>
            <ul>
                {recommendations.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { RecommendationsUI };