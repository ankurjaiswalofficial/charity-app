"use client";

import Link from "next/link";
import React from "react";

export default function Button({
    type = "a",
    href = "#button",
    text = "Button",
    color = "black",
    hovered = false,
    onClick = null,
    ...props
}) {
    const defaultClassName = `relative rounded-md p-3 px-5 text-white whitespace-nowrap uppercase font-semibold text-xs w-fit bg-${color}`;
    const [className] = React.useState(
        props.className
            ? defaultClassName + " " + props.className
            : defaultClassName
    );
    const [isHovered, setIsHovered] = React.useState(hovered);
    return type == "button" ? (
        <button
            className={className}
            title={text}
            onMouseEnter={() => {
                setIsHovered(hovered ? false : true);
            }}
            onMouseLeave={() => {
                setIsHovered(hovered ? true : false);
            }}
            onClick={onClick}
        >
            {text}
            <div
                className={`absolute -z-20 right-[0.30rem] top-[0.30rem] border-2 border-dashed rounded-md transition-all duration-300 ease-in-out ${
                    !isHovered
                        ? "border-transparent w-7/12 h-1"
                        : `border-${color} w-full h-full`
                }`}
            ></div>
        </button>
    ) : (
        <Link
            href={href}
            className={className}
            title={text}
            onMouseEnter={() => {
                setIsHovered(hovered ? false : true);
            }}
            onMouseLeave={() => {
                setIsHovered(hovered ? true : false);
            }}
            onClick={onClick}
        >
            {text}
            <div
                className={`absolute -z-20 right-[0.30rem] top-[0.30rem] border-2 border-dashed rounded-md transition-all duration-300 ease-in-out ${
                    !isHovered
                        ? "border-transparent w-7/12 h-1"
                        : `border-${color} w-full h-full`
                }`}
            ></div>
        </Link>
    );
}
