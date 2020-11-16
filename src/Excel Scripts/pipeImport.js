import { addNewLoan } from "../Excel Scripts/addNewLoan.js";

export async function pipeImport(data, endRow) {
  return new Promise(async function (resolve, reject) {
    try {
      await importData().then(() => {
        resolve("success");
      })
      async function importData() {
        let newRow = Number(endRow) + 1
        let lastRow = Number(newRow) + (data.length - 1)
        await addNewLoan(newRow, data, lastRow)
      }

    } catch (error) {
      console.log(error)
      reject(error.message);
    }
  })
}