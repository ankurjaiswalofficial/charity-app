import Image from "next/image";
import React from "react";
import { ChatQuote, Dot, Person } from "react-bootstrap-icons";

export default function BlogCard({src, date, month, author, comment_count, title, description, read_more_link, ...props}){
  return (
    <div className="flex flex-col justify-center items-center m-3 rounded-lg overflow-hidden shadow-xl shadow-gray-300 border-2 border-gray-200 max-w-sm">
      <div className="relative flex justify-center items-center w-full h-auto">
        <Image
          src={src}
          alt="Blog Image"
          width={32*16}
          height={32*9}
          className="w-[380px] h-[275px]"
        />
        <div className="absolute left-4 bottom-4 bg-white flex flex-col item-center justify-center rounded-lg">
          <span className="text-white uppercase text-base font-extrabold w-full text-center py-2 bg-red-600">{date}</span>
          <span className="text-black uppercase text-base font-semibold w-full text-center px-2">{month}</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start p-7 gap-4">
        <ul className="flex flex-row flex-nowrap justify-start items-start gap-4">
          <li className="flex flex-row flex-nowrap justify-center items-center gap-1 text-sm">
            <Person className="text-red-600 text-inherit" /> <a href="#" className="text-inherit text-gray-600">{author}</a>
          </li>
          <li className="flex flex-row flex-nowrap justify-center items-center gap-1 text-sm">
            <ChatQuote className="text-red-600 text-inherit" /> <a href="#" className="text-inherit text-gray-600">{comment_count} Comment</a>
          </li>
        </ul>
        <h4 className="text-2xl font-semibold capitalize">
          <a href={read_more_link}>{title}</a>
        </h4>
        <p className="text-base text-gray-600">
          {description}...
        </p>
        <a href={read_more_link} className="text-base flex flex-row flex-nowrap justify-start items-center">
          Read More <Dot className="text-red-600 text-xl" />
        </a>
      </div>
    </div>
  );
};
