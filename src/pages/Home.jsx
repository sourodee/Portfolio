import { AnimatePresence, motion } from "framer-motion";
import avatarDark from "../Assets/avatar_mask_dark.png";
import avatarLight from "../Assets/avatar_mask_light.png";
import { ThemeContext } from "../Contexts/themeContext";
import RevealingText from "../Components/RevealingText";
import data from "../Assets/PortfolioData";
import RevealWordByWordText from "../Components/RevealWordByWordText";
import WordLoop from "../Components/WordLoop";
import { useContext, useEffect, useRef } from "react";

export default function Home() {
    const { name, designations, about } = data;
    const { theme } = useContext(ThemeContext);

    const initialLoad = useRef(true);

    useEffect(() => {
        if (initialLoad.current) {
            initialLoad.current = false;
            return;
        }
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen pt-20"
        >
            <div className="grid grid-cols-1 grid-rows-6 justify-center items-center lg:grid-cols-5 lg:grid-rows-4 w-full h-full px-12">
                <div className="name-container col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 text-center lg:text-left">
                    <div className="name font-handwriting text-6xl lg:text-9xl font-medium border-b-4 border-secondary dark:border-darkSecondary inline-block transition-colors duration-500 ease-in-out">
                        <RevealWordByWordText
                            text={name.first + " " + name.last}
                        />
                    </div>
                </div>
                <div className="title-container col-start-1 col-end-2 row-start-3 row-end-4 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-4 text-center lg:text-left">
                    <div className="title font-handwriting text-4xl inline-block">
                        <h2>I am a</h2>
                        <WordLoop
                            words={designations}
                            className="font-heading font-medium tracking-wider text-secondary dark:text-darkSecondary whitespace-nowrap transition-colors duration-500 ease-in-out"
                        />
                    </div>
                </div>
                <div className="image-container col-start-1 col-end-2 row-start-1 row-end-2 lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-4 relative w-full h-full">
                    <AnimatePresence>
                        <motion.img
                            key={theme}
                            initial={
                                initialLoad.current
                                    ? { opacity: 0, scale: 0.8 }
                                    : { opacity: 0 }
                            }
                            animate={
                                initialLoad.current
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 1 }
                            }
                            exit={
                                initialLoad.current
                                    ? { opacity: 0, scale: 0.8 }
                                    : { opacity: 0 }
                            }
                            transition={{
                                duration: initialLoad.current ? 0.75 : 0.5,
                                ease: "easeInOut",
                                delay: initialLoad.current ? 0.5 : 0,
                            }}
                            src={theme === "light" ? avatarLight : avatarDark}
                            alt="Neel's Avatar"
                            className="w-full h-full object-contain absolute inset-0 z-[1]"
                        />
                    </AnimatePresence>
                </div>
                <div className="about-container col-start-1 col-end-2 row-start-4 row-end-7 lg:col-start-1 lg:col-end-6 lg:row-start-4 lg:row-end-5">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-0 lg:pt-8">
                        <motion.h3
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.75,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            className="font-heading text-3xl text-center lg:pr-4 border-b-2 lg:border-b-0 lg:border-r-2"
                        >
                            About Me
                        </motion.h3>
                        <RevealingText
                            text={about}
                            className="about font-basic text-lg font-light text-secondary dark:text-darkSecondary lg:pl-4 text-justify transition-colors duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </motion.main>
    );
}
