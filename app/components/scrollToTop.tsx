
"use client";

import Image from 'next/image';
import arrowImg from "/public/dropdown-arrow.svg"

import { useTranslations } from 'next-intl';

export const ScrollToTop = () => {

    const t = useTranslations("Index");

    return (
        <div>
            <a href="#top" className="w-10 h-10 fixed bottom-4 right-4 max-lg:right-8 max-lg:bottom-6 float-right mr-0 transition-all duration-500">
                <Image alt={t('scrollToTop')} src={arrowImg} className='rotate-180 w-full'></Image>
            </a>
        </div>
    )
}