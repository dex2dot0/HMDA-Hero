export async function getYear() {
	return new Promise((resolve, reject) => {
		try {
			Excel.run(async (context) => {
				let sheet = context.workbook.worksheets.getItem('Data');
				let range = sheet.getRange(`C3:C3`);
				range.load('text');

				context.sync().then(async function () {
					let year = await range.text[0];
					if (year[0] && year[0] !== '') {
						resolve(year[0]);
					} else {
						resolve('blank');
					}
				});
			});
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
}
