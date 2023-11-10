import Image from "next/image";
import React from "react";
import Button from "../../button";

export default function BlackShadeSection() {
    return (
        <div className="w-full relative max-h-[45rem] h-[35rem] max-[445px]:h-[40rem] overflow-hidden flex justify-center items-center">
            <Image
                src={"/img/large_poor_children_laughing.jpg"}
                alt="large_poor_children_laughing image"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-9 sm:gap-8 bg-black bg-opacity-50 py-4">
                <h1 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-white text-center max-w-3xl">
                    Donation, No Matter The Size, Is{" "}
                    <span className="relative text-inherit">
                        Appreciated
                        <Image src={"/img/word_marker.png"} alt="word_marker image" width={32*16} height={32*9} className="w-full h-8 absolute -bottom-5 left-0"/>
                    </span>
                    .
                </h1>
                <h5 className="text-lg text-white text-center max-w-2xl max-[445px]:px-3">
                    Real transformation occurs when individuals unite, pooling
                    their efforts and resources, to drive meaningful change.
                </h5>
                <div className="w-full flex flex-row flex-nowrap justify-center item-center gap-10">
                    <Button
                        href="/donate_now"
                        text="Donate Now"
                        color="red-600"
                        className="max-[445px]:scale-125 sm:scale-110"
                    />
                    <Button
                        href="/contact_us"
                        text="Contact Us"
                        color="yellow-600"
                        className="max-[445px]:scale-125 sm:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}
