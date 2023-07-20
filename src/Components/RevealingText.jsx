/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function RevealingText({ text, className }) {
    const variants = (index) => ({
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.0075,
            },
        },
    });
    return (
        <motion.p className={className}>
            {text.split("").map((char, index) => {
                return (
                    <motion.span
                        key={char + "-" + index}
                        variants={variants(index)}
                        initial="hidden"
                        animate="visible"
                    >
                        {char}
                    </motion.span>
                );
            })}
        </motion.p>
    );
}
