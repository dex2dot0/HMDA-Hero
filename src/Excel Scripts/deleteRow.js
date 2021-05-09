//Clear the contents of the entire row.
export async function deleteRow(endRow) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        console.log(`deleting row ${endRow}`);
        let sheet = context.workbook.worksheets.getItem('Data');
        let range = sheet.getRange(`B${endRow}:DF${endRow}`);
        range.clear(Excel.ClearApplyTo.contents);
        return context.sync();
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
