import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import Pagination from "../components/main/components/pagination";
import BlogCard6 from "../components/main/components/blog_card6";
import BlackShadeSection2 from "../components/main/components/blackshade_section2";

export default function EventsPage() {
    const defaultValue = [
        {
            src: "/img/charity_event.jpg",
            button_color: "blue-500",
            title: "Supporting Hope: A Charity Gala",
            description:
                "Join us in making a difference for the needy through compassion and support.",
            read_more_link: "/supporting_hope_a_charity_gala",
            date: "12th NOV, 2023",
            place: "Gr. Noida, U.P.",
        },
        {
            src: "/img/donation_drive.jpg",
            button_color: "yellow-500",
            title: "Holiday Donation Drive",
            description:
                "Spread joy by donating this holiday season. Together, let's bring warmth to those in need.",
            read_more_link: "/holiday_donation_drive",
            date: "15th DEC, 2023",
            place: "Dehradun, Uttarakhand",
        },
        {
            src: "/img/education_for_all.jpg",
            button_color: "purple-500",
            title: "Education for All Campaign",
            description:
                "Empower the future generation through education. Your support shapes a brighter tomorrow.",
            read_more_link: "/education_for_all_campaign",
            date: "20th JAN, 2024",
            place: "Shimla, Himachal Pradesh",
        },
        {
            src: "/img/food_drive.jpg",
            button_color: "orange-500",
            title: "Nourish the Hungry: Food Drive",
            description:
                "Help provide meals to those struggling with hunger. Every meal counts.",
            read_more_link: "/nourish_the_hungry_food_drive",
            date: "25th FEB, 2024",
            place: "Dharavi, Mumbai, Maharashtra",
        },
        {
            src: "/img/winter_clothing_drive.jpg",
            button_color: "teal-500",
            title: "Warmth in Winter: Clothing Drive",
            description:
                "Keep the cold at bay by donating winter clothing. Spread warmth and cheer!",
            read_more_link: "/warmth_in_winter_clothing_drive",
            date: "1st MAR, 2024",
            place: "Leh, Ladakh, Jammu & Kashmir",
        },
        {
            src: "/img/healthcare_support.jpg",
            button_color: "red-500",
            title: "Healthcare Support Initiative",
            description:
                "Provide essential medical aid to those in need. Let's ensure health for all.",
            read_more_link: "/healthcare_support_initiative",
            date: "10th APR, 2024",
            place: "Tirupati, Andhra Pradesh",
        },
        {
            src: "/img/community_renovation.jpg",
            button_color: "pink-500",
            title: "Community Renovation Project",
            description:
                "Join hands to rebuild communities and create better living spaces. Together, we thrive.",
            read_more_link: "/community_renovation_project",
            date: "15th MAY, 2024",
            place: "Jaisalmer, Rajasthan",
        },
        {
            src: "/img/crisis_relief.jpg",
            button_color: "indigo-500",
            title: "Crisis Relief Assistance",
            description:
                "Offer a helping hand to those affected by crises. Together, we restore hope.",
            read_more_link: "/crisis_relief_assistance",
            date: "20th JUN, 2024",
            place: "Guwahati, Assam",
        },
    ];

    return (
        <BasePage>
            <BreadCrumb
                title={"Our Events"}
                links={[{ text: "Events", href: "/events" }]}
            />
            <div className="flex flex-row flex-wrap justify-evenly items-center p-1 sm:p-4 py-12">
                {defaultValue.map((e, index) => {
                    return (
                        <BlogCard6
                            key={String(index) + "_blog_card_6"}
                            date={e.date}
                            place={e.place}
                            src={e.src}
                            button_color={e.button_color}
                            title={e.title}
                            description={e.description}
                            read_more_link={"/events/1" + e.read_more_link}
                        />
                    );
                })}
            </div>
            <Pagination
                default_locator={"/events/"}
                values={["1", "2", "3"]}
                active={1}
                previous={"/1"}
                forward={2}
            />
            <BlackShadeSection2 />
        </BasePage>
    );
}
