"use client";

import Image from 'next/image';
import ONUTLogo from '/public/onut-sticker.svg'

export const ONUTSticker = () => {

        return (
            <div className="absolute top-32 right-12 right-0 z-1 bg-white rounded-full w-36 border-white border-10 transition transition-transform duration-400 hover:rotate-20 hidden lg:block draggable">
                <Image src={ONUTLogo} alt="ONUT" className="w-full" />
            </div>
    )
};
