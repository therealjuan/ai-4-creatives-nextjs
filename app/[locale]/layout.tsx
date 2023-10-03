import './globals.css'
import type { Metadata } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { GradientBackground } from "../components/gradientBackground";
import { ONUTSticker } from "../components/onutSticker";
import { ToolSticker } from "../components/toolSticker";
import { NewsletterForm } from '../components/newsletterForm';
import { ONUT } from '../components/ONUT';
import { VideoCircleSticker } from "../components/videoCircleSticker";
import Script from 'next/script'
import {notFound} from 'next/navigation';
import { useTranslations, useMessages } from 'next-intl';
import {NextIntlClientProvider} from 'next-intl';

const locales = ['en', 'es'];

export const metadata: Metadata = {
  title: "AI for Creatives",
  description: "Fast-track your creativity with this catalog curated by humans. Updated daily. We're stoked for the future of creativity: being original and making new worlds. Change is good, level up!"
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  }
}) {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const t = useTranslations("Index");
  const messages = useMessages();

  return (
      <html lang={locale}>
        <head>
            <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/09333a7ba76cff02fefce3ab/script.js" />
        </head>
        <body>
          <GradientBackground />
          <ToolSticker />
          <ONUTSticker />
          <VideoCircleSticker />
          <Header follow={t("header.follow")} contact={t("header.contact")} submit={t("header.submit")} subscribe={t("header.subscribe")} />
          <div className='pt-10 pb-8 mx-auto flex flex-col'>
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
          </div>
          <div className="grid grid-cols-2 px-8 pt-8 pb-20 gap-8">
            <NewsletterForm 
              stay={t("newsletter.stay")} 
              toolbox={t("newsletter.toolbox")} 
              join={t("newsletter.join")} 
              placeholder={t("newsletter.placeholder")}
              subscribe={t("newsletter.subscribe")} 
              thank={t("newsletter.thank")} />
            <ONUT 
              openFor={t("onut.openFor")} 
              collaborations={t("onut.collaborations")} 
              artCommissions={t("onut.artCommissions")} 
              optimism={t("onut.optimism")} 
              humans={t("onut.humans")} 
              catalog={t("onut.catalog")} 
              mission={t("onut.mission")} />
          </div>
          <Footer />
        </body>
      </html>
  )
}