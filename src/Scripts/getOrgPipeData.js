import { getDataByRow } from '../Excel Scripts/getDataByRow.js';

export default async function getOrgPipeData() {
	return new Promise(async (resolve, reject) => {
		try {
			console.log('Fetching organizational pipe delimited data');
			let orgRow = await getDataByRow(3, 'O');
            
			//Now transform returned values from [["1","2,"]] to "1|2" newline
			resolve(orgRow[0].join('|'));
		} catch (error) {
			console.log('Error getting org pipe data');
			console.error(error);
			reject(error);
		}
	});
}
