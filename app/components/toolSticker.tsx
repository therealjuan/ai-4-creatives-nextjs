"use client";

import { useTranslations } from "next-intl";

export const ToolSticker = () => {
  const t = useTranslations("Index.toolSticker");

  return (
    <div>
      <div className="draggable">
        <div className="absolute top-[13vh] right-[15vw] z-1 rotate-[6deg] max-lg:hidden">
          <div
            className="text-[6vh] leading-none text-purple-900 font-[800]"
            id="stickerise"
            data-sticker-text="Palette.fm"
          >
            Palette.fm
          </div>
          <span className="bg-white px-2 py-[0.2rem] ml-[0]">
            {t("lastToolAdded")}
          </span>
        </div>
      </div>
    </div>
  );
};
