import prismadb from "@/lib/prismadb";

import { Hero } from "../components/hero";
import { HomeCard } from "../components/homeCard";
import { Categories } from "../components/categories"
import { ToolList } from '../components/toollist'
import { BlinkSticker } from "../components/blinkSticker";

const Home = async ({ params }: { params: { locale: string; }}) => {

  const categories = await prismadb.category.findMany();
  const cards = await prismadb.homepageCard.findFirst();
  const pickedTool = await prismadb.pickedTool.findFirst();
  const tools = await prismadb.tool.findMany();

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="px-8 w-full">
        <Hero numberOfTools={tools.length} />
        <div className="grid grid-cols-5 gap-6 mt-6 mb-8 max-w-[1720px] max-[1300px]:grid-cols-2">
            <HomeCard data={cards} callToAction="Source" cardType="Today in AI" />
            <HomeCard data={pickedTool} callToAction="Open" cardType="Today's tool" />
            <BlinkSticker />
        </div>
      </div>
      <Categories data={categories}></Categories>
      <ToolList data={tools} locale={params.locale}></ToolList>
    </main>
  )
}

export default Home;