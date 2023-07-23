import { motion } from "framer-motion";
import { useState } from "react";
import InputGroup from "../Components/InputGroup";
import { FaAddressBook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import data from "../Assets/PortfolioData.js";

export default function Contact() {
    const formSubmitHandeler = (e) => {
        e.preventDefault();
        const data = {
            name: nameFormData,
            email: emailFormData,
            message: messageFormData,
        };
        console.log(data);
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert("Message sending failed!");
                }
            );
    };

    const [nameFormData, setNameFormData] = useState("");
    const [emailFormData, setEmailFormData] = useState("");
    const [messageFormData, setMessageFormData] = useState("");

    const { contact } = data;
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen pt-20 text-left flex flex-col lg:flex-row items-center lg:items-start justify-between px-8 md:px-16 lg:px-24 mb-8 gap-y-12"
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="contact-details-container text-primary dark:text-darkPrimary w-full lg:w-1/4 h-full flex flex-col justify-between order-2 lg:order-[0] gap-y-4 font-light"
            >
                <div className="contact-details flex items-center justify-start gap-x-4 bg-secondary dark:bg-darkSecondary px-2 py-0.5 rounded shadow-[2px_4px_5px] shadow-black dark:shadow-darkAccent transition-colors duration-300 ease-in-out">
                    <span className="icon text-lg">
                        <FaEnvelope />
                    </span>
                    <span className="data">{contact.email}</span>
                </div>
                <div className="contact-details flex items-center justify-start gap-x-4 bg-secondary dark:bg-darkSecondary px-2 py-0.5 rounded shadow-[2px_4px_5px] shadow-black dark:shadow-darkAccent transition-colors duration-300 ease-in-out">
                    <span className="icon text-lg">
                        <FaPhoneAlt />
                    </span>
                    <span className="data">{contact.phone}</span>
                </div>
                <div className="contact-details flex items-center justify-start gap-x-4 bg-secondary dark:bg-darkSecondary px-2 py-0.5 rounded shadow-[2px_4px_5px] shadow-black dark:shadow-darkAccent transition-colors duration-300 ease-in-out">
                    <span className="icon text-lg">
                        <FaAddressBook />
                    </span>
                    <span className="data">{contact.address}</span>
                </div>
                <div className="w-full mt-8">
                    <iframe
                        width="100%"
                        height="300"
                        className="border-4 h-[300px] border-secondary dark:border-darkSecondary rounded shadow-[2px_4px_5px] shadow-black dark:shadow-darkAccent transition-colors duration-300 ease-in-out overflow-hidden"
                        src={`https://maps.google.com/maps?width=100%25&height=300&hl=en&q=${contact.mapLocation}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                    >
                        <a href="https://www.maps.ie/distance-area-calculator.html">
                            measure distance on map
                        </a>
                    </iframe>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="contact-form-container w-full lg:w-2/3"
            >
                <h1 className="text-5xl lg:text-7xl font-medium font-handwriting mb-10 lg:mb-16 border-b-[6px] border-secondary dark:border-darkSecondary inline-block">
                    Get in touch
                </h1>
                <form
                    onSubmit={formSubmitHandeler}
                    className="contact-form text-left flex flex-col justify-between items-start gap-y-8 lg:gap-y-14"
                >
                    <InputGroup
                        label="Name"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                        value={nameFormData}
                        setValue={setNameFormData}
                    />
                    <InputGroup
                        label="Email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        value={emailFormData}
                        setValue={setEmailFormData}
                    />
                    <InputGroup
                        label="Message"
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        type="textarea"
                        value={messageFormData}
                        setValue={setMessageFormData}
                    />
                    <button
                        className="font-handwriting text-4xl bg-transparent border-2 border-current px-4 py-2 rounded-md hover:bg-secondary dark:hover:bg-darkSecondary transition-colors duration-300 ease-in-out self-stretch lg:self-end"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </motion.div>
        </motion.main>
    );
}
