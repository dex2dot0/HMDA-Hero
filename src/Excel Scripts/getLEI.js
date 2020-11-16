export async function getLEI() {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem("Data");
        let range = sheet.getRange("O3")
        range.load("values")

        context.sync().then(async function () {
          console.log(`the value for LEI is ${range.values}`)
          resolve(range.values)
        })
      });
    } catch (error) {
      console.log(error)
      reject(error)
    }
  });
}
