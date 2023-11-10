import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import AboutUsSection from "../components/main/components/about_us_section";
import VolunteersSection from "../components/main/components/volunteers_Section";
import BlackShadeSection2 from "../components/main/components/blackshade_section2";
import FaqSection from "../components/main/components/faq_section";

export default function AboutUsPage() {
    return (
        <BasePage>
            <BreadCrumb
                title={"About Us"}
                links={[{ text: "About Us", href: "/about_us" }]}
            />
            <AboutUsSection />
            <VolunteersSection />
            <BlackShadeSection2 />
            <FaqSection />
        </BasePage>
    );
}
