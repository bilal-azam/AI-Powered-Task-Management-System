// UI Component for AI-based Recommendation System
function RecommendationSystemUI({ recommendations }) {
    return (
        <div className="recommendation-system-ui">
            <h2>Recommended Products</h2>
            <ul>
                {recommendations.map((product, index) => (
                    <li key={index}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { RecommendationSystemUI };