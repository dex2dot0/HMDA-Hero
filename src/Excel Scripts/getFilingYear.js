export async function getFilingYear() {
	return new Promise(async (resolve, reject) => {
		try {
			Excel.run(async (c) => {
				let sheet = c.workbook.worksheets.getItem('Data');
				let rowRange = sheet.getRange('C3');
				rowRange.load('text');

				c.sync().then(async function () {
					resolve(rowRange.text);
				});
			});
		} catch (error) {
			console.log(error);
		}
	});
}
