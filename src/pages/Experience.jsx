import { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealWordByWordText from "../Components/RevealWordByWordText";
import data from "../Assets/PortfolioData";
import { ScreenContext } from "../Contexts/screenContext";
import ExperienceImg from "../Components/ExperienceImg";

export default function Experience() {
    const { experiences } = data;

    const { width } = useContext(ScreenContext);

    const { scrollYProgress } = useScroll();
    const scrollHeight = width > 1024 ? -2000 : width > 768 ? -3500 : -7000;
    const y1 = useTransform(scrollYProgress, [0, 0.75], [0, scrollHeight]);
    const y2 = useTransform(scrollYProgress, [0, 0.75], [scrollHeight, 0]);
    const yParent = useTransform(scrollYProgress, [0, 0.75], [0, 100]);

    let exp_col = [experiences.slice(0, 15)];
    if (width > 1024) {
        exp_col = [
            experiences.slice(0, 5),
            experiences.slice(5, 10),
            experiences.slice(10, 15),
        ];
    } else if (width > 768) {
        exp_col = [experiences.slice(0, 8), experiences.slice(8, 16)];
    }
    console.log(exp_col);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen pt-20 px-8 mb-24 text-center"
        >
            <div className="border-b-4 border-secondary dark:border-darkSecondary inline-block mx-auto mb-8">
                <RevealWordByWordText
                    text="Experience"
                    className="text-4xl lg:text-6xl font-handwriting font-semibold"
                />
            </div>
            <motion.div
                className="flex justify-between items-start h-full"
                style={{
                    y: yParent,
                }}
            >
                {exp_col.map((col, index) => (
                    <div
                        key={index}
                        className="h-[500px] overflow-y-hidden w-full md:w-1/3 lg:w-1/4 border border-current"
                    >
                        <motion.div
                            style={{
                                y: index % 2 === 0 ? y1 : y2,
                                transitionTimingFunction:
                                    "cubic-bezier(0.165, 0.04, 0.44, 1)",
                            }}
                            className="h-full relative"
                        >
                            {col.map((experience, i) => (
                                <ExperienceImg
                                    key={i}
                                    experience={experience}
                                    y={index % 2 === 0 ? y1 : y2}
                                />
                            ))}
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </motion.main>
    );
}
