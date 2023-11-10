import React from "react";
import BasePage from "../components/base";
import BreadCrumb from "../components/main/components/breadcrumb";
import FaqSection from "../components/main/components/faq_section";

export default function FaqPage() {
    const more_faqs = [
        {
            title: "Is my donation tax-deductible?",
            text: "Yes, your donation is tax-deductible. We'll provide you with the necessary documentation for tax purposes.",
        },
        {
            title: "Can I specify where my donation goes?",
            text: "Absolutely! You can choose to support a specific cause or project when making your donation.",
        },
        {
            title: "Are there different ways to donate?",
            text: "Yes, you can donate online, set up recurring donations, or explore other options like donating goods or volunteering your time.",
        },
        {
            title: "How transparent is the donation process?",
            text: "We ensure complete transparency. You can track your donations and see how they are utilized for various projects.",
        },
        {
            title: "Can I donate in someone's honor?",
            text: "Certainly! You can make a donation as a gift in someone's name or memory.",
        },
        {
            title: "What happens if the donation goal isn't met?",
            text: "If a specific goal isn't reached, the funds are allocated to the most relevant cause or project in need of support.",
        },
        {
            title: "Is there a minimum donation amount?",
            text: "No, every contribution, regardless of size, makes a significant impact. Any amount is appreciated.",
        },
        {
            title: "Can I cancel or modify my recurring donation?",
            text: "Yes, you have full control. You can easily modify or cancel your recurring donation at any time through your account.",
        },
        {
            title: "Do you accept donations from outside the country?",
            text: "Certainly! We welcome donations from across the globe. Your support knows no boundaries.",
        },
        {
            title: "What percentage of my donation covers administrative costs?",
            text: "We ensure that the maximum portion of your donation directly funds our causes. Administrative costs are minimized to ensure impact.",
        },
        {
            title: "How can I get involved beyond making a donation?",
            text: "You can volunteer, organize fundraisers, or spread awareness about our mission to make an even greater impact.",
        },
        {
            title: "Is my personal information secure when donating?",
            text: "Absolutely! We prioritize data security and ensure that your information is protected through encryption and secure protocols.",
        },
        {
            title: "Can I view success stories resulting from donations?",
            text: "Yes, we share success stories and the impact achieved through the generous support of donors like you.",
        },
        {
            title: "Can I donate in cryptocurrencies or other non-traditional forms?",
            text: "Yes, we accept donations in various forms, including cryptocurrencies. Contact us for more information on alternative donation methods.",
        },
        {
            title: "Are there opportunities for corporate or business partnerships?",
            text: "Yes, we offer partnership opportunities for businesses seeking to support our cause and make a significant impact.",
        },
        {
            title: "How often are donation reports or updates provided?",
            text: "We provide regular reports and updates, ensuring donors are informed about the impact of their contributions.",
        },
        {
            title: "Is there a way to dedicate my donation to a specific person or cause?",
            text: "Yes, you can dedicate your donation in honor or memory of someone or specify the cause it should support.",
        },
    ];
    return (
        <BasePage>
            <BreadCrumb
                title={"Frequently Asked Questions"}
                links={[{ text: "Faq's", href: "/faq" }]}
            />
            <FaqSection more={more_faqs} large />
        </BasePage>
    );
}
