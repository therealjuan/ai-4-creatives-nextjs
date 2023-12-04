"use client";

import { useState } from 'react';

import GetCategoryFromURL from "./getCategoryFromURL";
import transformToString from "./transformToString";
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import linkImage from '/public/diagonal-arrow-dark.svg'
import FlipButton from './flipButton';
import { ToolCounter } from "./toolcounter";

interface ToolListProps {
    data: ToolType[];
    categories: CategoryType[];
    locale: string
}

interface CategoryType {
    id:         string;
    name:       string;
    nameEs?:    string | null;
    key:        string;
}

interface ToolType {
    categoryName:   string;
    name:           string;
    id:             string;
    source:         string;
    image:          string;
    sourceLink:     string;
    link:           string;
    parent:         string;
    description:    string;
    descriptionEs:  string | null;
    categoryId:     string;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#b4c1cc66" offset="20%" />
      <stop stop-color="#b4c1cc99" offset="50%" />
      <stop stop-color="#b4c1cc66" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#b4c1cc66" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const ToolList = ({
    data,
    categories,
    locale
}: ToolListProps) => {

    const defaultItems = 20;
    const [showAll, setShowAll] = useState(false);

    const t = useTranslations('Index.tools');

    let selectedCategory = GetCategoryFromURL();

     // Filter the data based on selectedCategory
     const filteredData = selectedCategory
     ? data.filter((item: ToolType) => transformToString(item.categoryName) === selectedCategory)
     : data;

    // Decide which data to display based on showAll
    const displayedData = showAll ? filteredData : filteredData.slice(0, defaultItems);

    function getCategoryInLocale(searchCategory: string, locale: string) {
        const foundCategories = categories.find(category => category.name === searchCategory);
        return locale === "en" ? foundCategories?.name : foundCategories?.nameEs;
    }


    return (
        <div>
            <div className="flex flex-row flex-wrap max-w-[95vw] mx-auto">
                <ToolCounter total={filteredData.length} selectedCategory={filteredData[0].categoryName} /> 
            </div>
            {displayedData.map((item, index) => (
            <div className={`gap-2 transition-all ${index < displayedData.length - 1 ? 'border-b-[1px] border-gray-500' : ''}`} key={item.id}>
                <div className="w-full max-w-[100vw] hover:bg-gray-500 transition-all">
                  <div className="mx-[2.5vw] gap-8 py-[6vh] lg:py-[6vh] flex flex-col lg:flex-row">  
                    <div className="lg:w-1/5 flex flex-col justify-space-between self-stretch">
                        <a href={item.link} className='flex gap-2' target="_blank">
                            <span className="font-bold color-white text-[3vh] leading-[3.75vh] product-description-title px-[0.2rem] pb-[0.3rem] hover:text-green-500">{item.name}</span>
                            <Image src={linkImage} alt="In a blink of an AI" className="w-5 pt-[5px]" />
                        </a>
                    </div>
                    <div className="lg:w-1/5 w-full relative cursor-pointer table-row-image">
                        <a href={item.link} className='flex gap-2 image-container aspect-video' target="_blank">
                            <Image
                                src={`https://d3jk7oka2i5czj.cloudfront.net/images/${item.id}.png`} 
                                alt={`${item.name}`} 
                                width="700"
                                height="475"
                                priority={true}
                                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                                className='w-full scale-100 lg:hover:scale-105' />
                        </a>
                    </div>
                    <div className="lg:w-1/2 flex-1">
                        { locale === 'en' && ( <p className='mb-4 text-standard'>{item.description}</p>)}
                        { locale === 'es' && ( <p className='mb-4 text-standard'>{item.descriptionEs}</p>)}
                        { item.sourceLink !== '' && ( <p className='text-standard mb-0 flex flex-col items-baseline gap-1 lg:block lg:gap-0'>{t('firstSeen')} <a href={item.sourceLink} className='text-standard' target="_blank"><span className='text-standard border-black border-b-[1.5px] border-black hover:text-green-500 hover:border-green-500'>{item.source}</span></a></p> ) }
                    </div>
                    <div className="relative flex flex-row gap-4 lg:flex-col items-center lg:items-start lg:gap-6 min-w-[20vw]">
                        <button 
                                className='
                            border-2 
                            border-gray-600
                            text-gray-600 
                            rounded-md
                            mb-0
                            mt-0
                            cursor-default
                            mr-4
                            text-standard
                            px-4 
                            pt-2
                            pb-2
                            lg:pt-1
                            lg:pb-2
                            '>{getCategoryInLocale(item.categoryName, locale)}</button>
                        <FlipButton toolName={item.name} url={item.link}></FlipButton>
                    </div>
                    </div>
                </div>
            </div>
            ))}

            {!showAll && filteredData.length > defaultItems && (
                <div className="text-standard-2x mt-2">
                    <button onClick={() => setShowAll(true)} className="w-full py-6 text-white rounded-none bg-black hover:bg-green-500 hover:text-black p-8">
                        {t("showAllTools")}
                    </button>
                </div>
            )}
        </div>
    )
}