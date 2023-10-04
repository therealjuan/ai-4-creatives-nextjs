import {
    Card
  } from "@/components/ui/card"

  import { useTranslations } from "next-intl";

interface DataProps {
    image: string;
    description: string;
    source: string;
  }
  
  interface HomeCardProps {
    data: DataProps | null;
    callToAction: string;
    cardType: string;
  }

  
export const HomeCard = ({
    data,
    callToAction,
    cardType
}: HomeCardProps) => {

    const t = useTranslations("Index");
    
    if (!data) return null;

    return (
            <Card className="flex flex-row col-span-2 bg-purple-500 rounded-3xl border-10 border-white overflow-hidden">
                <div className="max-w-xs">
                    <img src={data.image} alt="John Cleese" className="h-full object-cover" width="680" height="480"></img>
                </div>
                <div className="flex flex-col gap-8 p-6">
                    <p className="text-xl">{data.description}</p>
                    <div className="w-full flex justify-between">
                        <p><a href={data.source} target="_blank" className="border-b border-black hover:border-green-500 hover:text-green-500">{callToAction}</a></p>
                        <p>{cardType}</p>
                    </div>
                </div>
            </Card>
    )
}