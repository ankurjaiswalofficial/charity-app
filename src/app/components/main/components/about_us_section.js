import Image from "next/image";
import React from "react";
import Button from "../../button";
import { CurrencyDollar, EnvelopeHeart } from "react-bootstrap-icons";

export default function AboutUsSection() {
    return (
        <div className="flex flex-row flex-wrap justify-center items-center w-full h-auto py-14 gap-8">
            <div className="relative w-80 h-96 w-sm m-10">
                <div className="w-full h-full rounded-xl border-2 border-dashed border-red-600"></div>
                <Image src={"/img/person6.jpeg"} alt="person6 image" width={32*16} height={32*9} className="w-48 h-48 object-cover rounded-lg absolute -left-5 top-5" />
                <Image src={"/img/person5.jpeg"} alt="person5 image" width={32*16} height={32*9} className="w-32 h-32 object-cover rounded-lg absolute -left-5 -bottom-5" />
                <Image src={"/img/person7.jpeg"} alt="person7 image" width={32*16} height={32*9} className="w-32 h-32 object-cover rounded-lg absolute -right-5 -top-5"/>
                <Image src={"/img/person9.jpeg"} alt="person9 image" width={32*16} height={32*9} className="w-48 h-48 object-cover rounded-lg absolute -right-5 bottom-5" />
                <Image src={"/img/person3.jpeg"} alt="person3 image" width={32*16} height={32*9} className="w-24 h-24 object-cover rounded-lg absolute bottom-36 right-32"/>
            </div>
            <div className="flex flex-col justify-start items-start w-sm sm:max-w-lg gap-7 p-4 pl-6">
                <h4 className="text-xl font-bold text-red-600 capitalize">
                    about us
                </h4>
                <h2 className="flex flex-row flex-wrap justify-start items-start text-4xl font-bold text-black capitalize">
                    Discover What Sets&nbsp;
                    <span className="relative text-inherit">
                        Us Apart
                        <Image
                            src={"/img/word_marker.png"}
                            width={32 * 16}
                            height={32 * 9}
                            className="w-full h-8 absolute -bottom-6 left-0"
                        />
                    </span>
                </h2>
                <p className="text-sm text-gray-500 w-10/12">
                    Our unwavering commitment to impact sets us apart—creating
                    real change, one heartfelt contribution at a time.
                </p>
                <div className="flex flex-col justify-start items-start gap-6">
                    <div className="flex flex-row justify-between gap-3">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-red-600">
                            <CurrencyDollar className="text-3xl text-white" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h1 className="text-gray-800 text-3xl font-bold">
                                689540
                            </h1>
                            <h5 className="text-gray-600 text-sm font-bold">
                                Raised by 63,000 people in one year
                            </h5>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-3">
                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-600">
                            <EnvelopeHeart className="text-3xl text-white" />
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1">
                            <h1 className="text-gray-800 text-3xl font-bold">
                                38500
                            </h1>
                            <h5 className="text-gray-600 text-sm font-bold">
                                Volunteers are available to help you
                            </h5>
                        </div>
                    </div>
                </div>
                <Button
                    href="/causes"
                    text="view all causes"
                    hovered
                    color="red-600"
                    className="ml-3 scale-110"
                />
            </div>
        </div>
    );
}
