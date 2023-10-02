"use client";

import { ChickenSticker } from "./chickenSticker";
import { useEffect, useState } from 'react';

interface HeroProps {
    numberOfTools: number
}

export const Hero  = ({ numberOfTools }: HeroProps) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);


    return (
        <div className="pb-8">
            <h1 className="mb-12 font-black tracking-tight leading-none lg:text-8xl text-7xl dark:text-white w-full max-w-[80%] max-lg:max-w-full"
                style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}>Dope AI Catalog: <br/>{numberOfTools} tools for Creatives</h1>
            <div className="flex">
                
                <ChickenSticker/>
                <p className="text-2xl max-w-xl ml-4 text-gray-900 leading-snug">Fast-track your creativity with this catalog curated by humans. Updated daily. We&apos;re stoked for the future of creativity: being original and making new worlds. Change is good, level up!</p>
            </div>
        </div>
    )
};