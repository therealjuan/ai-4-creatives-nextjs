"use client";

import { ChickenSticker } from "./chickenSticker";
import { useEffect, useState } from 'react';
import { useTranslations } from "next-intl";

interface HeroProps {
    numberOfTools: number
}

export const Hero  = ({ numberOfTools }: HeroProps) => {

    const t = useTranslations("Index");

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
        <div className="">
            <h1 className="mb-0 lg:mb-4 font-black tracking-tight leading-none text-hero dark:text-white w-full max-w-[80%] max-lg:max-w-full pb-6 max-lg:text-[10vh]"
                style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}>{t("hero.dope")}<br/>{numberOfTools} {t("hero.creatives")}</h1>
            <div className="flex max-lg:pb-[6vh]">
                <ChickenSticker/>
                <p className="hero-text text-[2vh] leading-[3vh] lg:ml-4 text-gray-900">{t("hero.catalog")}</p>
            </div>
        </div>
    )
};