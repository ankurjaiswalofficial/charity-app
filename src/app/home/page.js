import React from "react";
import BlackShadeSection from "../components/main/components/blackshade_sections";
import ReviewSection from "../components/main/components/review";
import BlogPostSection from "../components/main/components/blog_post_section";
import BlackShadeSection2 from "../components/main/components/blackshade_section2";
import CausesSection from "../components/main/components/causes_section";
import VolunteersSection from "../components/main/components/volunteers_Section";
import UrgentCausesSection from "../components/main/components/urgent_causes_section";
import AboutUsSection from "../components/main/components/about_us_section";
import ChooseUsSection from "../components/main/components/choose_us_section";
import UpcomingEventsSection from "../components/main/components/upcoming_events_section";
import FaqSection from "../components/main/components/faq_section";
import VolunteersFormSection from "../components/main/components/volunteers_form_section";
import BasePage from "../components/base";

export default function MainHome() {
    return (
        <BasePage>
            <div className="stroke-yellow-600 bg-green-600 border-green-600 from-red-600 from-blue-600 from-purple-600 from-green-600 from-yellow-600  bg-blue-600 border-yellow-600 border-blue-600 border-green-600 bg-purple-600 border-purple-600"></div>
            <BlackShadeSection />
            <UrgentCausesSection />
            <AboutUsSection />
            <ChooseUsSection />
            <CausesSection />
            <UpcomingEventsSection />
            <VolunteersFormSection />
            <VolunteersSection />
            <ReviewSection />
            <FaqSection />
            <BlackShadeSection2 />
            <BlogPostSection />
        </BasePage>
    );
}
