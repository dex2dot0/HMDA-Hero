export async function getDataByRow(row) {
  async function run() {
    Excel.run(async (c) => {
      console.log(`row is ${row}`)
      let sheet = c.workbook.worksheets.getItem("Data");
      let rowRange = sheet.getRange(`C${row}:DF${row}`);
      rowRange.load("text");

      return c.sync().then(async function () {
        console.log(rowRange.text);
        resolve(rowRange.text);
      });
    });
  }

  /** Default helper for invoking an action and handling errors. */
  async function tryCatch(callback) {
    try {
      await callback();
    } catch (error) {
      // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
      console.error(error);
    }
  }

  tryCatch(run);
}