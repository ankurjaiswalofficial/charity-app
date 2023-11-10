'use client';
import React from "react";

export default function ProgressBar({ percentage, color, ...props }) {
    return (
        <div className="relative w-full h-2 bg-gray-300 rounded-lg">
            <div
                className={`absolute top-0 left-0 h-full bg-${color} rounded-lg flex justify-end items-center`}
                style={{width: `${percentage}%`}}
            >
                <div className={`h-3 w-3 bg-white rounded-full z-20 flex justify-center items-center border-2 border-l-0 border-${color}`}></div>
            </div>
        </div>
    );
}
