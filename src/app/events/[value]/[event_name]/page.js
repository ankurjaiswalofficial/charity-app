import React from "react";
import BasePage from "@/app/components/base";
import BreadCrumb from "@/app/components/main/components/breadcrumb";
import BlackShadeSection2 from "@/app/components/main/components/blackshade_section2";
import removeUnderscoresAndCapitalize from "@/app/components/utils/capitalizer";
import EventPageSection from "@/app/components/main/components/event_page_section";

export async function getStaticPaths() {
    const readMoreLinksAll = [
        [
            "supporting_hope_a_charity_gala",
            "holiday_donation_drive",
            "education_for_all_campaign",
            "nourish_the_hungry_food_drive",
            "warmth_in_winter_clothing_drive",
            "healthcare_support_initiative",
            "community_renovation_project",
            "crisis_relief_assistance",
        ],
        [
            "empowerment_workshops_series",
            "empowering_rural_education",
            "hope_strides_charity_walkathon",
            "clean_earth_campaign",
            "caring_for_elders",
            "water_for_all_initiative",
            "art_for_a_cause_exhibition",
            "sustainable_farming_initiative",
        ],
        [
            "disaster_relief_support",
            "mental_health_awareness_forum",
            "skill_development_workshops",
            "animal_shelter_support_drive",
            "digital_literacy_drive",
            "food_for_the_underprivileged",
            "community_gardening_project",
        ],
    ];
    const paths = readMoreLinksAll.flatMap((data, value) =>
        data.flatMap((event_name) => ({
            params: {
                value: String(value + 1),
                event_name: event_name.toString(),
            },
        }))
    );

    return {
        paths,
        fallback: false,
    };
}
export default function EventsDetailPage({ params }) {
    const value = params.value;
    const event_name = params.event_name;
    return (
        <BasePage>
            <BreadCrumb
                title={"Our Events"}
                links={[
                    { text: "Events", href: "/events" },
                    { text: `Page ${value}`, href: `/events/${value}` },
                    {
                        text: removeUnderscoresAndCapitalize(event_name),
                        href: `/events/${value}/${event_name}`,
                    },
                ]}
            />
            <div className="w-full flex justify-center items-center">
                <EventPageSection
                    title={removeUnderscoresAndCapitalize(event_name)}
                />
            </div>
            <BlackShadeSection2 />
        </BasePage>
    );
}
