// UI Component for Search Results with Filters
function SearchUI({ results, onFilterChange }) {
    return (
        <div className="search-ui">
            <h2>Search Results</h2>
            <div className="filters">
                <label>
                    Category:
                    <select onChange={(e) => onFilterChange('category', e.target.value)}>
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </label>
            </div>
            <ul>
                {results.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

module.exports = { SearchUI };