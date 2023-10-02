"use client";

import qs from "query-string";
import { Category } from "@prisma/client";
import { cn } from "@/lib/utils";

import transformToString from "./transformToString";

import { useRouter, useSearchParams } from "next/navigation";


interface CategoriesProps {
    data: Category[];
}

export const Categories = ({
    data
}: CategoriesProps) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedCategory = transformToString(searchParams.get("category"));

    const onClick = (id: string | undefined) => {
        const query = { category: id };
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true });

        router.push(url, { scroll: false });
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
    const scrollToElement = () => {
        const element = document.getElementById('newsletter');
        if (element) {
        element.scrollIntoView({
            behavior: 'smooth', // This enables smooth scrolling
            block: 'start', // This will align the top of the element to the top of the viewport
        });
        }
    };

    return (
            <div className="px-8 gap-1 mx-auto flex flex-row flex-wrap w-full sticky z-50 top-0 py-4 backdrop-blur">
                <div className="lg:block hidden">
                <button 
                    onClick={() => onClick(undefined)}
                    className={cn(`
                border-2 
                text-xl
                border-green-500 
                text-green-500 
                rounded-md mb-2.5 
                mr-2.5 
                px-3 
                pt-1 
                pb-1.5 
                hover:bg-green-500 
                hover:border-green-500
                hover:text-black
                `, !selectedCategory ? "bg-green-500 text-black" : "bg-red"
                )}>All</button>
                {data.map((item) => (
                        <button 
                                onClick={() => onClick(item.key)}
                                key = {item.key}
                                className={cn(`
                                    border-2 
                                    border-green-500 
                                    rounded-md mb-2.5 
                                    mr-2.5 
                                    text-xl
                                    px-3 
                                    pt-1 
                                    pb-1.5 
                        `, item.key === selectedCategory ? "bg-green-500 text-black hover:bg-green-500 hover:text-black" : "text-green-500 hover:bg-green-500 hover:text-black")}>{item.name}</button>     
                ))}
                                <button 
                    onClick={() => scrollToElement()} className={cn(`text-green-500 bg-transparent text-xl border-b-1 mx-1 mb-2 border-b border-green-500 hover:text-black hover:border-black`)}>Subscribe for updates</button>            
                </div>
                <div className="flex flex-row flex-wrap gap-4 lg:hidden w-full ">
                    <select id="categories-dropdown" value={selectedCategory || ""} onChange={onSelectChange} className="bg-transparent text-xl border-green-500 hover:bg-gray-500 rounded-md border-2 px-3 py-2 text-green-500">
                    <option value="">View all</option>
                        {data.map((item) => (
                            <option value={item.key} key={item.key}>{item.name}</option>
                        ))}
                    </select>
                    <button 
                    onClick={() => scrollToElement()} className={cn(`text-green-500 bg-transparent text-xl border-b-1 mx-1 mb-2 border-b border-green-500 mt-2 hover:text-black hover:border-black`)}>Subscribe for updates</button>            
                </div>
            </div>
    )
}