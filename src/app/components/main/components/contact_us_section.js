import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function ContactUsFormSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-16 gap-8 bg-white">
            <div className="relative w-full sm:w-[450px] h-96 m-10">
                <div className="w-full h-full rounded-xl border-2 border-dashed border-red-600"></div>
                <Image
                    src={"/img/contact_us.jpg"}
                    alt="contact_us image"
                    width={32 * 16}
                    height={32 * 9}
                    className="z-10 w-auto h-auto object-cover rounded-lg absolute -left-5 -bottom-5 border"
                />
                <div className="absolute -top-6 right-5 z-20 flex flex-row gap-2 justify-start items-center w-40 h-16 px-2 border-[0.85px] border-gray-300 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-400">
                    <h2 className="text-xl font-semibold text-white p-3 bg-red-600 rounded-lg">3.5</h2>
                    <h5 className="text-sm font-semibold text-slate-950 p-1">Years Experience</h5>
                </div>
                <div className="absolute top-12 left-5 z-20 flex flex-row gap-2 justify-start items-center w-40 h-16 px-2 border-[0.85px] border-gray-300 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-400">
                    <h2 className="text-xl font-semibold text-white p-3 bg-yellow-600 rounded-lg">30+</h2>
                    <h5 className="text-sm font-semibold text-slate-950 p-1">Projects</h5>
                </div>
                <div className="absolute top-32 -right-5 z-20 flex flex-row gap-2 justify-start items-center w-40 h-16 px-2 border-[0.85px] border-gray-300 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-400">
                    <h2 className="text-xl font-semibold text-white p-3 bg-blue-600 rounded-lg">13+</h2>
                    <h5 className="text-sm font-semibold text-slate-950 p-1">Languages Mastery</h5>
                </div>
                <div className="absolute bottom-32 -left-5 z-20 flex flex-row gap-2 justify-start items-center w-44 h-16 px-2 border-[0.85px] border-gray-300 rounded-lg overflow-hidden bg-white shadow-md shadow-gray-400">
                    <h2 className="text-xl font-semibold text-white p-3 bg-green-600 rounded-lg">24/7</h2>
                    <h5 className="text-sm font-semibold text-slate-950 p-1">Availability</h5>
                </div>
            </div>
            <div className="flex flex-col justify-start items-start sm:max-w-lg gap-7 p-4 pl-6 py-8">
                <h4 className="text-xl font-bold text-red-600 capitalize">
                    need help
                </h4>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-bold text-slate-800 capitalize">
                    Get In Touch
                </h2>
                <p className="text-sm text-slate-800 w-10/12">
                    Let your words pave the way for brighter tomorrows. Reach
                    out, and let’s create ripples of change, one heartfelt
                    message at a time.
                </p>
                <form className="flex flex-col justify-start items-start gap-6 w-full">
                    <div className="flex flex-row flex-wrap m-1 w-full gap-7 sm:gap-0">
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label
                                for="volunteer_name"
                                className="text-slate-800 text-xs font-semibold capitalize"
                            >
                                Your Name
                            </label>
                            <input
                                placeholder="Your Name"
                                type="text"
                                name="volunteer_name"
                                id="volunteer_name"
                                className="w-11/12 text-sm text-slate-800 placeholder:text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label
                                for="volunteer_email"
                                className="text-slate-800 text-xs font-semibold capitalize"
                            >
                                Email
                            </label>
                            <input
                                placeholder="Email"
                                type="email"
                                name="volunteer_email"
                                id="volunteer_email"
                                className="w-11/12 text-sm placeholder:text-slate-800 text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap m-1 w-full gap-7 sm:gap-0">
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label
                                for="volunteer_phone_number"
                                className="text-slate-800 text-xs font-semibold capitalize"
                            >
                                Phone Number
                            </label>
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                name="volunteer_phone_number"
                                id="volunteer_phone_number"
                                className="w-11/12 text-sm placeholder:text-slate-800 text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label
                                for="volunteer_dob"
                                className="text-slate-800 text-xs font-semibold capitalize"
                            >
                                Date Of Birth
                            </label>
                            <input
                                placeholder="Date Of Birth"
                                type="date"
                                name="volunteer_dob"
                                id="volunteer_dob"
                                className="w-11/12 text-sm placeholder:text-slate-800 text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap  m-1 w-full">
                        <div className="flex flex-col justify-start items-start w-full">
                            <label
                                for="volunteer_message"
                                className="text-slate-800 text-xs font-semibold capitalize"
                            >
                                Message
                            </label>
                            <textarea
                                placeholder="Write Your Message"
                                rows={4}
                                name="volunteer_message"
                                id="volunteer_message"
                                className="w-11/12 sm:w-full text-sm placeholder:text-slate-800 text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap  m-1 w-full">
                        <Button
                            color="red-600"
                            href="#submit"
                            text="Send us a message"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
