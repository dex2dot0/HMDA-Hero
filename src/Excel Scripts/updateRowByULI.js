//Data is formatted as an two dimensional array formatted i.e. [["10Bx939c5543TqA1144M54321987620", "20181101", "3"]]
//This function requires you pass all the data for the entire row minus the LEI!!!

export async function updateRowByULI(uli, endRow, data) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem('Data');
        let searchRange = sheet.getRange(`C5:C${endRow}`);
        let foundRange = searchRange.find(uli, {
          completeMatch: true,
          searchDirection: Excel.SearchDirection.forward,
        });

        foundRange.load('address');

        context.sync().then(async function () {
          let rowAddress = foundRange.address;
          let row = rowAddress.slice(6, rowAddress.length);
          let rowRange = sheet.getRange(`C${row}:DF${row}`);
          rowRange.values = data;
          rowRange.format.autofitColumns();

          resolve(context.sync());
        });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
