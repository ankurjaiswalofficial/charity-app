import Image from "next/image";
import React from "react";
import BlogCard2 from "./blog_card2";
import Button from "../../button";

export default function UrgentCausesSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-4 bg-orange-50">
            <div className="flex flex-col justify-start items-start max-w-sm gap-6 p-4 pl-6">
                <h4 className="text-xl font-bold text-red-600 capitalize">
                    Urgent causes
                </h4>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-3xl font-bold text-black capitalize">
                    Helping more than&nbsp;
                    <span className="relative text-inherit">
                        6K Children
                        <Image
                            src={"/img/word_marker.png"}
                            alt="word_marker image"
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-5 left-0"
                        />
                    </span>
                    &nbsp;Every Year
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                    BigHearts is a vast global crowdfunding network that brings
                    together nonprofits, donors, and businesses from around the
                    world. Our mission is to support nonprofits in their crucial
                    work, fostering positive change in diverse communities
                    across the globe.
                </p>
                <Button
                    href="/causes"
                    text="view all causes"
                    hovered
                    color="red-600"
                    className="scale-110"
                />
            </div>
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
    );
}
