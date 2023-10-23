import './globals.css'
import type { Metadata } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { GradientBackground } from "../components/gradientBackground";
import { Stickers } from "../components/stickers";
import { NewsletterForm } from '../components/newsletterForm';
import { ONUT } from '../components/ONUT';
import { ScrollToTop } from '../components/scrollToTop';
import Script from 'next/script'
import { Scripts } from '../components/scripts'
import {notFound} from 'next/navigation';
import { useTranslations, useMessages } from 'next-intl';
import {NextIntlClientProvider} from 'next-intl';
import {createTranslator} from 'next-intl';



const locales = ['en', 'es'];

export async function generateMetadata({ params: {locale}}: { params: { locale: string; }}):Promise<Metadata> {


  const messages = (await import(`../../messages/${locale}.json`)).default;

  const t = createTranslator({locale, messages});

  return {
    title: t("Index.title"),
    description: t("Index.description")
  }
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
      <html lang={locale} className='scroll-smooth'>
        <head>
            <Script id="cookieyes" src="https://cdn-cookieyes.com/client_data/09333a7ba76cff02fefce3ab/script.js" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
        </head>
        <body>
            <div id="top"></div>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <GradientBackground />
              <Stickers />
            <Header 
              follow={t("header.follow")} 
              contact={t("header.contact")} 
              submit={t("header.submit")} 
              subscribe={t("header.subscribe")} 
              extra={t("header.extra")}
              locale={locale} 
            />
            <div className='pt-2 lg:pt-[6vh] pb-8 mx-auto flex flex-col'>
                  {children}
            </div>
          </NextIntlClientProvider>
          <div className="flex flex-col lg:flex-row px-8 pt-8 pb-20 gap-8">
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
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ScrollToTop />
          </NextIntlClientProvider>
          <Scripts />
        </body>
      </html>
  )
}