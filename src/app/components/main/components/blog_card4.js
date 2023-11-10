"use client";
import Image from "next/image";
import React from "react";
import { Clock, Facebook, Google, PinMap, Share, Twitter } from "react-bootstrap-icons";

export default function BlogCard4({
    src,
    title,
    description,
    date,
    place,
    button_color,
    read_more_link="/events",
    ...props
}) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            className={`flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden border-[0.3px] border-gray-200 max-w-xs`}
            onMouseLeave={() => {
                setHovered(false);
            }}
            onMouseEnter={() => {
                setHovered(true);
            }}
        >
            <div className="relative flex justify-center items-center w-full h-auto rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt="Blog Image"
                    width={32 * 16}
                    height={32 * 9}
                    className="w-[380px] h-auto rounded-lg object-cover"
                />
                <div
                    className={
                        hovered
                            ? `z-10 absolute left-0 top-0 w-full h-full bg-gradient-to-t from-${button_color} to-[#00000090] flex flex-col justify-end items-center`
                            : "hidden"
                    }
                >
                    <div
                        className={`flex flex-col justify-center items-center p-7 gap-3 w-full`}
                    >
                        <a href={read_more_link} className="text-white text-xl font-extrabold capitalize">
                            {title}
                        </a>
                        <div className="flex flex-row justify-center items-center gap-4">
                            <h5 className="text-xs font-semibold text-gray-100 flex flex-row flex-nowrap justify-center items-center gap-1"><Clock className="text-inherit" /> {date}</h5>
                            <h5 className="text-xs font-semibold text-gray-100 flex flex-row flex-nowrap justify-center items-center gap-1"><PinMap className="text-inherit" /> {place}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
