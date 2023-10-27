import prismadb from "@/lib/prismadb";

import { Hero } from "../components/hero";
import { HomeCard } from "../components/homeCard";
import { Categories } from "../components/categories"
import { ToolList } from '../components/toollist'
import { BlinkSticker } from "../components/blinkSticker";

const Home = async ({ params }: { params: { locale: string; }}) => {

  const categories = await prismadb.category.findMany({ orderBy: { name: 'asc' }});
  const cards = await prismadb.homepageCard.findFirst();
  const pickedTool = await prismadb.pickedTool.findFirst();
  const tools = await prismadb.tool.findMany();

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-[95vw] mx-auto w-full">
        <Hero numberOfTools={tools.length} />
        <div className="grid grid-cols-5 gap-8 mt-0 lg:mt-2 mb-8 max-w-[85%] max-[1024px]:grid-cols-2 max-[1024px]:max-w-[100%]">
            <HomeCard data={cards} callToAction="source" cardType="todayInAI" locale={params.locale} />
            <HomeCard data={pickedTool} callToAction="open" cardType="todayTool" locale={params.locale} />
            <BlinkSticker />
        </div>
      </div>
      <Categories data={categories} locale={params.locale}></Categories>
      <ToolList data={tools} locale={params.locale}></ToolList>
    </main>
  )
}

export default Home;