import { google } from 'googleapis';
import prismadb from "@/lib/prismadb";
import { Tool, Category, HomepageCard, PickedTool } from '@prisma/client';


// Function to fetch data from Google Sheets
async function fetchGoogleSheetData(rangeSheet: string) {

  const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

  const jwt = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    target
  );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range: rangeSheet
    });

  return response.data.values;
}

function transformString(str: string) {
  if (!str) return '';

  str = str
            .replace(/\s*\/\s*|\s*\:\s*/g, ' ')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .toLowerCase();
  return str;
}

interface DataTool {
      id:             string,
      name:           string,
      link:           string,
      category:       string,
      parent:         string,
      description:    string,
      esRevisado:     string,
      descriptionEs?: string,
      source:         string,
      sourceLink:     string,
      image:          string,
      categoryName:   string,
      categoryId:     string
}

async function uploadToolsData(dataTools: DataTool[]) {
  for (const item of dataTools) {

    const categoryName = item["category"];
    const existingCategory = await prismadb.category.findMany({
      where: { key: transformString(categoryName) }
    });

    const existingTool = await prismadb.tool.findMany({
      where: { id: transformString(item["name"]) }
    });

    let toolData = {
      id:           transformString(item["id"]),
      name:         item["name"], 
      link:         item["link"],
      parent:       (item["parent"]) ? item["parent"] : '',
      description:  item["description"],
      source:       (item["source"]) ? item["source"] : '',
      sourceLink:   (item["sourceLink"]) ? item["sourceLink"] : '',
      image:        '',
      categoryName: '',
      categoryId:   ''
    }

    if (existingCategory.length === 0) {
      console.log(1);
      const createNewCategory = await prismadb.category.create({
        data: {
          name: categoryName, 
          key: transformString(categoryName)
        }
      });

      toolData.categoryId = createNewCategory.id;
      toolData.categoryName = categoryName;

    } else {
      toolData.categoryId = existingCategory[0]["id"];
      toolData.categoryName = existingCategory[0]["name"];

      console.log(toolData);
    }
      
      console.log(toolData);
      if (existingTool.length === 0) {
        // await prismadb.tool.create({
        //   data: toolData
        // });
      } else {
        await prismadb.tool.update({
          where: { id: transformString(item["name"]) },
          data: toolData
        });
      } 
    }
}

async function uploadToolsDataTranslation(dataTools: DataTool[]) {

  // console.log(dataTools);

  for (const item of dataTools) { 
    delete item.descriptionEs;
    
    const keys = Object.keys(item) as (keyof DataTool)[];
    
    let existingCategory;

    const categoryName = item[keys[3]];
    if (typeof categoryName === "string") {
      existingCategory = await prismadb.category.findMany({
        where: { key: transformString(categoryName) }
      });
    }

    const toolName = item[keys[1]] as string;
    const existingTool = await prismadb.tool.findMany({
      where: { id: transformString(toolName) }
    });

    console.log(existingTool);
    let toolData = {
      parent:         (item[keys[0]]) ? item[keys[0]] : '',
      id:             transformString(toolName),
      name:           toolName, 
      link:           (item[keys[2]]) ? item[keys[2]] : '',
      description:    (item[keys[4]]) ? item[keys[4]] : '',
      descriptionEs:  (item[keys[5]]) ? item[keys[5]] : '',
      source:         (item[keys[7]]) ? item[keys[7]] : '',
      sourceLink:     (item[keys[8]]) ? item[keys[8]] : '',
      image:          '',
      categoryName:   '',
      categoryId:     ''
    }

    // if (existingCategory.length === 0) {
    //   console.log(1);
    //   const createNewCategory = await prismadb.category.create({
    //     data: {
    //       name: categoryName, 
    //       key: transformString(categoryName)
    //     }
    //   });

    //   toolData.categoryId = createNewCategory.id;
    //   toolData.categoryName = categoryName;

    // } else {
    //   toolData.categoryId = existingCategory[0]["id"];
    //   toolData.categoryName = existingCategory[0]["name"];
 
    //   console.log(toolData);
    // }
      
      console.log(toolData);
      if (existingTool.length === 0) {
        // await prismadb.tool.create({
        //   data: toolData
        // });
      } else {
        await prismadb.tool.update({
          where: { id: transformString(toolName) },
          data: toolData
        });
      } 
    }
}

interface PickedData {
  image:        string,
  description:  string,
  source:       string,
  date:         string
}

async function uploadPickedTool(dataPick:PickedData[]) {
  await prismadb.pickedTool.deleteMany();

  for (const item of dataPick) {
    console.log(item);

    await prismadb.pickedTool.create({
      data: {
        image: item["image"],
        description: item["description"],
        source: item["source"],
        date: (item["date"]) ? item["date"] : ''
      }
    });
  }
}

interface TweetData {
  callToAction: string,
  source:       string,
  image:        string,
  date:         string,
  time:         string,
  description:  string,
  cardType:     string

}

async function uploadCardsData(dataTweets: TweetData[]) {
  await prismadb.homepageCard.deleteMany();

  for (const item of dataTweets) {
    console.log(item);

    await prismadb.homepageCard.create({
      data: {
        callToAction: '',
        source: item["callToAction"],
        image: item["image"],
        date: (item["date"]) ? item["date"] : '',
        time: (item["time"]) ? item["time"] : '',
        description: item["description"],
        cardType: ''
      }
    });
  }
}

export default async function Page() {

  const dataTweets = await fetchGoogleSheetData(`'#TweetWeb'!A2:F`);
  const dataTools = await fetchGoogleSheetData(`'#GlossaryAI'!A2:I`);
  const dataPick = await fetchGoogleSheetData(`'#PickWeb'!A2:D`);

  // uploadPickedTool(dataPick);
  // uploadCardsData(dataTweets);
  // uploadToolsData(dataTools);
  // uploadToolsDataTranslation(dataTools);
  
  return (
    <div>
      {/* {dataTools && dataTools.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}