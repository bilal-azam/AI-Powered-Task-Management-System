// UI Component for Search Results
function SearchResultsUI({ results }) {
    return (
        <div className="search-results-ui">
            <h2>Search Results</h2>
            <ul>
                {results.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { SearchResultsUI };