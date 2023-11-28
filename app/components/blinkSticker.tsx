import Image from 'next/image';
import blinkSticker from '/public/blink-sticker.svg'

export const BlinkSticker = () => {
    return (
        <div className="flex content-center h-full col-span-2 lg:col-span-1 relative pl-[2vw] pr-[4vw] items-center">
            <Image src={blinkSticker} alt="In a blink of an AI" className="w-full absolute left-[1vw] max-w-[20vw]" />
        </div>
    )
};
