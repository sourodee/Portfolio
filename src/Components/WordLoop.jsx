/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function WordLoop({ words, className }) {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((currentWord) =>
                currentWord === words.length - 1 ? 0 : currentWord + 1
            );
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <h2 className={`${className} inline overflow-hidden w-full relative`}>
            <AnimatePresence initial={false} mode="wait">
                <motion.span
                    className="md:absolute"
                    key={currentWord}
                    layout
                    variants={{
                        enter: {
                            y: 20,
                            opacity: 0,
                            height: 0,
                        },
                        center: {
                            z: 1,
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                            },
                        },
                        exit: {
                            z: 0,
                            y: -20,
                            opacity: 0,
                            height: 0,
                        },
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        y: {
                            type: "spring",
                            stiffness: 1000,
                            damping: 200,
                        },
                        opacity: { duration: 0.5 },
                    }}
                >
                    {words[currentWord]}
                </motion.span>
            </AnimatePresence>
        </h2>
    );
}
