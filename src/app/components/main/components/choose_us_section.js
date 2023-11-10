"use client";
import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function ChooseUsSection() {
    const mission =
        "Our Mission: To brighten the future of underprivileged children by providing access to quality education, nurturing their dreams, and empowering them to break free from the cycle of poverty.";
    const vision =
        "Our Vision: A world where every underprivileged child's potential is unlocked, where education is a universal right, and where poverty and inequality no longer determine a child's destiny.";
    const [paraText, setParaText] = React.useState(mission);
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-96 py-14 gap-4 bg-black bg-opacity-80">
            <h4 className="text-xl font-bold text-red-600 capitalize text-center">
                why choose us
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize text-center">
                Trusted Non Profit Donation{" "}
                <span className="relative text-inherit">
                    Center
                    <Image
                        src={"/img/word_marker.png"}
                        alt="word_marker image"
                        width={32 * 16}
                        height={32 * 9}
                        className="w-full h-8 absolute -bottom-5 left-0"
                    />
                </span>
            </h2>
            <div className="flex flex-row justify-start items-start gap-10 my-3">
                <Button
                    type={"button"}
                    color="red-600"
                    hovered
                    href="#mission"
                    text="mission"
                    className="scale-125"
                    onClick={() => {
                        setParaText(mission);
                    }}
                />
                <Button
                    type={"button"}
                    color="green-600"
                    hovered
                    href="#vision"
                    text="vision"
                    className="scale-125"
                    onClick={() => {
                        setParaText(vision);
                    }}
                />
            </div>
            <p className="text-base font-semibold text-white text-start max-w-xl m-2">
                {paraText}
            </p>
            <Image
                src={"/img/large_poor_children_laughing2.jpg"}
                width={32 * 16}
                height={16 * 9}
                alt="poor_children_bg"
                className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
            />
        </div>
    );
}
