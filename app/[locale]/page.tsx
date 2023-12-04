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
        <div className="grid grid-cols-3 gap-[2vh] mt-0 lg:mt-[5vh] mb-[2vh] max-[1024px]:grid-cols-1 w-full">
            <HomeCard data={cards} callToAction="source" cardType="todayInAI" locale={params.locale} />
            <HomeCard data={pickedTool} callToAction="open" cardType="todayTool" locale={params.locale} />
            <BlinkSticker />
        </div>
      </div>
      <Categories data={categories} locale={params.locale}></Categories>
      <ToolList data={tools} categories={categories} locale={params.locale}></ToolList>
    </main>
  )
}

export default Home;