export async function getDataByRow(row, endColumn) {
  let end = endColumn || 'DF';
  return new Promise(async (resolve, reject) => {
    try {
      Excel.run(async (c) => {
        console.log(`row is ${row}`);
        let sheet = c.workbook.worksheets.getItem('Data');
        let rowRange = sheet.getRange(`B${row}:${end}${row}`);
        rowRange.load('text');

        c.sync().then(async function () {
          console.log(rowRange.text);
          resolve(rowRange.text);
        });
      });
    } catch (error) {
      console.log(error);
    }
  });
}
