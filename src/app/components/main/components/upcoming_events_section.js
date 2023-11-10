import Image from "next/image";
import React from "react";
import BlogCard2 from "./blog_card2";
import BlogCard4 from "./blog_card4";

export default function UpcomingEventsSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 gap-4">
            <h4 className="text-xl font-bold text-red-600 capitalize text-center">
                our event
            </h4>
            <h2 className="flex flex-row flex-nowrap whitespace-nowrap justify-center items-center text-3xl font-bold text-black capitalize text-center">
                Upcoming&nbsp;
                <span className="relative text-inherit">
                    Event
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
                Stay tuned for our upcoming events, where together, we'll make a
                difference in the lives of the less fortunate.
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center sm:gap-3">
                <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden gap-5 sm:gap-3 m-4 sm:m-0">
                    <BlogCard4
                        src={"/img/medical_camp2.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden gap-6 sm:gap-3 m-4 sm:m-0">
                    <BlogCard4
                        src={"/img/medical_camp1.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                    <BlogCard4
                        src={"/img/medical_camp8.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden gap-6 sm:gap-3 m-4 sm:m-0">
                    <BlogCard4
                        src={"/img/medical_camp4.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                    <BlogCard4
                        src={"/img/medical_camp5.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden gap-6 sm:gap-3 m-4 sm:m-0">
                    <BlogCard4
                        src={"/img/medical_camp6.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                    <BlogCard4
                        src={"/img/medical_camp3.jpg"}
                        button_color={"red-600"}
                        title={"Free medical camp"}
                        date={"12 Dec, 2023"}
                        place={"Muskmelon City"}
                    />
                </div>
            </div>
        </div>
    );
}
