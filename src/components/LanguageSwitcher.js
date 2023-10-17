// UI Component for Language Switcher
function LanguageSwitcher({ onLanguageChange }) {
    return (
        <div className="language-switcher">
            <label>
                Language:
                <select onChange={(e) => onLanguageChange(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                </select>
            </label>
        </div>
    );
}

module.exports = { LanguageSwitcher };