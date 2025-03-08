
"use client"

import React from 'react';

const page = ({ text, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-[#CFA500] text-sm md:text-lg hover:text-defaultColor text-white px-1 md:px-3 text-thin py-1  md:py-2 hover:scale-110 inline-block transition-transform duration-200 cursor-pointer" ${className}`}
        >
            {text}
        </button>
    )
}

export default page