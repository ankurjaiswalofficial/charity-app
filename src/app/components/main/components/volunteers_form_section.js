import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function VolunteersFormSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-8 bg-slate-950">
            <div className="relative w-80 sm:w-72 h-96 w-sm m-10">
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
            <div className="flex flex-col justify-start items-start sm:max-w-lg gap-7 p-4 pl-6">
                <h4 className="text-xl font-bold text-red-600 capitalize">
                    our volunteers
                </h4>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-bold text-white capitalize">
                    become a &nbsp;
                    <span className="relative text-inherit">
                        volunteer
                        <Image
                            src={"/img/word_marker.png"}
                            alt="word_marker image"
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-sm text-gray-300 w-10/12">
                    Join our passionate team of volunteers, making a meaningful
                    impact through our donation site. Together, we change lives!
                </p>
                <form className="flex flex-col justify-start items-start gap-6 w-full">
                    <div className="flex flex-row flex-wrap m-1 w-full gap-7 sm:gap-0">
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label for="volunteer_name" className="text-white text-xs font-semibold capitalize">Your Name</label>
                            <input placeholder="Your Name" type="text" name="volunteer_name" id="volunteer_name" className="w-11/12 text-sm text-gray-300 outline-none border-none shadow-inner shadow-white p-3 bg-transparent rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label for="volunteer_email" className="text-white text-xs font-semibold capitalize">Email</label>
                            <input placeholder="Email" type="email" name="volunteer_email" id="volunteer_email" className="w-11/12 text-sm text-gray-300 outline-none border-none shadow-inner shadow-white p-3 bg-transparent rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap m-1 w-full gap-7 sm:gap-0">
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label for="volunteer_phone_number" className="text-white text-xs font-semibold capitalize">Phone Number</label>
                            <input placeholder="Phone Number" type="tel" name="volunteer_phone_number" id="volunteer_phone_number" className="w-11/12 text-sm text-gray-300 outline-none border-none shadow-inner shadow-white p-3 bg-transparent rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-start items-start w-full sm:w-1/2">
                            <label for="volunteer_dob" className="text-white text-xs font-semibold capitalize">Date Of Birth</label>
                            <input placeholder="Date Of Birth" type="date" name="volunteer_dob" id="volunteer_dob" className="w-11/12 text-sm text-gray-300 outline-none border-none shadow-inner shadow-white p-3 bg-transparent rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap  m-1 w-full">
                        <div className="flex flex-col justify-start items-start w-full">
                            <label for="volunteer_message" className="text-white text-xs font-semibold capitalize">Message</label>
                            <textarea placeholder="Write Your Message" rows={4} name="volunteer_message" id="volunteer_message" className="w-11/12 sm:w-full text-sm text-gray-300 outline-none border-none shadow-inner shadow-white p-3 bg-transparent rounded-lg" />
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap  m-1 w-full">
                        <Button color="red-600" href="#submit" text="Send us a message" hovered />
                    </div>
                </form>
            </div>
        </div>
    );
}
