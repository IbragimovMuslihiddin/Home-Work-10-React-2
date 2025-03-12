import React, { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../../../../src/index.css";


const Header = ({ toggleDarkModeProp, onAddClick }) => {
    const [isDarkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });
  
    const handleDarkModeToggle = (checked) => {
        setDarkMode(checked);
        toggleDarkModeProp(checked);
    };
  
    useEffect(() => {
        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    return (
            <div className="AllHeder">
                <div className="h1">
                    <h1>User List</h1>
                    </div>
            <div className="HEADER">
            <button className="btnAdd" onClick={onAddClick}>Add</button>
            <div className="app">
                <DarkModeSwitch className="darkMode" checked={isDarkMode} onChange={handleDarkModeToggle} size={120} />
            </div>
            </div>
            </div>
    );
};

export default Header;
