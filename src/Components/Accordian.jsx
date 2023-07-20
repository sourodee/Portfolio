/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeContext } from "../Contexts/themeContext";

export default function Accordian({
    works = [],
    selectedWork,
    setSelectedWork,
}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="work-list flex flex-col gap-y-8">
            {works.map((work, index) => (
                <AccordianItem
                    key={index}
                    index={index}
                    work={work}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    selectedWork={selectedWork}
                    setSelectedWork={setSelectedWork}
                />
            ))}
        </div>
    );
}

function AccordianItem({
    index,
    work,
    expanded,
    setExpanded,
    selectedWork,
    setSelectedWork,
}) {
    const isOpen = expanded === index;
    const { theme } = useContext(ThemeContext);

    return (
        <div className="w-64">
            <motion.header
                className={`work-list-item cursor-pointer bg-secondary dark:bg-darkSecondary text-primary dark:text-darkPrimary py-2 lg:rounded-r font-bold font-heading text-3xl tracking-wider transition-colors duration-500 ease-in-out ${
                    isOpen ? "rounded-b-none bg-orange-900 dark:bg-white" : ""
                }`}
                style={
                    isOpen
                        ? {
                            borderBottomRightRadius: "0px",
                            backgroundColor:
                                theme === "dark"
                                    ? "#fff"
                                    : "rgb(124 45 18 / 100%)",
                        }
                        : {}
                }
                initial={false}
                onClick={() => setExpanded(isOpen ? false : index)}
            >
                {work.title}
            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="bg-accent dark:bg-darkAccent text-black dark:text-darkPrimary rounded-b lg:rounded-br"
                    >
                        <motion.div
                            variants={{
                                open: { scale: 1 },
                                collapsed: { scale: 0.8 },
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="work-list-item-content"
                        >
                            <ul className="work-items">
                                {work.items.map((item, index) => (
                                    <li key={index} className="work-item">
                                        <button
                                            onClick={() =>
                                                setSelectedWork(item)
                                            }
                                            className="work-item-title py-4"
                                        >
                                            <span
                                                className={`transition-all duration-300 ease-in-out font-semibold ${
                                                    selectedWork === item
                                                        ? "text-red-900 dark:text-white font-black"
                                                        : ""
                                                }`}
                                            >
                                                {item.title}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}
