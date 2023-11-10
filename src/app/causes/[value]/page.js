import React from "react";
import BasePage from "../../components/base";
import BreadCrumb from "../../components/main/components/breadcrumb";
import BlogCard5 from "../../components/main/components/blog_card5";
import Pagination from "../../components/main/components/pagination";

const defaultValueSet = {
    1: [
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
        },
    ],
    2: [
        {
            src: "/img/healthcare.jpg",
            button_color: "blue-600",
            title: "Health Care Access",
            description:
                "Ensuring quality healthcare services reach underserved communities in need.",
            raised_value: 6100,
            goal_value: 11000,
        },
        {
            src: "/img/arts_youth.jpg",
            button_color: "purple-500",
            title: "Arts for Youth",
            description:
                "Nurturing creativity and talent in young minds through arts education.",
            raised_value: 3100,
            goal_value: 8000,
        },
        {
            src: "/img/empower_women.jpg",
            button_color: "pink-600",
            title: "Empower Women",
            description:
                "Supporting women's education and economic independence for a brighter future.",
            raised_value: 7200,
            goal_value: 13500,
        },
        {
            src: "/img/disaster_relief.jpg",
            button_color: "red-500",
            title: "Disaster Relief Fund",
            description:
                "Providing emergency assistance to communities affected by natural disasters.",
            raised_value: 10500,
            goal_value: 20000,
        },
        {
            src: "/img/tech_education.jpg",
            button_color: "blue-400",
            title: "Tech for Education",
            description:
                "Enhancing access to technology and digital learning tools for students.",
            raised_value: 5800,
            goal_value: 12000,
        },
        {
            src: "/img/rainforest.jpg",
            button_color: "green-600",
            title: "Save the Rainforest",
            description:
                "Preserving vital rainforest ecosystems and protecting endangered species.",
            raised_value: 12500,
            goal_value: 20000,
        },
        {
            src: "/img/veterans.jpg",
            button_color: "indigo-500",
            title: "Veterans' Support",
            description:
                "Providing services and assistance to our nation's veterans in need.",
            raised_value: 9800,
            goal_value: 15000,
        },
        {
            src: "/img/sustainable_farming.jpg",
            button_color: "green-400",
            title: "Sustainable Farming",
            description:
                "Promoting eco-friendly agriculture practices for a sustainable future.",
            raised_value: 6900,
            goal_value: 11000,
        },
    ],
    3: [
        {
            src: "/img/clean_oceans.jpg",
            button_color: "blue-600",
            title: "Clean Oceans Initiative",
            description:
                "Protecting marine life and reducing ocean pollution through conservation efforts.",
            raised_value: 4300,
            goal_value: 8000,
        },
        {
            src: "/img/housing.jpg",
            button_color: "teal-500",
            title: "Housing for All",
            description:
                "Providing safe and affordable housing options for families in need.",
            raised_value: 7600,
            goal_value: 13000,
        },
        {
            src: "/img/lgbtq.jpg",
            button_color: "pink-500",
            title: "Support LGBTQ+ Rights",
            description:
                "Advocating for equality and acceptance of LGBTQ+ individuals worldwide.",
            raised_value: 5100,
            goal_value: 10000,
        },
        {
            src: "/img/space.jpg",
            button_color: "purple-600",
            title: "Space Exploration",
            description:
                "Advancing human knowledge and exploration of outer space and beyond.",
            raised_value: 9900,
            goal_value: 18000,
        },
    ],
};
export async function getStaticPaths() {
    const paths = Object.keys(defaultValueSet).map((value) => ({
        params: { value },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default function PaginationCausesPage({ params }) {
    const defaultValue = defaultValueSet[params.value];
    const value = params.value;
    return (
        <BasePage>
            <BreadCrumb
                title={"Our causes"}
                links={[
                    { text: "Causes", href: "/causes" },
                    { text: `Page ${value}`, href: `/events/${value}` },
                ]}
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
            <Pagination
                default_locator={"/causes/"}
                values={["1", "2", "3"]}
                active={value}
                previous={value == 1 ? "1#" : +value - 1}
                forward={value == 3 ? "3#" : +value + 1}
            />
        </BasePage>
    );
}
