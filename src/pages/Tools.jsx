import { motion } from "framer-motion";
import SkillSphere from "../Components/SkillSphere";
import RevealingText from "../Components/RevealingText";
import RevealWordByWordText from "../Components/RevealWordByWordText";
import data from "../Assets/PortfolioData";

export default function Tools() {
    const { reasonToChooseMe } = data;
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen pt-20 flex flex-col lg:flex-row justify-around items-center relative px-8 md:px-16 lg:px-24 mb-8 lg:mb-0 gap-y-4 lg:gap-y-0"
        >
            <div className="relative w-full lg:w-1/2 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                    className="absolute top-0 left-1/2 h-full aspect-square bg-radial-gradient from-white via-accent dark:via-darkAccent to-transparent from-[1%] via-[2%] to-[40%] z-0"
                />
                <SkillSphere />
            </div>
            <div className="text-center lg:text-right w-full lg:w-1/2">
                <div className="border-b-4 border-secondary dark:border-darkSecondary mb-4 inline-flex justify-center lg:justify-between gap-x-4 w-auto">
                    <RevealWordByWordText
                        text="Why should you choose me?"
                        className="text-3xl lg:text-6xl inline-block font-semibold font-handwriting"
                    />
                </div>
                <RevealingText
                    text={reasonToChooseMe}
                    className="max-w-xl mx-auto lg:mr-0 font-light text-secondary dark:text-darkSecondary"
                />
            </div>
        </motion.main>
    );
}
