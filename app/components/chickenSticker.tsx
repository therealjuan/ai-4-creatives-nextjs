"use client";

import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Image from 'next/image';
import chickenSticker from '/public/chicken-sticker.svg';

export const ChickenSticker = () => {

    const [props, set] = useSpring(() => ({ x: 0, y: 0, scale: 1 }))

    const bind = useDrag(({ down, movement: [x, y] }) => {
        set({ x: x, y: y })
       })

    return (
        <div className='pr-8 max-lg:hidden relative'>
                <animated.img {...bind()} src={chickenSticker.src} alt="Chicken" className="draggable w-full rotate-[-5deg]" style={props} />
        </div>
    )
};
