import { Card } from "@/components/ui/card";

import { useTranslations } from "next-intl";

interface DataProps {
  image: string;
  description: string;
  descriptionEs: string | null;
  source: string;
  date: string | null;
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
  locale,
}: HomeCardProps) => {
  const t = useTranslations("Index.homeCard");

  if (!data) return null;

  return (
    <Card className="flex flex-row col-span-1 bg-purple-500 rounded-3xl border-[1vh] border-white overflow-hidden max-lg:min-h-[20vh]">
      <img className="max-lg:max-w-[50%] lg:max-w-[13vw] aspect-video object-cover" src={data.image} />
        <div className=" flex flex-col px-[2vh] py-[1.5vh] gap-8 justify-between">
          <p className="text-[1.6vh] max-lg:text-[1.5vh]">
            {locale === "en" && (data.description)}
            {locale === "es" && (data.descriptionEs)}
          </p>
          <div className="w-full flex justify-between text-[1.6vh] max-lg:text-[1.5vh]">
          <p>
            <a
              href={data.source}
              target="_blank"
              className="border-b border-black hover:border-green-500 hover:text-green-500"
            >
              {t(`${callToAction}`)}
            </a>
          </p>
          <p>{t(`${cardType}`)}</p>
        </div>
      </div>
    </Card>
  );
};
