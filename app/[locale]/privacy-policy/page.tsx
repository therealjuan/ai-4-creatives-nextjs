"use client";

import { useEffect, useState } from 'react';
import {useTranslations} from 'next-intl';

const PrivacyPage = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const t = useTranslations('Privacy');

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
        <div className="px-8">
            <h1 className="mb-8 font-black tracking-tight leading-tight pb-6 text-8xl dark:text-white w-full" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>{t("headline")}</h1>
            <div className="grid grid-cols-8 mb-0">
                <div className="col-span-5 text-xl leading-8">
                    <p className="mb-6">{t("p1a")} https://aiforcreativ.es, {t("pb")}</p>
                    <p className="mb-6">{t("p2")}<a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://www.termsfeed.com/privacy-policy-generator/">Privacy Policy Generator</a>.</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-1")}</h2>
                    <p className="mb-8">{t("p3")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-2")}</h2>
                    <p className="mb-8">{t("p4")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-3")}</h2>
                    <p className="mb-8">{t("p5")}<a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://www.termsfeed.com/privacy-policy-generator/">https://policies.google.com/technologies/ads</a></p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-4")}</h2>
                    <p className="mb-8">{t("p6")}</p>
                    <ul className='list-disc ml-10'>
                        <li><p className="mb-6">Google - <a className="border-b-2 border-black hover:border-green-500 hover:text-green-500" href="https://www.termsfeed.com/privacy-policy-generator/">https://policies.google.com/technologies/ads</a>.</p></li>
                    </ul>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-5")}</h2>
                    <p className="mb-6">{t("p7")}</p>
                    <p className="mb-6">{t("p8")}</p>
                    <p className="mb-8">{t("p9")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-6")}</h2>
                    <p className="mb-6">{t("p10")}</p>
                    <p className="mb-8">{t("p11")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-7")}</h2>
                    <p className="mb-6">{t("p12")}</p>
                    <p className="mb-8">{t("p13")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-8")}</h2>
                    <p className="mb-8">{t("p14")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("h2-9")}</h2>
                    <p className="mb-8">{t("p15")}</p>
                </div>
            </div>
        </div>
     );
}
 
export default PrivacyPage;
