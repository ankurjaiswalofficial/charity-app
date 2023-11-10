import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import VolunteersSection from "../components/main/components/volunteers_Section";
import VolunteersFormSection from "../components/main/components/volunteers_form_section";
import ReviewSection from "../components/main/components/review";

export default function VolunteersPage() {
    return (
        <BasePage>
            <BreadCrumb
                title={"Our volunteers"}
                links={[{ text: "Volunteers", href: "/volunteers" }]}
            />
            <VolunteersSection />
            <ReviewSection />
            <VolunteersFormSection />
        </BasePage>
    );
}
