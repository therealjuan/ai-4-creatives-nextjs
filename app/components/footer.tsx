import Image from 'next/image'
import FooterLogo from '/public/footer-logo-mobile-reduced.svg'
import Link from "next/link";

export const Footer = () => {

    return (
        <div className="bg-purple-900 py-20 px-8">
            <div className="grid grid-cols-2 gap-8">
                <div className="h-full flex">
                    <Link href="/" className='self-end'>
                        <Image src={FooterLogo} className="" alt="AI for Creatives"></Image>
                    </Link>
                </div>
                <div className="grid grid-cols-2 max-w-screen-xl text-xl mx-auto gap-4 w-full">
                    <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
                    <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/policy-of-cookies" className="hover:text-white">Cookie Policy</Link>
                    <Link href="/submit" className="hover:text-white">Submit a tool</Link>
                    <Link href="https://twitter.com/ai_forcreatives" target="_blank" className="hover:text-white">@Follow us</Link>
                    <Link href="mailto:hello@aiforcreativ.es" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </div>
    )
}