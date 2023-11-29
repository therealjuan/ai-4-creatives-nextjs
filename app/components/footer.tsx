import Image from 'next/image'
import FooterLogo from '/public/footer-logo-mobile-reduced.svg'
import Link from "next/link";

import { useTranslations } from 'next-intl';

export const Footer = () => {

    const t = useTranslations("Index.footer");

    return (
        <footer className="bg-purple-900 py-8 lg:py-20 max-lg:py-[10vh]" id="footer">
            <div className="max-w-[95vw] mx-auto flex flex-col lg:flex-row justify-between w-full gap-8 items-baseline lg:items-end max-lg:gap-[6vh]">
                <div className="lg:w-1/2 h-full flex order-last lg:-order-1 items-end" >
                    <Link href="/" className='self-end'>
                        <Image src={FooterLogo} className="" alt="AI for Creatives"></Image>
                    </Link>
                </div>
                <div className='lg:w-1/2 flex flex-col lg:flex-row gap-4'>
                <div className="flex flex-col w-50 text-standard max-lg:text-2xl mx-auto gap-4 w-full">
                    <Link href="/terms-and-conditions" className="hover:text-white">{t("terms")}</Link>
                    <Link href="/privacy-policy" className="hover:text-white">{t("privacy")}</Link>
                    <Link href="/policy-of-cookies" className="hover:text-white">{t("cookie")}</Link>
                </div>
                <div className="flex flex-col w-50 text-standard max-lg:text-2xl mx-auto gap-4 w-full">
                    <Link href="/submit" className="hover:text-white">{t("submit")}</Link>
                    <Link href="https://twitter.com/ai_forcreatives" target="_blank" className="hover:text-white">{t("followUs")}</Link>
                    <a href="mailto:hello@aiforcreativ.es" className="hover:text-white">{t("contact")}</a>
                </div>
                </div>
            </div>
        </footer>
    )
}