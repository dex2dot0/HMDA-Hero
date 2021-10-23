import { parseErrors, formatErrors, validityErrors, qualityErrors } from '../stores';
export const larValidation = async (larFile, filingYear) => {
	try {
		let formdata = new FormData();
		formdata.append('file', larFile, 'lar.txt');

		let requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow',
		};

		await fetch(
			`https://ffiec.cfpb.gov/v2/public/hmda/validate/${filingYear}`,
			requestOptions
		)
			.then((response) => response.json())
			.then((results) => {
				//.parseErrors contains errors for the LAR itself if .parseErrors.rowNumber === 1
				//.parseErrors.rowNumber > 1 is telling you the row of the LAR and something wrong with parsing a value on the loan record on that line
				//.validationErrors is split by ULI and contains both validity and quality edits
				let isErrors = false;

				//TODO
				//So we have:

				//ULI specific parsing errors
				//ULI specific validity edits
				//ULI specific quality edits

				//We want to be able to use this function across the app so splitting the ULI specific parsing errors
				//out in to a separate thing likely doesn't make sense. It should be coupled with the ULI.

				let ULIs = [];

				//LAR level parsing errors
				//TODO
				// stripping this out for now. It is not fully implemented but may be in the future.
				// It still needs work.
				// if (results.parseErrors.length > 0) {
				// 	isErrors = true;
				// 	results.parseErrors.map((err) => {
				// 		if(err.rowNumber === 1) {
				// 			parseErrors.change(err);
				// 		} else {
				// 			let estimatedULI = err.estimatedULI;
				// 			ULIs.estimatedULI = {
				// 					parseError: err
				// 				}
				// 			});
				// 		}
				// 	})
				// };

				formattingErrors = results.validationErrors[1] ? results.validationErrors[0] : [];
				validationErrors = results.validationErrors[1]
					? results.validationErrors[1]
					: results.validationErrors[0];
				if (parserErrors) {
					console.log('Total Parsing Errors - ', parserErrors.length);
					console.log('Parsing Errors: ', parserErrors);
					parseErrors.change(parserErrors);
				} else {
					console.log('No parsing errors!');
					parseErrors.change([]);
				}

				if (formattingErrors) {
					console.log('Total Formatting Errors - ', formattingErrors.length);
					console.log('formatting errors - ', formattingErrors);
					formatErrors.change(formattingErrors);
				} else {
					console.log('No formatting errors!');
					formatErrors.change([]);
				}

				if (validationErrors) {
					console.log('Total Validation Errors - ', validationErrors.length);
					console.log('Validation Errors: ', validationErrors);
					validityErrors.change(validationErrors);
				} else {
					console.log('No validation errors!');
					validityErrors.change([]);
				}

				return isErrors; //Feedback on whether any issues were found
			})
			.catch((error) => {
				console.log('error', error);
				throw new Error(error); //forward to outer catch
			});
	} catch (error) {
		return error;
	}
};
