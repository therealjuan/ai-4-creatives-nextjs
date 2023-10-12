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
        <div className="pb-8 lg:pb-8">
            <h1 className="mb-0 lg:mb-4 font-black tracking-tight leading-none text-hero dark:text-white w-full max-w-[80%] max-lg:max-w-full pb-6"
                style={{
                    backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`,
                }}>{t("hero.dope")}<br/>{numberOfTools} {t("hero.creatives")}</h1>
            <div className="flex">
                <ChickenSticker/>
                <p className="text-standard-2x max-w-[55ch] lg:ml-4 text-gray-900 leading-snug">{t("hero.catalog")}</p>
            </div>
        </div>
    )
};