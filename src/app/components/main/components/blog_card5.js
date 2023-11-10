import Image from "next/image";
import React from "react";
import { ChatQuote, Dot, Person } from "react-bootstrap-icons";
import Button from "../../button";
import ProgressBar from "./progressbar";
import CircularProgressBar from "./circular_progressbar";

export default function BlogCard5({
    src,
    title,
    description,
    raised_value,
    goal_value,
    button_color,
    read_more_link,
    ...props
}) {
    const percentage = raised_value / goal_value;
    return (
        <div className="flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden shadow-xl shadow-gray-300 border-2 border-gray-200 max-w-sm bg-white gap-6">
            <div className="relative flex justify-center items-center w-full h-auto p-4 rounded-lg">
                <Image
                    src={src}
                    alt="Blog Image"
                    width={32 * 16}
                    height={32 * 9}
                    className="w-[380px] h-[275px] rounded-lg"
                />
                <div className="absolute -bottom-5 flex justify-center items-center">
                    <CircularProgressBar
                        color={button_color}
                        percentage={Math.round(percentage * 100)}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-start items-start p-7 pt-0 gap-7">
                <h4 className="text-2xl w-full text-center font-semibold capitalize">
                    <a href={read_more_link}>{title}</a>
                </h4>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row w-full justify-between">
                        <h5
                            className={`text-sm text-${button_color} font-semibold`}
                        >
                            Raised: ${raised_value}
                        </h5>
                        <h5
                            className={`text-sm text-${button_color} font-semibold`}
                        >
                            Goal: ${goal_value}
                        </h5>
                    </div>
                </div>
                <p className="text-base text-gray-600">{description.slice(0, 65)}...</p>
                <div className="flex justify-center items-center w-full">
                    <Button
                        href="/donate_now"
                        text="donate now"
                        hovered
                        color={button_color}
                        className="scale-110"
                    />
                </div>
            </div>
        </div>
    );
}
