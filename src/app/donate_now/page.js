import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import DonateNowFormSection from "../components/main/components/donate_now_section.js";

export default function AboutUsPage() {
    return (
        <BasePage>
            <BreadCrumb
                title={"Donate Now"}
                links={[{ text: "Donate Now", href: "/donate_now" }]}
            />
            <div className="flex justify-center items-center m-5 rounded-xl overflow-hidden">
                <DonateNowFormSection />
            </div>
        </BasePage>
    );
}
