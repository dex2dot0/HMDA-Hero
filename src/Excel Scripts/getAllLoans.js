export async function getAllLoans() {

  async function reverseString(str) {
		let reversedString = [...str].reverse();
		let finalString = await finalizeString(reversedString);
		return finalString;
	}

	async function finalizeString (strArr) {
		let stringNums = [];
		let foundNAN = false;
		strArr.forEach((char) => {
			if(!foundNAN && !isNaN(char)) {
				stringNums.push(char);
			} else {
				foundNAN = true;
			}
		});

		let endRow = stringNums.reverse().join('');
		return endRow > 4 ? endRow : 4; //4 is the minimum endRow should be
	}

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
          let endRow = await reverseString(vRange);
          if(Number(endRow) < 5) {
            throw new Error('No valid data range found');
          }
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
