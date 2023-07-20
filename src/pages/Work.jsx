import { motion } from "framer-motion";
import Accordian from "../Components/Accordian";
import SlideShow from "../Components/SlideShow";
import data from "../Assets/PortfolioData";
import { useContext, useState } from "react";
import { ScreenContext } from "../Contexts/screenContext";

export default function Work() {
    const { works } = data;
    const [selectedWork, setSelectedWork] = useState(works[0].items[0] ?? {});
    const { width } = useContext(ScreenContext);
    const [expanded, setExpanded] = useState(width < 1024 ? false : true);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen pt-20 pb-8"
        >
            {width < 1024 && (
                <button
                    className="mx-auto bg-secondary dark:bg-darkSecondary text-primary font-medium dark:text-darkPrimary rounded shadow shadow-black dark:shadow-white  ml-8 mb-4 text-xl px-2"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Hide works list" : "Show works list"}
                </button>
            )}
            <div className="text-center text-secondary dark:text-darkSecondary flex justify-between items-start relative">
                <motion.div
                    initial={{ opacity: 0, x: -300}}
                    animate={
                        expanded
                            ? { opacity: 1, x: 0 }
                            : {
                                opacity: 0,
                                x: -300,
                                pointerEvents: "none",
                            }
                    }
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="work-list-container absolute top-0 left-0 z-10 py-4 bg-black bg-opacity-70 lg:bg-transparent rounded-r lg:relative w-64 lg:w-1/3 transition-all duration-500 ease-in-out"
                >
                    <Accordian
                        works={works}
                        selectedWork={selectedWork}
                        setSelectedWork={setSelectedWork}
                    />
                </motion.div>
                <div className="work-preview-container w-full lg:w-2/3">
                    <SlideShow
                        selectedWork={selectedWork}
                        images={selectedWork.images}
                        videos={selectedWork.videos}
                    />
                </div>
            </div>
        </motion.main>
    );
}
