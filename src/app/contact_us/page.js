import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import ContactUsFormSection from "../components/main/components/contact_us_section";

export default function AboutUsPage() {
    return (
        <BasePage>
            <BreadCrumb
                title={"Contact Us"}
                links={[{ text: "Contact Us", href: "/contact_us" }]}
            />
            <ContactUsFormSection />
        </BasePage>
    );
}
