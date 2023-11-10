import Image from "next/image";
import React from "react";
import Button from "../../button";
import { CurrencyDollar, EnvelopeHeart } from "react-bootstrap-icons";
import FaqElement from "./faq_element";

export default function FaqSection({ more=null, large=false }) {
    const faq_items = [
        {
            title: "How can I contribute to the charity fund?",
            text: "You can make a difference by donating through our secure platform. Every contribution counts.",
        },
        {
            title: "Where does my donation go?",
            text: "Your donation directly supports underprivileged individuals, providing education, medical aid, and hope for a brighter future.",
        },
        {
            title: "What impact does my donation create?",
            text: "Your contribution transforms lives, offering access to education and vital medical care for those in need.",
        },
    ];
    more ? more.map((e) => faq_items.push(e)) : null;
    return (
        <div className={`flex ${large ? "flex-col" : "flex-row flex-wrap"} justify-center items-center w-full h-auto py-14 gap-8`}>
            <div className={`relative ${large ? "w-96" : "w-80"} h-96 w-sm m-10`}>
                <div className="w-full h-full rounded-xl border-2 border-dashed border-red-600"></div>
                <Image
                    src={"/img/person7.jpeg"}
                    alt="person7 image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-28 h-28 object-cover rounded-lg absolute -right-5 -top-5"
                />
                <Image
                    src={"/img/person9.jpeg"}
                    alt="person9 image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-32 h-32 object-cover rounded-lg absolute -right-5 -bottom-5"
                />
                <Image
                    src={"/img/happy_medical_team.jpg"}
                    alt="happy_medical_team image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-40 h-40 object-cover rounded-lg absolute right-2 bottom-36"
                />
                <Image
                    src={"/img/happy_poor_education.jpg"}
                    alt="happy_poor_education image"
                    width={32 * 16}
                    height={32 * 9}
                    className="w-56 h-80 object-cover rounded-lg absolute -left-5 top-5"
                />
            </div>
            <div className={`flex flex-col justify-start items-start ${large ? "w-11/12" : "w-sm sm:max-w-lg"} gap-7 p-4 pl-6`}>
                <h4 className="text-xl font-bold text-red-600 capitalize">
                    faq
                </h4>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-bold text-black capitalize">
                    How can we be of &nbsp;
                    <span className="relative text-inherit">
                        service to you?
                        <Image
                            src={"/img/word_marker.png"}
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                    Explore our FAQ section for quick answers on donations,
                    impact, and ways to support those in need.
                </p>
                <div className={`flex flex-col justify-start items-start gap-6 ${large ? "h-auto": "h-96"}`}>
                    {faq_items.map((e, index) => {
                        return (
                            <FaqElement
                                key={String(index) + "faq_element"}
                                title={e.title}
                                text={e.text}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
