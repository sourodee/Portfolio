import data from "../Assets/PortfolioData";
import SocialLink from "./SocialLink";
import paperTextureLight from "../Assets/paper-texture-light.png";
import paperTextureDark from "../Assets/paper-texture-dark.png";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/themeContext";

export default function Footer() {
    const { name, socials } = data;
    const { theme } = useContext(ThemeContext);
    return (
        <div
            style={{
                backgroundImage: `url(${
                    theme === "light" ? paperTextureLight : paperTextureDark
                })`,
            }}
            className="max-h-[150px] text-center mx-auto bg-cover bg-no-repeat bg-top pt-12 pb-8 flex flex-col justify-center items-center gap-y-4 text-secondary dark:text-darkPrimary"
        >
            <div className="footer-links flex justify-center items-center gap-x-4 text-2xl">
                {socials?.map((social, index) => (
                    <SocialLink
                        key={index}
                        link={social.link}
                        hoverColor={social.color}
                        Icon={social.icon}
                    />
                ))}
            </div>
            <span>
                &copy; {new Date().getFullYear()} {name.first + " " + name.last}
            </span>
        </div>
    );
}
