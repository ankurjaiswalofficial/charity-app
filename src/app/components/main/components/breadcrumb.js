import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BreadCrumb({ title, links, ...props }) {
    return (
        <div class="relative w-full h-80 flex flex-col justify-center items-center">
            <Image
                src={"/img/large_poor_children_laughing2.jpg"}
                alt="poor_children_laughing image"
                width={32 * 16}
                height={32 * 9}
                className="w-full h-full object-cover"
            />
            <div class="absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-80 gap-2">
                <h1 class="text-4xl sm:text-5xl md:text-6xl whitespace-nowrap font-bold capitalize text-white">
                    {title}
                </h1>
                <ul class="flex flex-row jusitfy-center items-center gap-2">
                    <li class="flex justify-center items-center capitalize">
                        <Link href={"/"}>
                            <h4 class="text-lg font-semibold text-white">
                                Home
                            </h4>
                        </Link>
                    </li>
                    <li class="flex justify-center items-center capitalize">
                        <h4 class="text-xl font-semibold text-white">//</h4>
                    </li>
                    {links.map((e, index, arr) => {
                        return (
                            <div
                                key={String(index) + "_breadcrumb_item"}
                                class="flex flex-row jusitfy-center items-center gap-2"
                            >
                                <li class="flex justify-center items-center capitalize">
                                    <Link href={e.href}>
                                        <h4 class="text-lg font-semibold text-white">
                                            {e.text}
                                        </h4>
                                    </Link>
                                </li>
                                {arr == links[arr.length - 1] ? (
                                    <li class="flex justify-center items-center capitalize">
                                        <h4 class="text-xl font-semibold text-white">
                                            //
                                        </h4>
                                    </li>
                                ) : null}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
