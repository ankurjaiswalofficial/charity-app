import Image from "next/image";
import React from "react";
import BlogCard from "./blog_card";

export default function BlogPostSection() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto py-14 gap-4">
            <h4 className="text-xl font-bold text-red-600 capitalize text-center">
                our blog post
            </h4>
            <h2 className="flex flex-row flex-nowrap whitespace-nowrap justify-center items-center text-3xl font-bold text-black capitalize text-center">
                Latest News &amp;&nbsp;
                <span className="relative text-inherit">
                    Updates
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
                Explore the beauty of enriching other's lives and, in turn,
                finding your own radiant happiness.
            </p>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                <BlogCard
                    src={"/img/happy_girl1.jpg"}
                    date={"01"}
                    month={"Jan"}
                    author={"John Doe"}
                    comment_count={"12"}
                    title={"Brightening Lives"}
                    description={
                        "Discover the transformative power of giving back, where even the smallest acts"
                    }
                    read_more_link={"#brightening_lives"}
                />
                <BlogCard
                    src={"/img/happy_boy1.jpg"}
                    date={"08"}
                    month={"Mar"}
                    author={"Alexandra Rodriguez"}
                    comment_count={"5"}
                    title={"Empowering Young Minds"}
                    description={
                        "Join the journey of empowering underprivileged children towards a brighter future."
                    }
                    read_more_link={"#empowering_young_minds"}
                />
                <BlogCard
                    src={"/img/happy_medical_team.jpg"}
                    date={"25"}
                    month={"Apr"}
                    author={"Michael Johnson"}
                    comment_count={"9"}
                    title={"From Despair to Delight"}
                    description={
                        "Witness the transformation of underprivileged youth from despair to delight."
                    }
                    read_more_link={"#from_despair_to_delight"}
                />
                <BlogCard
                    src={"/img/happy_poor_education.jpg"}
                    date={"12"}
                    month={"May"}
                    author={"Emily Turner"}
                    comment_count={"4"}
                    title={"The Gift of Education"}
                    description={
                        "Explore how the gift of education is building hope for underprivileged children."
                    }
                    read_more_link={"#the_gift_of_education"}
                />
            </div>
        </div>
    );
}
