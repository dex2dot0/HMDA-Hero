import { deleteRow } from '../Excel Scripts/deleteRow';

export async function cancelAddLoanChanges(editRow) {
	try {
		console.log(`editRow Received is ${editRow}`);
		deleteRow(editRow).then(async () => {
			console.log('Row deleted successfully');
		});
	} catch (error) {
		console.log(`call to cancelAddLoanChanges failed`);
		console.log(error);
	}
}
