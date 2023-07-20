import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/DarkModeToggler.css";
import { ThemeContext } from "../Contexts/themeContext";

export default function DarkModeToggler() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <label className="dark-toggle-container">
            <input
                className="dark-toggle-checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                type="checkbox"
            ></input>
            <div className="dark-toggle-slot">
                <div className="sun-icon-wrapper">
                    <FaSun className="sun-icon" />
                </div>
                <div className="dark-toggle-button"></div>
                <div className="moon-icon-wrapper">
                    <FaMoon className="moon-icon" />
                </div>
            </div>
        </label>
    );
}
