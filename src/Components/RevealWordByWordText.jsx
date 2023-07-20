/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function RevealWordByWordText({ text, className }) {
    return (
        <>
            {text.split(" ").map((word, index) => (
                <motion.h1
                    key={index}
                    className={className}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        delay: 0.75 * index,
                    }}
                >
                    {word}
                </motion.h1>
            ))}
        </>
    );
}
