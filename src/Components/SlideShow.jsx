/* eslint-disable react/prop-types */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LazyImage from "./LazyImage";

export default function SlideShow({ images, videos, selectedWork }) {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setIndex(0);
    }, [selectedWork]);

    return (
        <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
            <div className="h-[calc(100vh-140px)] lg:h-fullPage px-1 lg:px-8">
                <div className="mx-auto flex h-full flex-col justify-center">
                    <div className="relative overflow-hidden border-8 border-secondary dark:border-darkSecondary rounded-md bg-primary dark:bg-darkPrimary bg-[url('https://media3.giphy.com/media/fphXG8dDcRHVavls9o/giphy.gif?cid=ecf05e47qzk02v4j4g3hs3cvhs2bua4sdqudhxe2pxma84lw&ep=v1_stickers_search&rid=giphy.gif&ct=s')] bg-no-repeat bg-center bg-[length:100px]">
                        <motion.div
                            animate={{ x: `-${index * 100}%` }}
                            className="flex justify-start h-full min-h-[300px] lg:min-h-[calc(100vh-150px)] z-[1] relative"
                        >
                            {images &&
                                images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-full h-full grow shrink-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <LazyImage
                                            containerClassName="w-full h-full"
                                            publicId={image.imgPublicId}
                                        />
                                    </motion.div>
                                ))}
                            {videos &&
                                videos.map((video, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-full h-full grow shrink-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <iframe
                                            className="iframe w-full h-full object-contain"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            width="100%"
                                            height="390"
                                            src={video.videoUrl}
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        ></iframe>
                                    </motion.div>
                                ))}
                        </motion.div>
                        <AnimatePresence initial={false}>
                            {index > 0 && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white z-[5]"
                                    onClick={() => setIndex(index - 1)}
                                >
                                    <FaChevronLeft className="h-6 w-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        <AnimatePresence initial={false}>
                            {index + 1 < (images?.length ?? videos?.length) && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white z-[5]"
                                    onClick={() => setIndex(index + 1)}
                                >
                                    <FaChevronRight className="h-6 w-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </MotionConfig>
    );
}
