"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';

function transformToString(str: string | null) {
    if (str) {
        str = str
        .replace(/\s*\/\s*|\s*\:\s*/g, ' ')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .toLowerCase();
        return str;
    }
}


const getCategoryFromURL = () => {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const selectedCategory = categoryParam !== null ? transformToString(categoryParam) : null;

    return selectedCategory;
}

export default getCategoryFromURL;