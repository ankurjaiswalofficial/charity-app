"use client";
import Image from "next/image";
import React from "react";

export default function ReviewSection() {
    const defaultQuotes = [
        {
            src: "/img/person1.jpeg",
            data: {
                para: " It's through the combined strength of a community, where diverse talents and contributions come together, that we have the power to make a profound impact on the world. Alone, our impact may be limited, but when society joins forces and works together, our potential for positive change knows no bounds.",
                author: "Alan Trump",
                place: "Jharkhand",
            },
        },
        {
            src: "/img/person7.jpeg",
            data: {
                para: "In a world where individual actions can seem inconsequential, collective collaboration becomes our superpower. When communities, organizations, and people unite with a shared purpose, they can achieve remarkable feats, from social progress to addressing global challenges.",
                author: "Diana Rarchill",
                place: "Punjab",
            },
        },
        {
            src: "/img/person5.jpeg",
            data: {
                para: " The impact of collective contribution ripples far beyond the immediate context. As we come together to make positive changes, we set an example, inspiring others to do the same. Thus, the influence grows, creating a network of transformation.",
                author: "Laura Larsen",
                place: "Uttar Pradesh",
            },
        },
    ];
    const [quote, setQuote] = React.useState(defaultQuotes[0]["data"]);
    const handleQuote = (val) => {
        console.log(val);
        const data = defaultQuotes[val];
        setQuote(data["data"]);
    };
    return (
        <div className="w-full relative flex flex-row flex-wrap justify-center items-center bg-black bg-opacity-90 gap-2 select-none py-3">
            <div className="max-w-sm flex flex-row flex-wrap justify-between items-center gap-4">
                <div className="relative flex items-center justify-center m-4 z-20">
                    <Image
                        src={"/img/person3.jpeg"}
                        alt="person3 image"
                        width={32 * 16}
                        height={32 * 16}
                        className="aspect-square rounded-full w-32 h-32 object-cover"
                    />
                    <span className="absolute -top-2 left-0 w-28 h-28 -z-10 bg-yellow-600 rounded-full"></span>
                    <span className="absolute bottom-0 -left-2 w-28 h-28 -z-10 bg-yellow-600 rounded-full"></span>
                </div>
                <div className="relative flex items-center justify-center m-4 z-20">
                    <Image
                        src={"/img/person7.jpeg"}
                        alt="person7 image"
                        width={32 * 16}
                        height={32 * 16}
                        className="aspect-square rounded-full w-32 h-32 object-cover"
                    />
                    <span className="absolute -top-2 right-0 w-28 h-28 -z-10 bg-green-600 rounded-full"></span>
                    <span className="absolute bottom-0 -right-2 w-28 h-28 -z-10 bg-green-600 rounded-full"></span>
                </div>
                <div className="relative flex items-center justify-center m-4 mx-16 z-20">
                    <Image
                        src={"/img/person1.jpeg"}
                        alt="person1 image"
                        width={32 * 16}
                        height={32 * 16}
                        className="aspect-square rounded-full w-64 h-64 object-cover"
                    />
                    <span className="absolute -top-2 left-0 w-56 h-56 -z-10 bg-red-600 rounded-full"></span>
                    <span className="absolute bottom-0 -left-2 w-56 h-56 -z-10 bg-red-600 rounded-full"></span>
                </div>
                <div className="relative flex items-center justify-center m-4 z-20">
                    <Image
                        src={"/img/person5.jpeg"}
                        alt="person5 image"
                        width={32 * 16}
                        height={32 * 16}
                        className="aspect-square rounded-full w-32 h-32 object-cover"
                    />
                    <span className="absolute -top-2 left-0 w-28 h-28 -z-10 bg-emerald-600 rounded-full"></span>
                    <span className="absolute bottom-0 -left-2 w-28 h-28 -z-10 bg-emerald-600 rounded-full"></span>
                </div>
            </div>
            <div className="max-w-lg flex flex-col justify-start items-start p-3 gap-6 sm:gap-8">
                <h1 className="text-8xl font-bold text-yellow-600">
                    &#10095;&#10095;
                </h1>
                <h3 className="text-gray-400 italic text-xl sm:text-2xl font-semibold w-11/12">
                    {quote.para}
                </h3>
                <div className="flex flex-col justify-start items-start gap-1">
                    <h4 className="text-white text-lg font-bold capitalize">
                        {quote.author}
                    </h4>
                    <h5 className="text-white text-sm font-semibold capitalize">
                        {quote.place}
                    </h5>
                </div>
                <div className="flex flex-row flex-nowrap justify-start items-start gap-4">
                    {defaultQuotes.map((e, index) => {
                        return (
                            <button
                                value={index}
                                key={String(index) + "_image_btn"}
                                onClick={() => handleQuote(index)}
                                className="rounded-full"
                            >
                                <Image
                                    src={e.src}
                                    width={32 * 16}
                                    height={32 * 16}
                                    className="w-12 h-12 rounded-full hover:scale-125 transition-all duration-300"
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
