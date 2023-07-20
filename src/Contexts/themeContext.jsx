import { createContext, useEffect, useRef, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    setTheme: () => {},
});

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const initiallRender = useRef(false);
    useEffect(() => {}, []);
    useEffect(() => {
        async function getTheme() {
            const localTheme = await localStorage.getItem("theme");
            if (localTheme) {
                setTheme(localTheme);
            }
        }

        if (!initiallRender.current) {
            getTheme();
        } else {
            window.localStorage.setItem("theme", theme);
        }
        document.documentElement.className = theme;

        return () => {
            initiallRender.current = true;
        };
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
