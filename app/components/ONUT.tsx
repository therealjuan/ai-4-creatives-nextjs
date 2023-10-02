"use client";

import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export const ONUT = () => {
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
        <div>
            <h2 className="mb-4 text-5xl pb-4 font-black tracking-tight leading-extra w-full" style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}><span className="mr-2">Open for</span><span>
                <Typewriter
  options={{
      autoStart: true,
      strings: ['collaborations', 'art commissions', 'optimism & positive energy', 'meet incredible humans'],
    loop: true,
  }}/>
  </span></h2>
            <p className="mb-6 text-xl">This catalog is brought to you by <a href="https://onut.space" className='border-b-[1.5px] border-black hover:text-green-500 hover:border-green-500' target="_blank">ONUT</a>.</p>
            <p className="mb-4 text-xl">At our core, we&apos;re all about sharing the knowledge wealth! Our mission is to create a platform where you, yes, you! can easily access and contribute to a rapidly expanding collection of valuable information. Join us in the quest for knowledge!</p>
        </div>
    )
}