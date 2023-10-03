'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import shareLoveImg from '/public/share-love.svg';
import shareLinkImg from '/public/share-link.svg';
import shareTwitterImg from '/public/share-twitter.svg';
import shareLinkedinImg from '/public/share-linkedin.svg';
import {useTranslations} from 'next-intl';

interface FlipButtonProps {
    url: string;
    toolName: string;
  }

export default function FlipButton(props: FlipButtonProps) {
    const [flipped, setFlipped] = useState(false);

    const t = useTranslations('Index.tools');

    const handleClick = () => {
      setFlipped(!flipped);
    };

    const copyLink = () => {
        navigator.clipboard.writeText('${props.url}');
    }

    return (
        <button className={`flippable-button h-12 cursor-pointer w-48 text-xs text-white hover:text-black ${flipped ? 'flipped' : ''} bg-black`}>
            <div className="front text-xl absolute top-0 left-0 w-full h-full flex items-center p-4 justify-start hover:bg-green-500 " onClick={handleClick}>{t('shareLove')} <Image src={shareLoveImg} className='absolute' loading="lazy" alt={t('shareLove')} /></div>
            <div className="back absolute top-0 left-0 w-full h-full flex items-center justify-between p-4 px-4 m-0" onClick={handleClick}>
                <a onClick={copyLink} className="tool-link link cursor-pointer" title={t('copyLink')}>
                    <Image src={shareLinkImg} loading="lazy" alt={t('copyLink')} className="w-8" />   
                </a>
                <a href={`https://twitter.com/intent/tweet?text=Found%20this%20dope%20tool%20in%20%40AIforcreatives%20${encodeURIComponent(props.url)}`}  className="tool-link twitter cursor-pointer" target="_blank" title={t('shareX')}>
                    <Image src={shareTwitterImg} loading="lazy" alt={t('shareX')} className="w-8"/>  
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.url}`}  className="tool-link linkedin cursor-pointer" target="_blank" title={t('shareLinkedin')}>
                    <Image src={shareLinkedinImg} loading="lazy" alt={t('shareLinkedin')} className="w-8"/>     
                </a>
            </div>
        </button>
    )
};