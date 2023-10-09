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
        <div className="pb-8">
            <h1 className="mb-6 font-black tracking-tight leading-none text-8xl lg:text-[12vh] dark:text-white w-full max-w-[90%] max-lg:max-w-full pb-6"
                style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}>{t("hero.dope")}<br/>{numberOfTools} {t("hero.creatives")}</h1>
            <div className="flex">
                <ChickenSticker/>
                <p className="text-2xl lg:text-[2vh] max-w-[50ch] ml-4 text-gray-900 leading-snug">{t("hero.catalog")}</p>
            </div>
        </div>
    )
};