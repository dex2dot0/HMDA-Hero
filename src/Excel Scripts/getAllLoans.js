export async function getAllLoans() {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem('Data');
        let usedRange = sheet.getRange('D:D');
        let valuesRange = usedRange.getSpecialCells(
          Excel.SpecialCellType.constants,
          Excel.SpecialCellValueType.numbersText
        );
        //ex: B2:D7
        valuesRange.load('address');

        context.sync().then(async function () {
          //Need to get the ending row
          let vRange = valuesRange.address;
          let endRow = vRange.slice(9, vRange.length);
          let allLoansRange = sheet.getRange(`B5:DF${endRow}`);
          allLoansRange.load('values');

          context.sync().then(async function () {
            resolve(allLoansRange.values);
          });
        });
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
