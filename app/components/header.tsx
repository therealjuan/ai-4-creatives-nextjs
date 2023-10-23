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
    extra: string;
  }  

export const Header = ({ follow, subscribe, contact, submit, extra, locale }: HeaderProps) => {
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
        <div className="pl-8 pr-8 lg:px-8 py-6">
            <div className="flex flex-wrap justify-between items-center z-9">
                <div className="flex items-center w-[28%] z-[99] max-lg:w-[70%]">
                    <Link href="/" className='w-full'>
                        <Image src={logoAIforCreatives} className="w-full" alt="AI for Creatives"></Image>
                    </Link>
                </div>
                <div className='hidden max-lg:block pt-2 z-[99]'>
                    {!isMenuOpen ? (
                        <Button
                            className='bg-transparent hover:bg-transparent hover:text-green-500 border-0'
                            size="icon"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <HamburgerMenuIcon className='w-10 h-10' />
                        </Button>
                    ) : (
                        <Button
                            className='bg-transparent hover:bg-transparent hover:text-green-500 border-0'
                            size="icon"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Cross1Icon className='w-10 h-10' />
                        </Button>
                    )}
                </div>
                <ul className={`text-standard max-lg:text-2xl max-lg:block flex max-lg:absolute z-5 right-0 items-center max-lg:bg-black max-lg:text-white w-auto gap-6 pl-7 pt-2 pb-4 top-6 
                            max-lg:left-0 max-lg:top-0 max-lg:pt-24 max-lg:h-full max-lg:pl-8 min-lg:py-0 ${isMenuOpen ? 'max-lg:top-0' : 'max-lg:top-[-100%]'}`}>
                    <li className="py-3 max-lg:py-4"><Link className="hover:text-green-500" href="https://twitter.com/ai_forcreatives" target="_blank">{follow}</Link></li>
                    <li className="py-3 max-lg:py-4"><a className="hover:text-green-500" href="mailto:hello@aiforcreativ.es">{contact}</a></li>
                    <li className="py-3 max-lg:py-4"><Link className="flex hover:text-green-500" href="/submit">{submit}<span className='float-right max-lg:ml-1.5 max-lg:block lg:hidden'>{extra}</span></Link></li>
                    { locale == 'en' && ( <li className="py-3 max-lg:py-4"><Link className="hover:text-green-500" href="/" locale="es">ES</Link></li> ) }
                    { locale == 'es' && ( <li className="py-3 max-lg:py-4"><Link className="hover:text-green-500" href="/" locale="en">EN</Link></li> ) }
                    <li className="py-3 max-lg:py-4">
                        <Link href="#" onClick={() => scrollToElement()} className='text-white px-4 py-3 rounded-none bg-black max-lg:p-0 max-lg:h-auto hover:bg-green-500 hover:text-black'>{subscribe}</Link></li>
                </ul>
            </div>
        </div>
    );
};