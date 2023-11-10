import Image from "next/image";
import React from "react";
import { Calendar, Calendar2, Calendar2Date, Calendar3, Calendar3Fill, Calendar4, Check2Square, GeoAlt, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import Button from "../../button";

export default function EventPageSection({ title }) {
    return (
        <div className="w-full flex flex-row flex-wrap justify-center items-start p-6">
            <div className="w-full md:max-w-2xl flex flex-col justify-start items-start gap-6 p-6">
                <Image
                    src={"/img/sustainable_farming.jpg"}
                    width={32 * 16}
                    height={32 * 9}
                    alt={"Sample Event Page"}
                    className={
                        "w-full h-auto border border-gray-500 rounded-lg"
                    }
                />
                <h1 className="text-3xl font-bold text-slate-800">
                    Sample Event Page - {title}
                </h1>
                <p className="text-xs text-slate-500">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore reiciendis optio facilis vero, illo laudantium
                    quibusdam quia a repellat consequatur eligendi! Ducimus
                    officia eveniet inventore rerum, nisi sed voluptates hic
                    minima voluptatum, ea corporis ad itaque? Dicta sunt
                    quisquam voluptatibus placeat quibusdam possimus eaque
                    assumenda soluta voluptates voluptatum illo quaerat et
                    laboriosam, dignissimos nemo distinctio dolores autem quos
                    nobis, voluptate facilis dolor ducimus fugiat praesentium?
                    Molestiae earum eos dolorum, nobis sapiente quae possimus,
                    quam vitae illum quia ipsum enim nisi?
                </p>
                <p className="text-xs text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    maxime ducimus, veniam quis recusandae pariatur unde quae
                    iure suscipit, temporibus deleniti molestiae rerum vero
                    deserunt ad cupiditate quaerat! Eos doloremque quasi
                    voluptate, aperiam numquam officiis. Quis cum nulla ratione
                    quia, neque eos impedit expedita inventore nostrum omnis
                    quisquam ducimus suscipit reprehenderit! Eligendi neque
                    magnam ducimus porro inventore quasi placeat dolorum esse
                    earum, nam ad magni ab optio voluptatum a deleniti!
                </p>
                <h3 className="text-lg font-semibold text-slate-800">
                    Descriptive Paragraph Heading
                </h3>
                <p className="text-xs text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui doloribus earum aspernatur natus voluptates et veniam,
                    modi, voluptate dignissimos voluptatibus maiores blanditiis.
                    Ipsa velit iusto quasi enim sapiente, repellat sequi error
                    fugiat. Quas, molestias cupiditate. Ab nesciunt odit placeat
                    tempora?
                </p>
                {[
                    ["Event Feature One", "Event Feature Two"],
                    ["Event Feature Three", "Event Feature Four"],
                    ["Event Feature Five", "Event Feature Six"],
                ].map((e, index) => {
                    return (
                        <div
                            key={String(index) + "_event_detail_value"}
                            className="w-full flex gap-3"
                        >
                            <div className="flex items-center gap-2 w-5/12">
                                <Check2Square className="text-red-600 text-base" />
                                <h5 className="text-xs text-slate-800">
                                    {e[0]}
                                </h5>
                            </div>
                            <div className="flex items-center gap-2 w-5/12">
                                <Check2Square className="text-red-600 text-base" />
                                <h5 className="text-xs text-slate-800">
                                    {e[1]}
                                </h5>
                            </div>
                        </div>
                    );
                })}
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
                        <div className="flex flex-col justify-start items-start w-full">
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
                                className="w-full text-sm placeholder:text-slate-800 text-slate-800 outline-none border-none shadow-inner shadow-slate-800 p-3 bg-transparent rounded-lg"
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

            <div className="flex flex-col justify-center-items-center p-6 flex-grow max-w-lg">
                <div className="flex flex-col justify-start items-start p-6 bg-blue-50 bg-opacity-30 rounded-lg border gap-4">
                    <h3 className="text-xl font-semibold w-11/12 border-l-4 border-red-600 px-2">
                        Event Info
                    </h3>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <Calendar3 className="text-2xl text-red-600" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-semibold text-slate-800">
                                Event Date & Time
                            </h4>
                            <p className="text-xs text-slate-500">
                                30th october, 2022 09:00am - 5:00pm
                            </p>
                        </div>
                    </div>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <GeoAltFill className="text-2xl text-red-600" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-semibold text-slate-800">
                                Event Venue
                            </h4>
                            <p className="text-xs text-slate-500">
                                Sector-37, Greater Kailash, Himalyas
                            </p>
                        </div>
                    </div>
                    <div className="w-11/12 flex flex-row flex-nowrap justify-start items-start gap-4 pl-2">
                        <TelephoneFill className="text-2xl text-red-600" />
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h4 className="text-base font-semibold text-slate-800">
                                Contact Number
                            </h4>
                            <p className="text-xs text-slate-500">
                                (+91) 8766369991
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
