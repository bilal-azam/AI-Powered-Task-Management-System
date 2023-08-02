// UI Component for Recommended Products
function RecommendationUI({ recommendations }) {
    return (
        <div className="recommendation-ui">
            <h2>Recommended Products</h2>
            <ul>
                {recommendations.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { RecommendationUI };