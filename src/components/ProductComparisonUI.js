// UI Component for Product Comparison Feature
function ProductComparisonUI({ comparisonResults }) {
    return (
        <div className="product-comparison-ui">
            <h2>Product Comparison</h2>
            <ul>
                {comparisonResults.map((result, index) => (
                    <li key={index}>
                        <p>{result.name}: {result.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { ProductComparisonUI };