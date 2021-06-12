//Data is formatted as an two dimensional array formatted i.e. [["10Bx939c5543TqA1144M54321987620", "20181101", "3"]]
//This function requires you pass all the data for the entire row minus the LEI!!!

export async function updateOrg(data) {
    return new Promise((resolve, reject) => {
      try {
        Excel.run(async (context) => {
          let sheet = context.workbook.worksheets.getItem('Data');
          let range = sheet.getRange('B3:O3');
          range.values = [data];
          return context.sync()
          .then(() => resolve('success'));
        });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
  