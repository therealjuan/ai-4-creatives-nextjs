"use client";

import Image from "next/image";
import ONUTLogo from "/public/onut-sticker.svg";

export const ONUTSticker = () => {
  return (
    <div>
      <div className="draggable">
        <div className="absolute top-[17vh] w-[7.5vw] h-[7.5vw] right-[3.5vw] z-1 bg-white rounded-full border-white border- transition transition-transform duration-400 hover:rotate-[20deg] hidden lg:block">
          <Image src={ONUTLogo} alt="ONUT" className="w-[85%] m-[7.5%]" />
        </div>
      </div>
    </div>
  );
};
