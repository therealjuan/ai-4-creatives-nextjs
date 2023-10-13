"use client";

import { ONUTSticker } from "../components/onutSticker";
import { ToolSticker } from "../components/toolSticker";
import { VideoCircleSticker } from "../components/videoCircleSticker";
import { usePathname } from "next/navigation";

export const Stickers = () => {
    const path = usePathname();

    return (
        <div>
            <ToolSticker />
            <ONUTSticker />
            { path !== "/submit" && ( <VideoCircleSticker />) }
        </div>
    )
}