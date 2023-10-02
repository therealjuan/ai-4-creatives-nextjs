import Image from 'next/image';
import blinkSticker from '/public/blink-sticker.svg'

export const BlinkSticker = () => {
    return (
        <div className="flex content-center h-full max-w-xs">
            <Image src={blinkSticker} alt="In a blink of an AI" className="w-full" />
        </div>
    )
};
