"use server";

// const pushToSheet = async (sheetId, range, values, apiKey) => {
//   const sheets = google.sheets({ version: "v4" });

//   const request = {
//     spreadsheetId: sheetId,
//     range: range, // Example: 'Sheet1!A1:B2'
//     valueInputOption: "RAW",
//     resource: {
//       values,
//     },
//     key: apiKey,
//   };

//   try {
//     const response = await sheets.spreadsheets.values.update(request);
//     return response.data;
//   } catch (err) {
//     console.error("Error pushing data to Google Sheets", err);
//     throw err;
//   }
// };

export async function getcredit(formData: FormData) {
  console.log(formData.get("name"));
  console.log(formData.get("bike"));

  try {
    const sheetId = "your-google-sheet-id"; // Replace with your Google Sheet ID
    const range = "Sheet1!A1"; // Define the range where you want to start inserting values
    const apiKey = "your-api-key"; // Replace with your Google Sheets API key

    // const response = await pushToSheet(sheetId, range, values, apiKey);

    return "";
  } catch (error) {
    console.error("error", error);
  }
}
