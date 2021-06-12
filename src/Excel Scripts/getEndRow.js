export async function getEndRow() {
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
				let usedRange = sheet.getRange('B:B');
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
					console.log(`end row is ${endRow}`);
					resolve(endRow);
				});
			});
		} catch (error) {
			console.log(error);
			if (error.message.includes('Excel is not defined')) {
				//return default data for Example LAR file
				resolve('7');
			} else {
				reject(error);
			}
		}
	});
}
