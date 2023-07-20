/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                basic: ["Nunito", "sans-serif"],
                heading: ["Bebas Neue", "sans-serif"],
                handwriting: ["Sacramento", "cursive"],
            },
            colors: {
                primary: "#aaa",
                secondary: "#930808",
                accent: "#fcc860",
                darkPrimary: "#210056",
                darkSecondary: "#c69e00",
                darkAccent: "#b4bbff",
                "[#4267B2]": "#4267B2",
                "[#E1306C]": "#E1306C",
            },
            backgroundColor: {
                primary: "#aaa",
                secondary: "#930808",
                darkPrimary: "#210056",
                darkSecondary: "#c69e00",
                accent: "#fcc860",
                darkAccent: "#b4bbff",
            },
            minHeight: {
                screen: ["100vh","100dvh"],
                fullPage: "calc(100vh - 80px)",
            },
            spacing: {
                screen: ["100vh","100dvh"],
                fullPage: "calc(100vh - 80px)",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
