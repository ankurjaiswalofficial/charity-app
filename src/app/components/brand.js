import React from "react";

export default function Brand({size="text-3xl"}) {
    return (
        <div className="flex justify-center items-center w-fit h-full">
            <h4 className={`font-bold ${size}`}>JAGUAR</h4>
        </div>
    );
}
