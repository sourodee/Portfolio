/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import LazyImage from "./LazyImage";
import { ScreenContext } from "../Contexts/screenContext";
import { FaInfo } from "react-icons/fa";

export default function ExperienceImg({ experience, y }) {
    const { width } = useContext(ScreenContext);
    const [hover, setHover] = useState(false);
    return (
        <section
            className=""
            onMouseEnter={width > 1024 ? () => setHover(true) : () => {}}
            onMouseLeave={width > 1024 ? () => setHover(false) : () => {}}
        >
            <div className="relative">
                {width <= 1024 && (
                    <button
                        onFocus={() => setHover(true)}
                        onBlur={() => setHover(false)}
                        className="absolute top-8 right-8 text-xs bg-accent dark:bg-darkAccent text-black p-1 rounded-full"
                    >
                        <FaInfo />
                    </button>
                )}
                <LazyImage
                    containerClassName="h-[500px] bg-transparent"
                    publicId={experience.imgPublicId}
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={
                    hover
                        ? { opacity: 1, y: y.get() * -1 }
                        : { opacity: 0, y: y.get() * -1 + 500 }
                }
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="details-container absolute z-[1] inset-0 bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-70 flex flex-col justify-center items-center gap-y-2 p-4"
            >
                <h3 className="text-3xl font-handwriting underline underline-offset-2">
                    {experience.title}
                </h3>
                <p className="text-base text-center font-normal">
                    {experience.description}
                </p>
            </motion.div>
        </section>
    );
}
