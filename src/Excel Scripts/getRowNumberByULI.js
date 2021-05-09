export async function getRowNumberByULI(uli, endRow) {
  return new Promise(async function (resolve, reject) {
    try {
      await Excel.run(async (c) => {
        let sheet = c.workbook.worksheets.getItem('Data');
        let searchRange = sheet.getRange(`C5:C${endRow}`);
        let foundRange = searchRange.find(uli, {
          completeMatch: true,
          searchDirection: Excel.SearchDirection.forward,
        });

        foundRange.load('address');

        return c.sync().then(async function () {
          let rowAddress = foundRange.address;
          let row = rowAddress.slice(6, rowAddress.length);
          resolve(row);
        });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
