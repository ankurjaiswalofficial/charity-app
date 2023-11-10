import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import BlogCard5 from "../components/main/components/blog_card5";
import Pagination from "../components/main/components/pagination";

export default function CausesPage() {
    const defaultValue = [
        {
            src: "/img/winter_survival_pack.jpg",
            button_color: "yellow-600",
            title: "Winter Survival Pack",
            description:
                "Provides warmth, food, and shelter to those in need during cold winters.",
            raised_value: 6200,
            goal_value: 12500,
        },
        {
            src: "/img/education_kids.jpg",
            button_color: "blue-500",
            title: "Education for All",
            description:
                "Supports underprivileged children's access to quality education and a brighter future.",
            raised_value: 9800,
            goal_value: 15000,
        },
        {
            src: "/img/clean_water.jpg",
            button_color: "teal-400",
            title: "Clean Water Initiative",
            description:
                "Bringing clean and safe drinking water to communities in need around the world.",
            raised_value: 3600,
            goal_value: 10000,
        },
        {
            src: "/img/food_donation.jpg",
            button_color: "green-600",
            title: "Food for the Hungry",
            description:
                "Providing nutritious meals to combat hunger and malnutrition in impoverished areas.",
            raised_value: 7400,
            goal_value: 12000,
        },
        {
            src: "/img/wildlife.jpg",
            button_color: "orange-500",
            title: "Wildlife Conservation",
            description:
                "Protecting endangered species and their habitats for a thriving planet.",
            raised_value: 15200,
            goal_value: 25000,
        },
        {
            src: "/img/mental_health.jpg",
            button_color: "indigo-500",
            title: "Mental Health Support",
            description:
                "Promoting mental well-being and offering assistance to those in need.",
            raised_value: 5400,
            goal_value: 9500,
        },
        {
            src: "/img/refugees.jpg",
            button_color: "red-600",
            title: "Shelter for Refugees",
            description:
                "Providing safe housing and support to displaced individuals and families.",
            raised_value: 8800,
            goal_value: 15000,
        },
        {
            src: "/img/green_energy.jpg",
            button_color: "green-400",
            title: "Green Energy Projects",
            description:
                "Investing in sustainable energy solutions for a greener, cleaner world.",
            raised_value: 4200,
            goal_value: 8000,
        }
    ];
    return (
        <BasePage>
            <BreadCrumb
                title={"Our causes"}
                links={[{ text: "Causes", href: "/causes" }]}
            />
            <div className="flex flex-row flex-wrap justify-evenly items-center p-4 py-12">
                {defaultValue.map((e, index) => {
                    return (
                        <BlogCard5
                            key={String(index) + "_blog_card_5"}
                            src={e.src}
                            button_color={e.button_color}
                            title={e.title}
                            description={e.description}
                            raised_value={e.raised_value}
                            goal_value={e.goal_value}
                        />
                    );
                })}
            </div>
            <Pagination default_locator={"/causes/"} values={["1", "2", "3"]} active={"1"} previous={"#"} forward={"2"} />
        </BasePage>
    );
}
