"use client";

import { useTranslations } from 'next-intl';

export const ToolSticker = () => {
    
    const t = useTranslations("Index.toolSticker");

    return (
        <div>
            <div className='draggable'>
                <div className="absolute top-24 right-[24rem] z-1 rotate-[6deg] max-lg:hidden">
                    <div className='text-6xl text-purple-900 font-black' id="stickerise" data-sticker-text="Palette.fm">Palette.fm</div>
                    <span className="bg-white px-2 ml-[-4.2px]">{t("lastToolAdded")}</span>
                </div>
            </div>
        </div>
    )
};