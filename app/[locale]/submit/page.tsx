"use client";

import Iframe from 'react-iframe'
import { useEffect, useState } from "react";
import {useTranslations} from 'next-intl';

const SubmitToolPage = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const t = useTranslations('Submit');

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
          setMousePosition({ x: event.clientX, y: event.clientY });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);


    return ( 
        <div className="px-8">
            <div className="grid grid-cols-8 gap-12 mb-0">
                <div className="col-span-8 text-standard leading-8 lg:col-span-4">
                    <h1 className="mb-0 font-black tracking-tight pb-4 text-hero dark:text-white w-full leading-tight" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px` }}>{t("headline")}</h1>
                    <p className="text-xl text-standard mb-2">{t.rich("p1")}</p>
                    <p className="text-xl text-standard mb-20">{t.rich("p2")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("headline2")}</h2>
                    <p className="mb-6">{t("p3")}</p>
                    <h2 className="font-black text-4xl leading-tight mb-6" style={{ backgroundPosition: `${mousePosition.x}px ${mousePosition.y}px`}}>{t("thank")}</h2>
                </div>
                <div className='col-span-8 h-full rounded-lg overflow-hidden lg:col-span-4 md:pt-[3rem]'>
                  <Iframe 
                    className="w-full h-[30rem] lg:h-full rounded-lg"
                    url="https://form.typeform.com/to/uJ8kjXu8?typeform-embed-id=8702186780968308&amp;typeform-embed=embed-widget&amp;typeform-source=aiforcreativ.es&amp;typeform-medium=snippet&amp;typeform-medium-version=next&amp;embed-opacity=100" title="Submit a tool"></Iframe>
                  
                </div> 
            </div>
        </div>
     );
}
 
export default SubmitToolPage;