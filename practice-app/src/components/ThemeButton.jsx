import React, { useState } from "react";
import styles from "../style/ThemeButton.module.css";

function ThemeButton() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(theme => !theme);
    };

    return (
        <button
            className={`${styles.base} ${isDark ? styles.darkMode : styles.lightMode}`}
            onClick={toggleTheme}>
                
            {isDark ? "Dark Mode" : "Light Mode"}
        </button>
    );
}

export default ThemeButton;