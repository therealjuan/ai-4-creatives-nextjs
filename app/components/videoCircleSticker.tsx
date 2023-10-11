"use client";

import Image from 'next/image';
import QuoteImg from '/public/sticker-quote.svg'

import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedVideo} from '@cloudinary/react';

export const VideoCircleSticker = () => {


    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
        cloudName: 'ai4creatives'
        }
    }); 

    const medusaVideo = cld.video('assets/medusa');

    return (
        <div>
            <div className='draggable'>
                <div className="absolute top-64 right-24 z-1 bg-white rounded-full w-72 border-white border-[6px] max-lg:hidden">
                    <Image src={QuoteImg} alt="ONUT" className="w-full  animate-[spin_40s_linear_infinite]" />
                    <AdvancedVideo cldVid={medusaVideo} autoPlay playsInline loop muted className="absolute top-0 p-[1.3rem] rounded-full"/>
                </div>
            </div>
        </div>
    )
};