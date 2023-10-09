"use client";

import { useState } from 'react';
import Image from 'next/image'
import logoAIforCreatives from '/public/ai-for-creatives-logo.svg'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next-intl/link';
import { Button } from "@/components/ui/button";

interface HeaderProps {
    follow: string;
    subscribe: string;
    contact: string;
    submit: string;
    locale: string;
  }  

export const Header = ({ follow, subscribe, contact, submit, locale }: HeaderProps) => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="px-8 py-2">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className='w-[70vw] max-w-[26rem]'>
                        <Image src={logoAIforCreatives} className="w-full" alt="AI for Creatives"></Image>
                    </Link>
                </div>
                <div className='hidden max-lg:block'>
                    {!isMenuOpen ? (
                        <Button
                            className='bg-transparent hover:bg-transparent hover:text-green-500 border-0'
                            size="icon"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <HamburgerMenuIcon className='w-6 h-6' />
                        </Button>
                    ) : (
                        <Button
                            className='bg-transparent hover:bg-transparent hover:text-green-500 border-0'
                            size="icon"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Cross1Icon className='w-6 h-6' />
                        </Button>
                    )}
                </div>
                <ul className={`max-lg:block flex max-lg:absolute right-0 z-50 items-center max-lg:z-auto max-lg:static max-lg:bg-black max-lg:text-white w-auto gap-6 pl-7 pt-2 pb-4 top-6 
                            max-lg:left-0 max-lg:top-24 max-lg:pl-8 min-lg:py-0 max-lg:absolute max-lg:top-0 text-xl lg:text-[1.6vh] ${isMenuOpen ? 'max-lg:opacity-100' : 'max-lg:opacity-0'}`}>
                    <li className="py-3"><Link className="hover:text-green-500" href="https://twitter.com/ai_forcreatives" target="_blank">{follow}</Link></li>
                    <li className="py-3"><Link className="hover:text-green-500" href="mailto:hello@aiforcreativ.es">{contact}</Link></li>
                    <li className="py-3"><Link className="hover:text-green-500" href="/submit">{submit}</Link></li>
                    { locale == 'en' && ( <li className="py-3"><Link className="hover:text-green-500" href="/" locale="es">ES</Link></li> ) }
                    { locale == 'es' && ( <li className="py-3"><Link className="hover:text-green-500" href="/" locale="en">EN</Link></li> ) }
                    <li className="py-3"><Button size="lg" onClick={() => scrollToElement()} className='text-xl lg:text-[1.6vh] px-4 py-6 rounded-none bg-black max-lg:p-0 max-lg:h-auto hover:bg-green-500 hover:text-black'>{subscribe}</Button></li>
                </ul>
            </div>
        </div>
    );
};