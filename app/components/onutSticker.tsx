"use client";

import Image from "next/image";
import ONUTLogo from "/public/onut-sticker.svg";

export const ONUTSticker = () => {
  return (
    <div>
      <div className="draggable">
        <div className="absolute top-32 max-w-[10vw] right-12 right-0 z-1 bg-white rounded-full w-36 border-white border-10 transition transition-transform duration-400 hover:rotate-20 hidden lg:block">
          <Image src={ONUTLogo} alt="ONUT" className="w-full" />
        </div>
      </div>
    </div>
  );
};
