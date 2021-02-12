import { getAllLoans } from '../Excel Scripts/getAllLoans.js';

export default async function getPipeData(exempt) {
	return new Promise(async (resolve, reject) => {
		try {
			console.log('Fetching loan record pipe delimited data');
			console.log(`export exempt? ${exempt}`);
			let loanData = await getAllLoans();
			let stringData = '';
			if (!exempt) {
				loanData.forEach((row) => {
					// prettier-ignore
					stringData = `${stringData}
2|${row.join('|')}`;
				});
			} else {
				loanData.forEach((row) => {
					row[11] = 'Exempt'; //Street Address
					row[12] = 'Exempt'; //City
					row[14] = 'Exempt'; //Zip Code
					row[57] = 'Exempt'; //Rate Spread
					row[60] = '1111'; //Credit Score
					row[61] = '1111'; //CoBorrower Credit Score
					row[66] = '1111'; //Reason for Denial
					row[71] = 'Exempt'; //Total Loan Costs
					row[72] = 'Exempt'; //Total Points and Fees
					row[73] = 'Exempt'; //Origination Charges
					row[74] = 'Exempt'; //Discount Points
					row[75] = 'Exempt'; //Lender Credits
					row[76] = 'Exempt'; //Interest Rate
					row[77] = 'Exempt'; //Prepayment Penalty Term
					row[78] = 'Exempt'; //DTI
					row[79] = 'Exempt'; //CLTV
					row[80] = 'Exempt'; //Loan Term
					row[81] = 'Exempt'; //Intro Rate Period
					row[82] = '1111'; //Balloon Payment
					row[83] = '1111'; //Interest Only Payments
					row[84] = '1111'; //Negative Am
					row[85] = '1111'; //Other Non-Am
					row[86] = 'Exempt'; //Property Value
					row[87] = '1111'; //Manufactured Home Secured Property Type
					row[88] = '1111'; //Manufactured Home Land Property Interest
					row[90] = 'Exempt'; //Multifamily # Units
					row[91] = '1111'; //Submission of Application
					row[92] = '1111'; //Initially Payable
					row[93] = 'Exempt'; //NMLSR
					row[94] = '1111'; //AUS System
					row[100] = '1111'; //AUS Result
					row[106] = '1111'; //HECM
					row[107] = '1111'; //HELOC
					row[108] = '1111'; //Business or Commercial Purpose
					// prettier-ignore
					stringData = `${stringData}
2|${row.join('|')}`;
				});
			}
			resolve(stringData);
		} catch (error) {
			console.log('Error getting org pipe data');
			console.error(error);
			reject(error);
		}
	});
}
