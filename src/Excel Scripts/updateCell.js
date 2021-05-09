//Data is formatted as an two dimensional array formatted i.e. [["10Bx939c5543TqA1144M54321987620", "20181101", "3"]]
//This function requires you pass all the data for the entire row minus the LEI!!!

export async function updateCell(value, cell) {
  return new Promise((resolve, reject) => {
    try {
      //if (!isNaN(cell)) {
      Excel.run(async (context) => {
        let sheet = context.workbook.worksheets.getItem('Data');
        //e.g. C3
        var range = sheet.getRange(cell);
        range.values = [[value]];
        return context.sync();
      });
      //}
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}
