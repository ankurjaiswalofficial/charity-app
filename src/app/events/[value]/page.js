import React from "react";
import BasePage from "@/app/components/base";
import BreadCrumb from "@/app/components/main/components/breadcrumb";
import Pagination from "@/app/components/main/components/pagination";
import BlackShadeSection2 from "@/app/components/main/components/blackshade_section2";
import BlogCard6 from "@/app/components/main/components/blog_card6";

const defaultValueSet = {
    1: [
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
    ],
    2: [
        {
            src: "/img/empowerment_workshops.jpg",
            button_color: "green-500",
            title: "Empowerment Workshops Series",
            description:
                "Equip individuals with skills and knowledge for a brighter, empowered future.",
            read_more_link: "/empowerment_workshops_series",
            date: "25th JUL, 2024",
            place: "Kanyakumari, Tamil Nadu",
        },
        {
            src: "/img/empowering_rural_education2.jpg",
            button_color: "gray-500",
            title: "Empowering Rural Education",
            description:
                "Support rural education initiatives to brighten young minds and build a better future.",
            read_more_link: "/empowering_rural_education",
            date: "5th AUG, 2024",
            place: "Ratnagiri, Maharashtra",
        },
        {
            src: "/img/charity_walkathon.jpg",
            button_color: "teal-400",
            title: "Hope Strides: Charity Walkathon",
            description:
                "Join us for a walkathon to spread hope and raise funds for a brighter tomorrow.",
            read_more_link: "/hope_strides_charity_walkathon",
            date: "10th SEP, 2024",
            place: "Kochi, Kerala",
        },
        {
            src: "/img/environment_cleanup.jpg",
            button_color: "lime-500",
            title: "Clean Earth Campaign",
            description:
                "Let's work together to clean and preserve our environment for a greener world.",
            read_more_link: "/clean_earth_campaign",
            date: "15th OCT, 2024",
            place: "Rishikesh, Uttarakhand",
        },
        {
            src: "/img/elderly_care_support.jpg",
            button_color: "blue-400",
            title: "Caring for Elders",
            description:
                "Support initiatives for the elderly, ensuring care and companionship for our seniors.",
            read_more_link: "/caring_for_elders",
            date: "20th NOV, 2024",
            place: "Varanasi, U.P.",
        },
        {
            src: "/img/water_for_all.jpg",
            button_color: "cyan-500",
            title: "Water for All Initiative",
            description:
                "Provide access to clean water for communities that need it most.",
            read_more_link: "/water_for_all_initiative",
            date: "25th DEC, 2024",
            place: "Jodhpur, Rajasthan",
        },
        {
            src: "/img/art_for_a_cause.jpg",
            button_color: "purple-400",
            title: "Art for a Cause Exhibition",
            description:
                "An art exhibition where creativity meets philanthropy for a noble cause.",
            read_more_link: "/art_for_a_cause_exhibition",
            date: "1st JAN, 2025",
            place: "Mysuru, Karnataka",
        },
        {
            src: "/img/sustainable_farming.jpg",
            button_color: "amber-500",
            title: "Sustainable Farming Initiative",
            description:
                "Support sustainable farming practices for a greener and healthier tomorrow.",
            read_more_link: "/sustainable_farming_initiative",
            date: "5th FEB, 2025",
            place: "Puducherry",
        },
    ],
    3: [
        {
            src: "/img/disaster_relief.jpg",
            button_color: "red-400",
            title: "Disaster Relief Support",
            description:
                "Aiding victims of natural disasters with essential aid and resources.",
            read_more_link: "/disaster_relief_support",
            date: "10th MAR, 2025",
            place: "Gangtok, Sikkim",
        },
        {
            src: "/img/mental_health_awareness.jpg",
            button_color: "pink-400",
            title: "Mental Health Awareness Forum",
            description:
                "Join us to spread awareness and break the stigma surrounding mental health.",
            read_more_link: "/mental_health_awareness_forum",
            date: "15th APR, 2025",
            place: "Port Blair, Andaman and Nicobar Islands",
        },
        {
            src: "/img/skill_development_workshops.jpg",
            button_color: "orange-400",
            title: "Skill Development Workshops",
            description:
                "Empower individuals with skills and knowledge to create a brighter future.",
            read_more_link: "/skill_development_workshops",
            date: "20th MAY, 2025",
            place: "Gandhinagar, Gujarat",
        },
        {
            src: "/img/animal_shelter_support.jpg",
            button_color: "green-400",
            title: "Animal Shelter Support Drive",
            description:
                "Support shelters and care for animals in need of our love and support.",
            read_more_link: "/animal_shelter_support_drive",
            date: "25th JUN, 2025",
            place: "Agartala, Tripura",
        },
        {
            src: "/img/digital_literacy_drive.jpg",
            button_color: "indigo-400",
            title: "Digital Literacy Drive",
            description:
                "Empower communities with digital skills for a digitally inclusive society.",
            read_more_link: "/digital_literacy_drive",
            date: "1st JUL, 2025",
            place: "Bhopal, Madhya Pradesh",
        },
        {
            src: "/img/food_for_underprivileged.jpg",
            button_color: "red-500",
            title: "Food for the Underprivileged",
            description:
                "Join us in providing meals to those in need. Together, let's fight hunger.",
            read_more_link: "/food_for_the_underprivileged",
            date: "5th AUG, 2025",
            place: "Shillong, Meghalaya",
        },
        {
            src: "/img/community_gardening.jpg",
            button_color: "green-500",
            title: "Community Gardening Project",
            description:
                "Create green spaces and cultivate community gardens for a healthier environment.",
            read_more_link: "/community_gardening_project",
            date: "10th SEP, 2025",
            place: "Imphal, Manipur",
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
export default function PaginationEventsPage({ params }) {
    const defaultValue = defaultValueSet[params.value];
    const value = params.value;
    return (
        <BasePage>
            <BreadCrumb
                title={"Our Events"}
                links={[
                    { text: "Events", href: "/events" },
                    { text: `Page ${value}`, href: `/events/${value}` },
                ]}
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
                            read_more_link={`/events/${value}` + e.read_more_link}
                        />
                    );
                })}
            </div>
            <Pagination
                default_locator={"/events/"}
                values={["1", "2", "3"]}
                active={value}
                previous={value == 1 ? "1#" : +value - 1}
                forward={value == 3 ? "3#" : +value + 1}
            />
            <BlackShadeSection2 />
        </BasePage>
    );
}
