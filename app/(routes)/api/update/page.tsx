import { google } from 'googleapis';
import prismadb from "@/lib/prismadb";
import { Tool, Category } from '@prisma/client';

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


async function uploadToolsDataTranslation(dataTools: DataTool[]) {

  await prismadb.tool.deleteMany();
  // console.log(dataTools);

  for (const item of dataTools) { 
    delete item.descriptionEs;
    
    const keys = Object.keys(item) as (keyof DataTool)[];
    
    let existingCategory;

    const categoryName = item[keys[3]];
    const toolName = item[keys[1]] as string;
    // const existingTool = await prismadb.tool.findMany({
    //   where: { id: transformString(toolName) }
    // });

    let toolData = {
      parent:         (item[keys[0]]) ? item[keys[0]] : '',
      id:             transformString(toolName),
      name:           toolName, 
      link:           (item[keys[2]]) ? item[keys[2]] : '',
      description:    (item[keys[4]]) ? item[keys[4]] : '',
      descriptionEs:  (item[keys[5]]) ? item[keys[5]] : '',
      source:         (item[keys[6]]) ? item[keys[6]] : '',
      sourceLink:     (item[keys[7]]) ? item[keys[7]] : '',
      image:          '',
      categoryName:   '',
      categoryId:     ''
    }

    if (typeof categoryName === "string") {
      existingCategory = await prismadb.category.findMany({
        where: { key: transformString(categoryName) }
      });
    }

    if (existingCategory && existingCategory.length > 0) {
      toolData.categoryId = existingCategory[0]["id"];
      toolData.categoryName = existingCategory[0]["name"];
  } else {
      toolData.categoryId = "";
      toolData.categoryName = "";
  }
      
    console.log(toolData);
    
    await prismadb.tool.create({
      data: toolData as any
    });
        
    }
}

export default async function Page() {

  // const rawData = await fetchGoogleSheetData(`'#GlossaryAI'!A2:I`);

  // const dataPick: DataTool[] | undefined = rawData?.map(row => ({
  //     parent:         row[0],
  //     id:             row[1],
  //     name:           row[2],
  //     link:           row[3],
  //     description:    row[4],
  //     descriptionEs:  row[5],
  //     source:         row[6],
  //     sourceLink:     row[7],
  //     image:          row[8],
  //     categoryName:   row[9],
  //     categoryId:     row[10],
  //     category: '',
  //     esRevisado: ''
  // }));

  // if (dataPick) {
  //   uploadToolsDataTranslation(dataPick);
  // }
  
  return (
    <div>
      {/* {rawData && rawData.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}