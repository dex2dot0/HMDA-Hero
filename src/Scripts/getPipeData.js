import { getAllLoans } from '../Excel Scripts/getAllLoans.js';

export default async function getPipeData(exempt) {
	return new Promise(async (resolve, reject) => {
		try {
			console.log('Fetching loan record pipe delimited data');
			console.log(`export exempt? ${exempt}`);
			let loanData = await getAllLoans();
			let stringData = '';
			loanData.forEach((row) => {
                if (!exempt) {
                    // prettier-ignore
				stringData = `${stringData}
2|${row.join('|')}`;
                } else {
                    // inject exemptions
                    WORK ON THIS
                }
				
			});
			
			//Now transform returned values from [["1","2,"]] to "1|2" newline
			resolve(stringData);
		} catch (error) {
			console.log('Error getting org pipe data');
			console.error(error);
			reject(error);
		}
	});
}
