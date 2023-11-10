"use client";
import React from "react";

export default function CircularProgressBar({ percentage, color, ...props }) {
  // Calculate the strokeDasharray and strokeDashoffset values.
  const size = 90; // Set the size to 96
  const dashArray = 2 * Math.PI * (size / 2);
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="relative w-24 h-24">
      <div className="absolute w-full h-full rounded-full bg-white flex justify-center items-center">
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 5} // Adjusted the radius to fit within the 96x96 container
            fill="none"
            strokeWidth="5"
            stroke="#e0e0e0"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 5} // Adjusted the radius to fit within the 96x96 container
            className={`stroke-${color}`}
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
      </div>
      <div className="absolute w-full h-full rounded-full flex justify-center items-center p-4">
        <div className={`z-20 text-black flex justify-center items-center text-lg font-bold bg-${color} bg-opacity-20 w-full h-full rounded-full`}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}
