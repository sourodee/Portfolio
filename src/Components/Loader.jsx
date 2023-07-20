import { motion } from "framer-motion";
import loader from "../assets/loader.gif";
export default function Loader() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="h-screen flex justify-center items-center"
        >
            <img className="w-40" src={loader} alt="loading..." />
        </motion.main>
    );
}
