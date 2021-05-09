export async function getULIAddress(uli, endRow) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (c) => {
        let sheet = c.workbook.worksheets.getItem('Data');
        let searchRange = sheet.getRange(`C5:C${endRow}`);
        let foundRange = searchRange.find(uli, {
          completeMatch: true,
          searchDirection: Excel.SearchDirection.forward,
        });
        foundRange.load('address');

        c.sync().then(async function () {
          resolve(foundRange.address);
        });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
