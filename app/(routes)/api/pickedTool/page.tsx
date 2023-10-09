import { google } from 'googleapis';
import prismadb from "@/lib/prismadb";
import { PickedTool } from '@prisma/client';


interface PickedData {
  image:          string,
  description:    string,
  descriptionEs:  string,
  source:         string,
  date:           string
}

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

  async function uploadPickedTool(dataPick:PickedData[]) {
    await prismadb.pickedTool.deleteMany();
  
    for (const item of dataPick) {
      const keys = Object.keys(item) as (keyof PickedData)[];

      const constructedItem = {
        image:          (item[keys[0]]) ? item[keys[0]] : '',
        description:    (item[keys[1]]) ? item[keys[1]] : '',
        descriptionEs:  (item[keys[2]]) ? item[keys[2]] : '',
        source:         (item[keys[3]]) ? item[keys[3]] : '',
        date:           (item[keys[4]]) ? item[keys[4]] : '',
      }

      console.log(constructedItem);

      await prismadb.pickedTool.create({
        data: constructedItem
      });
    }
  }
  
export default async function Page() {

  // const rawData = await fetchGoogleSheetData(`'#PickWeb'!A2:E2`);

  //   // Transform rawData to PickedData[] if rawData is defined
  //   const dataPick: PickedData[] | undefined = rawData?.map(row => ({
  //     image: row[0],
  //     description: row[1],
  //     descriptionEs: row[2],
  //     source: row[3],
  //     date: row[4],
  // }));

  // if (dataPick) {
  //     uploadPickedTool(dataPick);
  // }
  
  return (
    <div>
      {/* {rawData && rawData.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
    </div>
  );
}