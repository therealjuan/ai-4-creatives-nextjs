"use client";

import { ONUTSticker } from "../components/onutSticker";
import { ToolSticker } from "../components/toolSticker";
import { VideoCircleSticker } from "../components/videoCircleSticker";

import Image from 'next/image'

export const Stickers = () => {
    return (
        <div>
            <ToolSticker />
            <ONUTSticker />
            <VideoCircleSticker />
        </div>
    )
}