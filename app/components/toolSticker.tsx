"use client";

import { useTranslations } from "next-intl";

export const ToolSticker = () => {
  const t = useTranslations("Index.toolSticker");

  return (
    <div>
      <div className="draggable">
        <div className="absolute top-[12vh] right-[15vw] z-1 rotate-[6deg] max-lg:hidden">
          <div
            className="text-[6vh] leading-none text-purple-900 font-[800]"
            id="stickerise"
            data-sticker-text="Palette.fm"
          >
            Palette.fm
          </div>
          <span className="bg-white px-2 ml-[-4.2px]">
            {t("lastToolAdded")}
          </span>
        </div>
      </div>
    </div>
  );
};
