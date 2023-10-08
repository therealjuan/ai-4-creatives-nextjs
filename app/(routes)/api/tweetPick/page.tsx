import { google } from 'googleapis';
import prismadb from "@/lib/prismadb";
import { HomepageCard } from '@prisma/client';

interface TweetData {
    source:         string,
    date:           string,
    time:           string,
    description:    string,
    descriptionEs:  string
    image:          string,
  
  }
  
  async function uploadCardsData(dataTweets: TweetData[]) {
    await prismadb.homepageCard.deleteMany();
  
    for (const item of dataTweets) {
      const keys = Object.keys(item) as (keyof TweetData)[];
  
      const constructedItem = {
        source:           (item[keys[0]]) ? item[keys[0]] : '',
        date:             (item[keys[1]]) ? item[keys[1]] : '',
        time:             (item[keys[2]]) ? item[keys[2]] : '',
        description:      (item[keys[3]]) ? item[keys[3]] : '',
        descriptionEs:    (item[keys[4]]) ? item[keys[4]] : '',
        image:            (item[keys[5]]) ? item[keys[5]] : '',
      }
  
      await prismadb.homepageCard.create({
        data: constructedItem
      });
    }
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

export default async function Page() {

  const rawData = await fetchGoogleSheetData(`'#TweetWeb'!A2:F2`);

    // Transform rawData to PickedData[] if rawData is defined
    const dataPick: TweetData[] | undefined = rawData?.map(row => ({
      source:           row[0],
      date:             row[1],
      time:             row[2],
      description:      row[3],
      descriptionEs:    row[4],
      image:            row[4],
  }));

  if (dataPick) {
    uploadCardsData(dataPick);
  }
  
  return (
    <div>
      {rawData && rawData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}