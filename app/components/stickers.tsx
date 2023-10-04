"use client";

import { ONUTSticker } from "../components/onutSticker";
import { ToolSticker } from "../components/toolSticker";
import { VideoCircleSticker } from "../components/videoCircleSticker";

export const Stickers = () => {
    return (
        <div>
            <ToolSticker />
            <ONUTSticker />
            <VideoCircleSticker />
        </div>
    )
}