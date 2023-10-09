"use client";

import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

interface ONUTProps {
  openFor: string;
  artCommissions: string;
  collaborations: string;
  optimism: string;
  humans: string;
  catalog: string;
  mission: string;
}  

export const ONUT = ({ openFor, artCommissions, collaborations, optimism, humans, catalog, mission }: ONUTProps) => {
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
        <div className='w-full lg:w-1/2'>
            <h2 className="mb-4 text-5xl pb-4 font-black tracking-tight leading-extra w-full" style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}><span className="mr-2">{openFor}</span><span>
                <Typewriter
  options={{
      autoStart: true,
      strings: [collaborations, artCommissions, optimism, humans],
    loop: true,
  }}/>
  </span></h2>
            <p className="mb-6 text-xl lg:text-[1.6vh]">{catalog} <a href="https://onut.space" className='border-b-[1.5px] border-black hover:text-green-500 hover:border-green-500' target="_blank">ONUT</a>.</p>
            <p className="mb-4 text-xl lg:text-[1.6vh]">{mission}</p>
        </div>
    )
}