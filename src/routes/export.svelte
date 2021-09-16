<script>
	import Modal from '../components/Modal.svelte';
	import getOrgPipeData from '../Scripts/getOrgPipeData';
	import getPipeData from '../Scripts/getPipeData.js';
	import { getFilingYear } from '../Excel Scripts/getFilingYear';
	import { parseErrors, formatErrors, validityErrors } from '../stores';

	let parserErrors = [];
	let formattingErrors = [];
	let validationErrors = [];
	let validateExport = true;

	let outputType = 'defaultFormat';
	async function radioChange(e) {
		console.log(`Exporting as ${e.target.id}`);
		outputType = e.target.id;
	}

	async function updateValidateExport() {
		validateExport = !validateExport;
	}

	async function runExport() {
		let orgData = await getOrgPipeData(); //get org data from Excel
		let yearRange = await getFilingYear();
		let year = yearRange[0];
		let exempt = outputType == 'exemptFormat' ? true : false;
		let loanData = await getPipeData(exempt);
		let pipeData = `1|${orgData}${loanData}`;

		//run CFPB validation if validation option is selected
		if (validateExport) {
			console.log('running export validation');
			let pipeDataBlob = new Blob([pipeData], {
				type: 'text/plain',
			});
			let formdata = new FormData();
			formdata.append('file', pipeDataBlob, 'lar.txt');

			let requestOptions = {
				method: 'POST',
				body: formdata,
				//mode: 'no-cors',
				redirect: 'follow',
			};

			fetch(`https://ffiec.cfpb.gov/v2/public/hmda/validate/${year}`, requestOptions)
				.then((response) => response.json())
				.then((results) => {
					console.log('results ', results);
					parserErrors = results.parserErrors;
					formattingErrors = results.validationErrors[1]
						? results.validationErrors[0]
						: [];
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

					download(pipeData, 'lar.txt', 'text/plain');
				})
				.catch((error) => console.log('error', error));
		} else {
			download(pipeData, 'lar.txt', 'text/plain');
		}

		async function download(strData, strFileName, strMimeType) {
			//solution from https://stackoverflow.com/questions/21012580/is-it-possible-to-write-data-to-file-using-only-javascript
			let D = document,
				A = arguments,
				a = D.createElement('a'),
				d = A[0],
				n = A[1],
				t = A[2] || 'text/plain';

			//build download link:
			a.href = 'data:' + strMimeType + 'charset=utf-8,' + escape(strData);

			if (window.MSBlobBuilder) {
				// IE10
				var bb = new MSBlobBuilder();
				bb.append(strData);
				return navigator.msSaveBlob(bb, strFileName);
			} /* end if(window.MSBlobBuilder) */

			if ('download' in a) {
				//FF20, CH19
				a.setAttribute('download', n);
				a.innerHTML = 'downloading...';
				D.body.appendChild(a);
				setTimeout(function () {
					var e = D.createEvent('MouseEvents');
					e.initMouseEvent(
						'click',
						true,
						false,
						window,
						0,
						0,
						0,
						0,
						0,
						false,
						false,
						false,
						false,
						0,
						null
					);
					a.dispatchEvent(e);
					D.body.removeChild(a);
				}, 66);
				return true;
			} /* end if('download' in a) */

			//do iframe dataURL download: (older W3)
			let f = D.createElement('iframe');
			D.body.appendChild(f);
			f.src =
				'data:' +
				(A[2] ? A[2] : 'application/octet-stream') +
				(window.btoa ? ';base64' : '') +
				',' +
				(window.btoa ? window.btoa : escape)(strData);
			setTimeout(function () {
				D.body.removeChild(f);
			}, 333);
			return true;
		}
	}

	async function validationReport() {
		console.log('validation report');
	}
</script>

<style>
	.container {
		text-align: center;
		max-width: 90%;
	}

	@media (min-width: 576px) {
		.container {
			max-width: 90%;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 80%;
		}
	}

	@media (min-width: 992px) {
		.container {
			max-width: 70%;
		}
	}

	@media (min-width: 1200px) {
		.container {
			max-width: 60%;
		}
	}
	.header {
		padding: 0;
		padding-left: 10px;
		padding-right: 10px;
		background-color: #323130;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	h3 {
		color: #4e9668;
	}

	.card {
		width: 100%;
	}
</style>

<div class="container">
	<form class="shadow-sm mb-5 bg-white rounded">
		<div class="header">
			<h3>EXPORT</h3>
		</div>
		<div class="card">
			<div class="card-body">
				<div class="custom-control custom-radio">
					<input
						type="radio"
						on:click={radioChange}
						id="defaultFormat"
						name="customRadio"
						class="custom-control-input"
						checked />
					<label class="custom-control-label" for="defaultFormat"
						>Standard CFPB Export<Modal
							idName="defaultFormat"
							modalTitle="CFPB Pipe-delimited Formatted Text File"
							tabindex="-1"
							modalBody="<p>The standard CFPB formatted file.</p>" /></label>
				</div>
				<div class="custom-control custom-radio">
					<input
						type="radio"
						on:click={radioChange}
						id="exemptFormat"
						name="customRadio"
						class="custom-control-input" />
					<label class="custom-control-label" for="exemptFormat"
						>S2155 Exempt Export
						<Modal
							idName="exemptFormat"
							modalTitle="S2155 Exempt Pipe-delimited Formatted Text File"
							tabindex="-1"
							modalBody="<p>The same standard CFPB formatted file except exemptions are output for fields where an exemption is allowed.</p>
              <p>You should only use this option if your organization qualifies for the exemptions.</p>" /></label>
				</div>
				<div style="padding-top: 25px;">
					<p>
						Export Validation Options: <Modal
							idName="exportOptions"
							modalTitle="Export Validation"
							tabindex="-1"
							modalBody="<p>If the Validate option is selected when the export is generated, the file will be checked and validated by securely sending the data to tools provided by the CFPB.</p>" />
					</p>
					{#if validateExport}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="validateData"
								on:change={updateValidateExport}
								value="allData"
								checked />
							<label class="form-check-label" for="validateData">Validate</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="noValidate"
								on:change={updateValidateExport}
								value="isAllData" />
							<label class="form-check-label" for="noValidate">No Validation</label>
						</div>
					{:else}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="validateData"
								on:change={updateValidateExport}
								value="allData" />
							<label class="form-check-label" for="validateData">Validate</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="noValidate"
								on:change={updateValidateExport}
								value="isAllData"
								checked />
							<label class="form-check-label" for="noValidate">No Validation</label>
						</div>
					{/if}
				</div>
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary ml-2"
					on:click={runExport}>
					Download Export File
				</button>
			</div>
			{#if parserErrors.length > 0 || formattingErrors.length > 0 || validationErrors.length > 0}
				<div class="card-body">
					<div class="alert alert-warning" role="alert">
						Errors have been detected for your export file
					</div>
					<h6>Total Parsing Errors: {parserErrors.length}</h6>
					<h6>Total Formatting Errors: {formattingErrors.length}</h6>
					<h6>Total Validation Errors: {validationErrors.length}</h6>
					<hr />
					<p>
						You can view and directly edit the errors by <a href="/hmda-errors"
							>clicking here</a
						>. Or
						<button
							type="button"
							class="btn btn-sm btn-outline-primary"
							on:click={validationReport}>download</button> a report summary of the errors
					</p>
				</div>
			{/if}
		</div>
	</form>
</div>
