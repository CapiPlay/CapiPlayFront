import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ darkMode, toggleDarkMode }) {
    return (
        <div
            className="checkbox-wrapper-54"
            onClick={(e) => e.stopPropagation()}>
            <label className="switch">
                <input
                    type="checkbox"
                    defaultChecked={true}
                    checked={darkMode} onChange={toggleDarkMode}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ThemeToggle;
