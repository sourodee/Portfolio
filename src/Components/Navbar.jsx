/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaPhone, FaHome, FaTimes } from "react-icons/fa";
import logo from "../Assets/logo.png";
import logoDark from "../Assets/logo-dark.png";
import DarkModeToggler from "./DarkModeToggler";
import { ThemeContext } from "../Contexts/themeContext";
export default function Navbar() {
    const menuItems = [
        {
            icon: <FaHome />,
            name: "Home",
            path: "/",
        },
        {
            name: "Work",
            path: "/work",
        },
        {
            name: "My Tools",
            path: "/tools",
        },
        {
            name: "Experience",
            path: "/experience",
        },
        {
            icon: <FaPhone />,
            name: "Contact",
            path: "/contact",
        },
    ];
    const { pathname } = useLocation();
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNav = () => {
        setNavbarOpen(!navbarOpen);
    };

    const { scrollY } = useScroll();
    const [y, setY] = useState(0);
    useMotionValueEvent(scrollY, "change", (latest) => {
        setY(latest);
    });

    const { theme } = useContext(ThemeContext);

    return (
        <nav className="navbar fixed top-0 left-0 w-full z-[100]">
            <div
                style={y > 50 ? { backgroundColor: "rgba(0,0,0,0.5)" } : {}}
                className="nav-container flex justify-between items-center px-4 py-2 transition-colors duration-500 ease-in-out"
            >
                <div className="navbar-brand w-20">
                    <Link className="navbar-item" to="/">
                        <AnimatePresence>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="w-full h-full object-contain"
                                src={theme === "dark" ? logoDark : logo}
                                alt="Logo"
                            />
                        </AnimatePresence>
                    </Link>
                </div>
                <div className="navbar-menu flex justify-between items-center gap-x-12">
                    <ul className="hidden md:flex justify-between gap-x-8 bg-secondary dark:bg-darkSecondary px-4 py-2 text-primary dark:text-darkPrimary font-semibold rounded-md">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                style={
                                    pathname === item.path
                                        ? { fontWeight: "900" }
                                        : {}
                                }
                            >
                                <Link
                                    className="navbar-item flex flex-col justify-between items-center"
                                    to={item.path}
                                >
                                    <span className="text-base">
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-theme-switcher">
                        <DarkModeToggler />
                    </div>
                    <div
                        onClick={toggleNav}
                        className="hammburger-btn text-2xl text-secondary dark:text-darkSecondary cursor-pointer md:hidden"
                    >
                        <FaBars />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={
                        navbarOpen
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: "100%" }
                    }
                    transition={{ duration: 0.5 }}
                    className="floating-container md:hidden absolute top-0 right-0 w-full h-screen bg-secondary dark:bg-darkSecondary flex justify-center items-center gap-x-8 px-4 py-2 text-white dark:text-violet-900 font-semibold font-heading text-2xl tracking-wide z-50"
                >
                    <button
                        className="absolute top-8 left-8 text-2xl"
                        onClick={toggleNav}
                    >
                        <FaTimes />
                    </button>
                    <ul className="flex flex-col justify-between items-center gap-y-24 text-primary dark:text-darkPrimary">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`px-2 rounded-sm transition-all duration-300 ease-in-out
                                    ${
                                        pathname === item.path
                                            ? "bg-primary dark:bg-darkPrimary text-secondary dark:text-darkSecondary"
                                            : ""
                                    }
                                    `}
                                onClick={toggleNav}
                            >
                                <Link className="navbar-item" to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
}
