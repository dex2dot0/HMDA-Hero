//newRow is just the value from getEndRow.js + 1
//lastRow would equal newRow if only one loan is passed, otherwise it will insert for multiple loans
//Data is formatted as a two dimensional array i.e. [["10Bx939c5543TqA1144M","10Bx939c5543TqA1144M54321987620", "20181101", "3"]]
//This function requires you pass all the data for the entire row!!!

export async function addNewLoan(newRow, data, lastRow) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem('Data');
        let range = sheet.getRange(`B${newRow}:DF${lastRow}`);
        range.values = data;
        range.format.autofitColumns();
        resolve(context.sync());
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
