import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./Contexts/themeContext.jsx";
import ScreenProvider from "./Contexts/screenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ScreenProvider>
            <ThemeProvider>
                <Router>
                    <App />
                </Router>
            </ThemeProvider>
        </ScreenProvider>
    </React.StrictMode>
);
