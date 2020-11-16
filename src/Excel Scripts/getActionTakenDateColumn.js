export async function getActionTakenDateColumn(endRow) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Data");
        let range = sheet.getRange(`L5:L${endRow}`)
        range.load('text')

        context.sync().then(async function () {
          resolve(range.text)
        });
      });
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}
