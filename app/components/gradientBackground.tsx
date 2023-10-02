"use client";

import noise from '/public/noise.gif';

export const GradientBackground = () => {
    return (
        <div className="relative z-[-1]">
            <div className="w-full h-full fixed top-0 left-0 gradient-background"></div>
            <div className="fixed z-1 w-full h-full top-0 left-0 right-0 bottom-0 overflow-hidden opacity-[.02] bg-auto bg-left-top" style={{backgroundImage: `url(${noise.src})` }}></div>
        </div>
    )
};