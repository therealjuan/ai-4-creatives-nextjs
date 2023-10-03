import Image from 'next/image'
import FooterLogo from '/public/footer-logo-mobile-reduced.svg'
import Link from "next/link";

import { useTranslations } from 'next-intl';

export const Footer = () => {

    const t = useTranslations("Index.footer");

    return (
        <div className="bg-purple-900 py-20 px-8">
            <div className="grid grid-cols-2 gap-8">
                <div className="h-full flex">
                    <Link href="/" className='self-end'>
                        <Image src={FooterLogo} className="" alt="AI for Creatives"></Image>
                    </Link>
                </div>
                <div className="grid grid-cols-2 max-w-screen-xl text-xl mx-auto gap-4 w-full">
                    <Link href="/terms-and-conditions" className="hover:text-white">{t("terms")}</Link>
                    <Link href="/privacy-policy" className="hover:text-white">{t("privacy")}</Link>
                    <Link href="/policy-of-cookies" className="hover:text-white">{t("cookie")}</Link>
                    <Link href="/submit" className="hover:text-white">{t("submit")}</Link>
                    <Link href="https://twitter.com/ai_forcreatives" target="_blank" className="hover:text-white">{t("followUs")}</Link>
                    <Link href="mailto:hello@aiforcreativ.es" className="hover:text-white">{t("contact")}</Link>
                </div>
            </div>
        </div>
    )
}