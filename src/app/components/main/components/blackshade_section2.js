import Image from "next/image";
import React from "react";
import BlogCard from "./blog_card";
import Button from "../../button";

export default function BlackShadeSection2() {
    return (
        <div className="relative flex flex-col justify-center items-center w-full h-96 py-14 gap-4 bg-black bg-opacity-70">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white capitalize text-center">
                Transforming Lives, One Act of{" "}
                <span className="relative text-inherit">
                    Kindness
                    <Image
                        src={"/img/word_marker.png"}
                        alt="word_marker image"
                        width={32 * 16}
                        height={32 * 9}
                        className="w-full h-8 absolute -bottom-5 left-0"
                    />
                </span>{" "}
                at a Time
            </h2>
            <p className="text-sm text-gray-50 text-center w-11/12">
                Real change occurs when our collective efforts unite to create a
                lasting impact.
            </p>
            <Button
                color="red-600"
                hovered
                href="/donate_now"
                text="donate now"
                className="scale-125"
            />
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
