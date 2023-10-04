import { google } from 'googleapis';
import prismadb from "@/lib/prismadb";
import { Tool, Category, HomepageCard, PickedTool } from '@prisma/client';


// Function to fetch data from Google Sheets
async function fetchGoogleSheetData(rangeSheet: string) {

  const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY || '{privateKey: null} ');

  // const auth = new google.auth.GoogleAuth({
  //     scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  //     projectId: process.env.GOOGLE_PROJECT_ID,
  //     credentials: {
  //       private_key: privateKey,
  //       client_email: process.env.GOOGLE_CLIENT_EMAIL
  //     }
  // });
  // const authToken = auth.getClient();
  
  // const sheets = google.sheets({ version: 'v4', authToken });
  // const response = await sheets.spreadsheets.values.get({
  //   spreadsheetId: process.env.SHEET_ID,
  //   range: rangeSheet
  // });
  // return response.data.values;
  return privateKey;
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
      descriptionEs:  string,
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
        await prismadb.tool.create({
          data: toolData
        });
      } else {
        await prismadb.tool.update({
          where: { id: transformString(item["name"]) },
          data: toolData
        });
      } 
    }
}

async function uploadToolsDataTranslation(dataTools: DataTool[]) {
  // let item = dataTools[0];

  // console.log(item["name"]);
  // console.log(transformString(item[1]));

  // for (const item of dataTools2) { 
    
    // const categoryName = item["category"];
    // const existingCategory = await prismadb.category.findMany({
    //   where: { key: transformString(categoryName) }
    // });

    // console.log(existingCategory);
    // const existingTool = await prismadb.tool.findMany({
    //   where: { id: transformString(item[1]) }
    // });

    // console.log(existingTool);
    // let toolData = {
    //   id:             transformString(item["id"]),
    //   name:           item["name"], 
    //   link:           item["link"],
    //   parent:         (item["parent"]) ? item["parent"] : '',
    //   description:    item["description"],
    //   esRevisado:     item["esRevisado"],
    //   source:         (item["source"]) ? item["source"] : '',
    //   sourceLink:     (item["sourceLink"]) ? item["sourceLink"] : '',
    //   image:          '',
    //   categoryName:   '',
    //   categoryId:     ''
    // }

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
      
    //   console.log(toolData);
    //   if (existingTool.length === 0) {
    //     await prismadb.tool.create({
    //       data: toolData
    //     });
    //   } else {
    //     await prismadb.tool.update({
    //       where: { id: transformString(item["name"]) },
    //       data: toolData
    //     });
    //   } 
    // }
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
  const dataTools = await fetchGoogleSheetData(`'#GlossaryAI'!A2:H`);
  const dataPick = await fetchGoogleSheetData(`'#PickWeb'!A2:D`);

  // uploadPickedTool(dataPick);
  // uploadCardsData(dataTweets);
  // uploadToolsData(dataTools);
  uploadToolsDataTranslation(dataTools);
  return (
    <div>
      {/* {dataTools && dataTools.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}