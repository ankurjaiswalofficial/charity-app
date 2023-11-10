import Image from "next/image";
import React from "react";
import {ChevronRight, Clock, GeoAlt, } from "react-bootstrap-icons";

export default function BlogCard6({src, button_color, date, place, title, description, read_more_link, ...props}){
  return (
    <div className="flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden shadow-xl shadow-gray-300 border-2 border-gray-200 max-w-sm">
      <div className="flex justify-center items-center w-full h-auto">
        <Image
          src={src}
          alt="Blog Image"
          width={32*16}
          height={32*9}
          className="w-[380px] h-[275px]"
        />
      </div>
      <div className="flex flex-col justify-start items-start p-7 gap-4">
        <ul className="flex flex-row flex-nowrap justify-start items-start gap-4">
          <li className="flex flex-row flex-nowrap justify-center items-center gap-1 text-xs">
            <Clock className="text-red-600 text-inherit" /> <a href="#" className="text-inherit text-gray-600">{date}</a>
          </li>
          <li className="flex flex-row flex-nowrap justify-center items-center gap-1 text-sm">
            <GeoAlt className="text-red-600 text-inherit" /> <a href="#" className="text-inherit text-gray-600">{place}</a>
          </li>
        </ul>
        <h4 className="text-2xl font-semibold capitalize">
          <a href={read_more_link}>{title}</a>
        </h4>
        <p className="text-base text-gray-600">
          {description}...
        </p>
        <a href={read_more_link} className={`text-base flex flex-row flex-nowrap justify-start items-center m-2 bg-${button_color} text-white p-3 rounded-lg shadow-lg shadow-gray-400 border`}>
          Read More <ChevronRight className="text-white text-xl" />
        </a>
      </div>
    </div>
  );
};
