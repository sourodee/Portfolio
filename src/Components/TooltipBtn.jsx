/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TooltipBtn({ ButtonIcon, text, className }) {
    const [infoHover, setInfoHover] = useState(false);
    return (
        <div className={className}>
            <span
                className="absolute top-0 right-0 text-sm bg-white dark:bg-black bg-opacity-40 hover:bg-opacity-100 p-1 rounded-full transition-colors duration-200 ease-in-out cursor-pointer"
                onMouseEnter={() => setInfoHover(true)}
                onMouseLeave={() => setInfoHover(false)}
            >
                <ButtonIcon />
            </span>
            <AnimatePresence>
                {infoHover && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="absolute top-0 right-10 text-xs bg-white dark:bg-black bg-opacity-50 p-1 rounded-md transition-colors duration-100 ease-in-out max-w-[200px]"
                    >
                        {text}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
