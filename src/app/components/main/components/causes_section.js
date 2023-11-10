import Image from "next/image";
import React from "react";
import BlogCard2 from "./blog_card2";

export default function CausesSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 gap-4">
            <h4 className="text-xl font-bold text-red-600 capitalize text-center">
                our causes
            </h4>
            <h2 className="flex flex-row flex-nowrap whitespace-nowrap justify-center items-center text-3xl font-bold text-black capitalize text-center">
                Our&nbsp;
                <span className="relative text-inherit">
                    Latest Causes
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
                Together, we hold the power to reshape the world, one
                compassionate act at a time.
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                <BlogCard2
                    src={"/img/teaching_poor_children.jpg"}
                    title={"Building Brighter Futures"}
                    description={
                        "Support our mission to build brighter futures for underprivileged children."
                    }
                    raised_value={42368}
                    goal_value={50000}
                    button_color={"yellow-600"}
                    read_more_link={"#building_brighter_futures"}
                />
                <BlogCard2
                    src={"/img/medicating_poor_child.jpg"}
                    title={"Empower and Inspire"}
                    description={
                        "Join us in empowering young minds and inspiring a generation of change-makers."
                    }
                    raised_value={58012}
                    goal_value={65000}
                    button_color={"green-600"}
                    read_more_link={"#empower_and_inspire"}
                />
                <BlogCard2
                    src={"/img/happy_boy1.jpg"}
                    title={"A Ray of Hope"}
                    description={
                        "Witness the incredible journey of underprivileged kids in their pursuit."
                    }
                    raised_value={27984}
                    goal_value={35000}
                    button_color={"blue-600"}
                    read_more_link={"#a_ray_of_hope"}
                />
                <BlogCard2
                    src={"/img/man_helping_poor_kids.jpg"}
                    title={"Dreams Unleashed"}
                    description={
                        "Unleash the dreams of underprivileged children through your generous support."
                    }
                    raised_value={28349}
                    goal_value={30000}
                    button_color={"purple-600"}
                    read_more_link={"#dreams_unleashed"}
                />
            </div>
        </div>
    );
}
