import React from "react";
export default function Pagination({
    default_locator,
    values,
    active,
    previous,
    forward,
}) {
    return (
        <div className="w-full h-40 flex flex-row flex-wrap justify-center items-center gap-4">
            <a
                href={default_locator + String(previous)}
                className={`w-16 h-16 rounded-full border-[1.3px] border-slate-300 bg-white text-slate-700 flex justify-center items-center font-semibold text-lg text-inherit hover:bg-red-600 hover:text-white`}
            >
                &lt;
            </a>

            {values.map((e, index) => {
                return (
                    <a
                    key={String(index) + "_pagination_page_link"}
                        href={default_locator + String(e)}
                        className={`w-16 h-16 rounded-full border-[1.3px] border-slate-300 ${
                            active == e
                                ? "bg-red-600 text-white"
                                : "bg-white text-slate-700"
                        } flex justify-center items-center font-semibold text-base hover:bg-red-600 hover:text-white`}
                    >
                        {e}
                    </a>
                );
            })}
            <a
                href={default_locator + String(forward)}
                className={`w-16 h-16 rounded-full border-[1.3px] border-slate-300 bg-white text-slate-700 flex justify-center items-center font-semibold text-lg text-inherit hover:bg-red-600 hover:text-white`}
            >
                &gt;
            </a>
        </div>
    );
}
