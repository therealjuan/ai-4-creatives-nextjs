"use client";

import qs from "query-string";
import { Category } from "@prisma/client";
import { cn } from "@/lib/utils";
import transformToString from "./transformToString";
import { useRouter, useSearchParams } from "next/navigation";
import {useTranslations} from 'next-intl';
import Image from 'next/image';
import arrowImg from "/public/dropdown-arrow.svg"

interface CategoriesProps {
    data: Category[];
    locale: string
}

export const Categories = ({
    data,
    locale
}: CategoriesProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedCategory = transformToString(searchParams.get("category"));

    const t = useTranslations('Index.categories');
    
    const onClick = (id: string | undefined) => {
        const query = { category: id };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });
        
        router.push(url, { scroll: false });
        scrollToElement('categories');
    }

    const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const query = { category: selectedValue || undefined };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });

        router.push(url, { scroll: false });
    }

    // Function to handle scrolling to a specific element
    const scrollToElement = (elem: string) => {
        const element = document.getElementById(elem);
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // This enables smooth scrolling
            block: 'start', // This will align the top of the element to the top of the viewport
        });
        }
    };

    return (
        <div className="w-full backdrop-blur sticky z-50 top-0 py-[3vh]">
            <div className="text-standard max-w-[95vw] mx-auto mx-auto flex flex-row flex-wrap w-full" id="categories">
                <div className="lg:block hidden">
                <button 
                    onClick={() => onClick(undefined)}
                    className={cn(`
                border-2
                border-green-500 
                text-green-500 
                rounded-md 
                mb-[1vh]
                mr-[1vh] 
                px-[1.25vh]
                pt-[.3vh] 
                pb-[.6vh] 
                text-[1.6vh] 
                hover:bg-green-500 
                hover:border-green-500
                hover:text-black
                `, !selectedCategory ? "bg-green-500 text-black" : "bg-red"
                )}>{t('all')}</button>
                {data.map((item) => (
                        <button 
                                onClick={() => onClick(item.key)}
                                key = {item.key}
                                className={cn(`
                                    border-2 
                                    border-green-500 
                                    rounded-md
                                    mb-[1vh]
                                    mr-[1vh] 
                                    text-[1.6vh]
                                    px-[1.25vh]
                                    pt-[.3vh] 
                                    pb-[.6vh] 
                        `, item.key === selectedCategory ? "bg-green-500 text-black hover:bg-green-500 hover:text-black" : "text-green-500 hover:bg-green-500 hover:text-black")}>
                            {locale === 'en' && item.name}
                            {locale === 'es' && item.nameEs}
                            </button>     
                ))}
                                <button 
                    onClick={() => scrollToElement("newsletter")} className="text-green-500 text-[1.8vh] border-b-1 mx-1 mb-2 border-b border-green-500 hover:text-black hover:border-black">{t("subscribeForUpdates")}</button>            
                    <button className="w-[3.5vh] h-[3.5vh] relative float-right mr-[-1rem]" id="scrollToBottom" onClick={() => scrollToElement("footer")}>
                        <Image alt={t('scrollToBottom')} src={arrowImg} className="w-full" ></Image>
                    </button>
                </div>
                <div className="flex flex-column gap-6 lg:hidden w-full ">
                    <select 
                        id="categories-dropdown" 
                        value={selectedCategory || ""} 
                        onChange={onSelectChange} 
                        className="text-standard-2x flex-grow cursor-pointer appearance-none bg-transparent border-green-500 hover:bg-gray-500 rounded-md border-2 pl-3 pr-12 py-2 text-green-500 focus-visible:outline-green-500 focus-visible:bg-gray-500"
                        style={{ 
                            backgroundPosition: '98% center',
                            backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${arrowImg.src})`
                        }}
                    >
                    <option value="">{t("viewAll")}</option>
                        {data.map((item) => (
                            <option value={item.key} key={item.key}>{item.name}</option>
                        ))}
                    </select>
                    <div className="flex flex-row gap-2 w-full justify-between">
                    <button 
                    onClick={() => scrollToElement("newsletter")} className="bg-transparent text-standard-2x text-green-500 border-b-1 mx-1 mb-2 border-b border-green-500 mt-2 hover:text-black hover:border-black">{t("subscribe")}<span className="max-lg:hidden">{t("forUpdates")}</span></button>
                    <button className="w-[3.5vh] h-[3.5vh] relative self-center float-right mt-1 max-lg:w-[34px]" id="scrollToBottom" onClick={() => scrollToElement("footer")}>
                        <Image alt={t('scrollToBottom')} src={arrowImg} className="w-full" ></Image>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}