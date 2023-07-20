import allIcons from "simple-icons";
import { v4 } from "uuid";
import { IconCloud } from "react-icon-cloud";
import TooltipBtn from "./TooltipBtn";
import { FaInfo } from "react-icons/fa";
import { memo } from "react";
import data from "../Assets/PortfolioData";

function SkillSphere() {
    const tagCanvasOptions = {
        clickToFront: 500,
        depth: 1,
        dragControl: false,
        imageScale: 2,
        initial: [0.1, -0.1],
        outlineColour: "#0000",
        reverse: false,
        tooltip: "native",
        tooltipDelay: 0,
        wheelZoom: false,
    };
    // https://github.com/simple-icons/simple-icons/blob/develop/slugs.md
    const { skills } = data;
    const iconTags = skills.map((slug) => ({
        id: slug,
        simpleIcon: allIcons.Get(slug),
    }));

    return (
        <div className="z-[1] relative mx-auto">
            <TooltipBtn
                ButtonIcon={FaInfo}
                text="To view the planets clearly, see them in night"
                className="opacity-100 dark:opacity-0 dark:pointer-events-none transition-opacity duration-500 ease-in-out"
            />
            <IconCloud
                key={v4()}
                id={"icon"}
                minContrastRatio={1}
                iconSize={50}
                backgroundHexColor={"#fff"}
                fallbackHexColor={"#000"}
                tags={iconTags}
                tagCanvasOptions={tagCanvasOptions}
            />
        </div>
    );
}

const MemoizedSkillSphere = memo(SkillSphere);
export default MemoizedSkillSphere;
