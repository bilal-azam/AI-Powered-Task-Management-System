import React, { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default ProductSearch;