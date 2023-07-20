import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SocialLink({ link, hoverColor, Icon }) {
    const [mouseHover, setMouseHover] = useState(false);
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 ease-in-out"
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            style={
                mouseHover ? { color: hoverColor, transform: "scale(1.1)" } : {}
            }
        >
            <Icon />
        </a>
    );
}
