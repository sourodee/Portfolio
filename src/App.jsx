import { Suspense, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeContext } from "./Contexts/themeContext";
import lazyLoad from "./Util/lazyLoad";
const Work = lazyLoad(()=>import("./Pages/Work"));
const Home = lazyLoad(()=>import("./Pages/Home"));
const Tools = lazyLoad(()=>import("./Pages/Tools"));
const Experience = lazyLoad(()=>import("./Pages/Experience"));
const Contact = lazyLoad(()=>import("./Pages/Contact"));

function App() {
    const location = useLocation();
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className="bg-primary dark:bg-darkPrimary transition-colors duration-500 ease-in-out overflow-x-hidden"
            style={
                location.pathname === "/tools" && theme === "dark"
                    ? {
                          backgroundImage:
                              "url('https://media2.giphy.com/media/NzSUEgbTWB7TW/giphy.gif?cid=ecf05e47i28nmo22l74vnnkvhfzbc5zta904vifpcw0qfl9y&ep=v1_gifs_related&rid=giphy.gif&ct=s')",
                      }
                    : {}
            }
        >
            <Navbar />
            <AnimatePresence>
                <Suspense fallback={<Loader />}>
                    <Routes key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default App;
