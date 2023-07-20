/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext({
    width: 0,
    height: 0,
});

export default function ScreenProvider({ children }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });

        return () => {
            window.removeEventListener("resize", () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            });
        };
    }, []);

    return (
        <ScreenContext.Provider value={{ width, height }}>
            {children}
        </ScreenContext.Provider>
    );
}
