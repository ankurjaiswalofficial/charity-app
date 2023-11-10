"use client";
import * as React from "react";
import { InfoCircle, List, Person, Phone, Search } from "react-bootstrap-icons";
import Button from "../button";
import Brand from "../brand";
import SearchBoxContext from "../contexts/search_bar_context";
import Link from "next/link";

export default function Header() {
    const [headerFixed] = React.useState(true);
    const [menuOpen, setMenuOpen] = React.useState(true);
    const { open, setOpen } = React.useContext(SearchBoxContext);
    return (
        <header
            className={`${
                headerFixed ? "sticky top-0 left-0" : ""
            } w-full h-20 max-[745px]:h-16 flex justify-center items-center px-4 z-50 bg-white`}
        >
            <div className="relative w-full max-[745px]:w-11/0.12 h-20 flex flex-row flex-nowrap justify-between max-[900px]:justify-center items-center px-4">
                <Link href={"/"}>
                    <Brand />
                </Link>
                <div className="flex flex-row flex-nowrap flex-grow justify-end items-center px-6 max-[745px]:px-4 h-full">
                    <nav className="flex jusitfy-center items-center gap-12 h-full">
                        <ul className={`${menuOpen ? "flex" : "hidden"} min-[745px]:flex max-[745px]:absolute max-[745px]:w-full max-[745px]:top-20 max-[745px]:left-0 max-[745px]:bg-white max-[745px]:flex-wrap flex-row justify-center items-center gap-6 h-full rounded-lg`}>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/"}>
                                    <h4 className="text-inherit">Home</h4>
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/causes"}>
                                    <h4 className="text-inherit">Causes</h4>
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/events"}>
                                    <h4 className="text-inherit">Events</h4>
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/volunteers"}>
                                    <h4 className="text-inherit">Volunteers</h4>
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/faq"}>
                                    <h4 className="text-inherit">Faq</h4>
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/about_us"}>
                                    <InfoCircle
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </Link>
                            </li>
                            <li className="text-sm hover:text-orange-600">
                                <Link href={"/contact_us"}>
                                    <Phone
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-row justify-center items-center gap-3 h-8">
                            <li className="text-xl">
                                <h4
                                    className="text-inherit cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                >
                                    <Search
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </h4>
                            </li>
                            <li className="w-[0.6px] h-full bg-gray-300 m-2"></li>
                            <li className="hidden min-[745px]:block text-2xl">
                                <Link href={"#account"}>
                                    <h4 className="text-inherit">
                                        <Person
                                            className="text-inherit"
                                            color="rgb(107,114,128)"
                                        />
                                    </h4>
                                </Link>
                            </li>
                            <li className="hidden max-[745px]:block text-2xl">
                                <h4 className="text-inherit" onClick={() => setMenuOpen(!menuOpen)}>
                                    <List
                                        className="text-inherit"
                                        color="rgb(107,114,128)"
                                    />
                                </h4>
                            </li>
                        </ul>
                        <div className="max-[900px]:hidden flex justify-center items-center">
                            <Button
                                href="/donate_now"
                                text="Donate Now"
                                color="red-600"
                            />
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
