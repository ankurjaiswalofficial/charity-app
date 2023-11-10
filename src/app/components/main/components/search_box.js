import React from "react";
import { Search } from "react-bootstrap-icons";
import SearchBoxContext from "../../contexts/search_bar_context";

export default function SearchBox({ props }) {
    const { open, setOpen } = React.useContext(SearchBoxContext);
    return (
        <div
            class={
                open
                    ? "z-50 absolute w-screen h-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-70"
                    : "hidden"
            }
        >
            <div class="w-full h-full z-60">
                <div
                    class={
                        open
                            ? "z-60 absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black bg-opacity-70"
                            : "hidden"
                    } onClick={() => setOpen(!open)}
                >
                    
                </div>
                <form
                        action="#search"
                        method="get"
                        class="z-80 absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 flex flex-row justify-center items-center rounded-xl overflow-hidden"
                    >
                        <input
                            type="text"
                            name="search_value"
                            id="search_value"
                            class="p-3 text-base text-gray-500"
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                            class="p-3 bg-red-600 text-white text-lg"
                        >
                            <Search className="text-inherit" />
                        </button>
                    </form>
            </div>
        </div>
    );
}
