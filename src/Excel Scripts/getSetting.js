//Clear the contents of the entire row.
export async function getSetting(key) {
  return new Promise((resolve, reject) => {
    try {
      Excel.run(async (context) => {
        resolve(await Office.context.document.settings.get(key));
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
