// UI Component for Advanced Product Filtering
function AdvancedFilteringUI({ filters, onFilterChange }) {
    return (
        <div className="advanced-filtering-ui">
            <h2>Filter Products</h2>
            {filters.map((filter, index) => (
                <div key={index}>
                    <label>{filter.label}</label>
                    <select onChange={(e) => onFilterChange(filter.name, e.target.value)}>
                        {filter.options.map((option, i) => (
                            <option key={i} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}

module.exports = { AdvancedFilteringUI };