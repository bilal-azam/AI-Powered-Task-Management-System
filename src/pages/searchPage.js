// Refactor Search Page to Enhance Performance
const { searchProducts } = require('../features/productSearch');
const { SearchResultsUI } = require('../components/SearchResultsUI');

function renderSearchPage(query) {
    const results = searchProducts(query);
    // Render search results
    return (
        <div>
            <h1>Search</h1>
            <SearchResultsUI results={results} />
        </div>
    );
}

module.exports = { renderSearchPage };