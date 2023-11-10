import Image from "next/image";
import React from "react";
import BlogCard3 from "./blog_card3";

export default function VolunteersSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 gap-4">
            <h4 className="text-xl font-bold text-red-600 capitalize text-center">
                our volunteers
            </h4>
            <h2 className="flex flex-row flex-nowrap whitespace-nowrap justify-center items-center text-3xl font-bold text-black capitalize text-center">
                meet with&nbsp;
                <span className="relative text-inherit">
                    Volunteers
                    <Image
                        src={"/img/word_marker.png"}
                        alt="word_marker image"
                        width={32 * 16}
                        height={32 * 9}
                        className="w-full h-8 absolute -bottom-5 left-0"
                    />
                </span>
            </h2>
            <p className="text-sm text-gray-500 text-center w-11/12">
                Volunteers are the heartbeat of our donation site, breathing
                life into every act of kindness and spreading hope with their
                selfless devotion.
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                <BlogCard3
                    src={"/img/person7.jpeg"}
                    title={"Laura Smith"}
                    button_color={"red-600"}
                />
                <BlogCard3
                    src={"/img/person8.jpeg"}
                    title={"Daniel Mark"}
                    button_color={"green-600"}
                />
                <BlogCard3
                    src={"/img/person6.jpeg"}
                    title={"Laura Larsen"}
                    button_color={"blue-600"}
                />
            </div>
        </div>
    );
}
