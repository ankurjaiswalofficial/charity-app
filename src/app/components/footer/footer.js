import React from "react";
import Brand from "../brand";
import Button from "../button";
import {
    Facebook,
    Google,
    Instagram,
    Linkedin,
    Twitter,
} from "react-bootstrap-icons";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" bg-gray-900 w-full h-fit text-white p-2">
            <div className="flex flex-row flex-wrap justify-evenly max-[445px]:justify-between md:justify-center items-start gap-4 w-full py-10">
                <div className="flex flex-col justify-start items-start px-4 w-fit max-[445px]:w-full gap-2">
                    <Brand size="text-2xl" />
                    <p className="text-xs max-w-sm max-[445px]:w-full">
                    Sustainability and progress hinge on our ability to work together. Be it environmental conservation, economic development, or social justice, a cohesive society is more capable of driving initiatives that have a lasting impact.
                    </p>
                    <div className="flex flex-row flex-nowrap gap-4 my-6">
                        <Button
                            text={<Facebook />}
                            color="gray-700"
                            className="rounded-full py-5 hover:bg-red-600"
                        />
                        <Button
                            text={<Twitter />}
                            color="gray-700"
                            className="rounded-full py-5 hover:bg-red-600"
                        />
                        <Button
                            text={<Instagram />}
                            color="gray-700"
                            className="rounded-full py-5 hover:bg-red-600"
                        />
                        <Button
                            text={<Google />}
                            color="gray-700"
                            className="rounded-full py-5 hover:bg-red-600"
                        />
                        <Button
                            text={<Linkedin />}
                            color="gray-700"
                            className="rounded-full py-5 hover:bg-red-600"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start px-4 gap-4 w-40">
                    <h4 className="text-xl font-bold">About</h4>
                    <ul className="flex flex-col justify-start items-start gap-2 h-full">
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Home</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Donation</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">About Us</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Event</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Features</h4>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start px-4 gap-4 w-40">
                    <h4 className="text-xl font-bold">Quick Links</h4>
                    <ul className="flex flex-col justify-start items-start gap-2 h-full">
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Causes</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">About</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">New campaign</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Site map</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Stories</h4>
                        </li>
                    </ul>
                </div>
                <h1 className="hidden max-[1240px]:block max-[790px]:hidden w-5/12  h-10 bg-transparent text-transparent"></h1>
                <div className="flex flex-col justify-start items-start px-4 gap-4 w-40">
                    <h4 className="text-xl font-bold">Explore</h4>
                    <ul className="flex flex-col justify-start items-start gap-2 h-full">
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Donate</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Campaign</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Fundraise</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Volunteers</h4>
                        </li>
                        <li className="text-sm hover:text-orange-600 ">
                            <h4 className="text-inherit">Sponsors</h4>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start px-4 w-72 max-[445px]:w-full gap-2">
                    <h4 className="text-xl font-bold">Photo Gallery</h4>
                    <div className="flex flex-row flex-nowrap justify-evenly items-center w-full gap-2">
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-row flex-nowrap justify-evenly items-center w-full gap-2">
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                        <Image
                            src="/img/gallery1.jpg"
                            alt="Children playing soccer"
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row border-x-4 border-red-600 bg-gray-950">
                <h4 className="text-sm text-center w-full text-white font-semibold">
                    &copy; Copyright 2023 All Rights Reserved By Jaguar
                </h4>
            </div>
        </footer>
    );
}
