
"use client";

import Image from 'next/image';
import arrowImg from "/public/dropdown-arrow.svg"
import { useTranslations } from 'next-intl';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from 'react';


export const ScrollToTop = () => {

    const t = useTranslations("Index");

    const btnRef = useRef(null);
    const maxScrollForFullView = 500;


    useEffect(() => {
        // Initialize the GSAP animation with the button off the screen
        gsap.set(btnRef.current, { y: '200%' });
        gsap.killTweensOf(btnRef.current);
  
        // Listener for scroll event
        const handleScroll = () => {

            let translateYValue = ((maxScrollForFullView - scrollY) / maxScrollForFullView) * 200;

            // Ensure the value is between 0% and 100%
            translateYValue = Math.min(Math.max(translateYValue, 0), 200);

            // Update the translateY position
            gsap.to(btnRef.current, { y: `${translateYValue}%` });
        };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    return (
        <div>
            <a id="scrollToTop" ref={btnRef} href="#top" className="w-[3.5vh] h-[3.5vh] fixed bottom-[3vh] right-[1.8vw] z-[999] max-lg:right-8 max-lg:bottom-6 float-right mr-0 transition-all duration-500 translate-y-[200%]">
                <Image alt={t('scrollToTop')} src={arrowImg} className='rotate-180 w-full'></Image>
            </a>
        </div>
    )
}