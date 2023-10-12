import {
    Card
  } from "@/components/ui/card"

  import { useTranslations } from "next-intl";

interface DataProps {
    image:          string;
    description:    string;
    descriptionEs:  string | null;
    source:         string;
    date:           string | null;
  }
  
  interface HomeCardProps {
    data: DataProps | null;
    callToAction: string;
    cardType: string;
    locale: string;
  }

  
export const HomeCard = ({
    data,
    callToAction,
    cardType,
    locale
}: HomeCardProps) => {

    const t = useTranslations("Index.homeCard");
    
    if (!data) return null;

    return (
            <Card className="flex flex-row col-span-2 bg-purple-500 rounded-3xl border-10 border-white overflow-hidden min-h-[21vh] max-lg:min-h-[30vh]">
                <div className="w-full lg:w-1/2" 
                    style={{ 
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    {/* <img src={data.image} alt="John Cleese" className="block md:hidden w-full object-cover home-card lg:aspect-video" width="680" height="480"></img> */}
                </div>
                <div className="w-full lg:w-1/2 flex flex-col px-6 py-4 gap-8 justify-between">
                    { (locale === 'en') && <p className="text-standard">{data.description}</p>}
                    { (locale === 'es') && <p className="text-standard">{data.descriptionEs}</p>}
                    <div className="w-full flex justify-between text-standard">
                        <p><a href={data.source} target="_blank" className="border-b border-black hover:border-green-500 hover:text-green-500">{t(`${callToAction}`)}</a></p>
                        <p>{t(`${cardType}`)}</p>
                    </div>
                </div>
            </Card>
    )
}