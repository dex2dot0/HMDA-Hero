export async function getEndRow() {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Data");
        let usedRange = sheet.getRange("D:D");
        let valuesRange = usedRange.getSpecialCells(
          Excel.SpecialCellType.constants,
          Excel.SpecialCellValueType.numbersText
        );
        //ex: B2:D7
        valuesRange.load("address");

        context.sync().then(async function () {
          //Need to get the ending row
          let vRange = valuesRange.address;
          let endRow = vRange.slice(9, vRange.length);
          console.log(`end row is ${endRow}`)
          resolve(endRow)
        });
      });
    } catch (error) {
      console.log(error)
      if (error.message.includes('Excel is not defined')) {
        //return default data for Example LAR file
        resolve('7');
      } else {
        reject(error)
      }
    }
  })
}
