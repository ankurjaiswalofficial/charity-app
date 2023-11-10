import Image from "next/image";
import React from "react";
import { ChatQuote, Dot, Person } from "react-bootstrap-icons";
import Button from "../../button";
import ProgressBar from "./progressbar";

export default function BlogCard2({
    src,
    title,
    description,
    raised_value,
    goal_value,
    button_color,
    read_more_link,
    ...props
}) {
    return (
        <div className="flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden shadow-xl shadow-gray-300 border-2 border-gray-200 max-w-sm bg-white">
            <div className="flex justify-center items-center w-full h-auto p-4 rounded-lg">
                <Image
                    src={src}
                    alt="Blog Image"
                    width={32 * 16}
                    height={32 * 9}
                    className="w-[380px] h-[275px] rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-start items-start p-7 pt-0 gap-7">
                <h4 className="text-lg font-semibold capitalize">
                    <a href={read_more_link}>{title}</a>
                </h4>
                <p className="text-base text-gray-600">{description}...</p>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row w-full justify-between">
                        <h5 className="text-sm text-gray-500">
                            Raised: ${raised_value}
                        </h5>
                        <h5 className="text-sm text-gray-500">
                            Goal: ${goal_value}
                        </h5>
                    </div>
                    <ProgressBar percentage={(raised_value / goal_value) * 100} color={button_color} />
                </div>
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
