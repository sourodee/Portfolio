import { useState } from "react";

/* eslint-disable react/prop-types */
export default function InputGroup({
    type = "text",
    label,
    name,
    id,
    placeholder,
    value,
    setValue,
}) {
    const [focus, setFocus] = useState(false);
    return (
        <div className="input-group flex justify-between items-start flex-wrap w-full relative">
            {type === "textarea" ? (
                <textarea
                    className="bg-transparent outline-none transition-colors duration-300 ease-in-out placeholder:text-transparent border-b-2 border-current resize-none text-2xl block w-full py-1 h-36 focus:border-secondary dark:focus:border-darkSecondary peer"
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onWheel={(e) => e.target.blur()}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            ) : (
                <input
                    className="bg-transparent outline-none transition-colors duration-300 ease-in-out placeholder:text-transparent border-b-2 border-current text-2xl w-full py-1 focus:border-secondary dark:focus:border-darkSecondary peer"
                    type={type}
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={(e) => setValue(e.target.value)}
                    onWheel={(e) => e.target.blur()}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            )}

            <label
                className="font-handwriting text-xl lg:text-3xl -top-5 lg:-top-6 inline-block absolute left-0 transition-all duration-500 ease-in-out peer-placeholder-shown:text-3xl lg:peer-placeholder-shown:text-4xl peer-placeholder-shown:top-2 lg:peer-placeholder-shown:top-0 peer-focus:-top-5 lg:peer-focus:-top-6 peer-focus:text-xl lg:peer-focus:text-3xl"
                htmlFor={id}
            >
                {focus || value !== "" ? label : placeholder}
            </label>
        </div>
    );
}
