// styles
import './ThemeToggle.css';

// react
import React, { useState, useEffect } from 'react'

function ThemeToggle() {

    const [isLightMode, setIsLightMode] = useState(localStorage.getItem('lightTheme') === 'true');

    const changeTheme = () => {
        const novoIsLightMode = !isLightMode
        setIsLightMode(novoIsLightMode)
        localStorage.setItem('lightTheme', novoIsLightMode)
    };

    useEffect(() => {
        if (isLightMode) {
            document.body.classList.add('light__mode');
        } else {
            document.body.classList.remove('light__mode');
        }
    }, [isLightMode]);

    return (
        <div
            className="checkbox-wrapper-54"
            onClick={(e) => e.stopPropagation()}
            >
            <label className="switch">
                <input
                    type="checkbox"
                    checked={!isLightMode} 
                    onChange={changeTheme}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ThemeToggle;