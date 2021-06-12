<script>
	import Modal from '../components/Modal.svelte';
	import { getEndRow } from '../Excel Scripts/getEndRow.js';
	import { pipeImport } from '../Excel Scripts/pipeImport.js';
	let isAllData = true;

	async function updateIsAllData() {
		isAllData = !isAllData;
	}

	checkBrowser();
	let modalStr = `<p>The file you are uploading should conform to the
            formatting requirements the CFPB has published for pipe-delimited
            files submitted to the HMDA Platform</p>
            <p>You can test your file using the 
            <a href="https://ffiec.cfpb.gov/tools/file-format-verification" target="_blank">CFPB's File Format Verification Tool</a></p>
            `;

	async function checkBrowser() {
		if (process.browser) {
			if (window.File && window.FileReader && window.FileList && window.Blob) {
				console.log('fileReader is supported');
				return true;
			} else {
				errorUI(
					pipeError,
					'#dc3545',
					'The browser your are using in Excel Online or the browser used by your version of Excel Desktop does not support this file upload feature.'
				);
				return false;
			}
		}
	}

	async function pipeFile() {
		try {
			if (checkBrowser()) {
				console.log('Start pipe-delimited import');
				let fileInput = document.querySelector(`#pipe`);
				let pipeError = document.querySelector('#pipeError');
				errorUI(pipeError, '#fff', '');

				let file = fileInput.files[0];
				let reader = new FileReader();
				let textFile = /text.*/;
				if (file !== undefined) {
					if (file.type.match(textFile)) {
						reader.onload = async function (e) {
							let txt = reader.result;
							let txtArray = txt.split(/\r?\n/);
							let orgInfoTxt = txtArray[0];
							let orgInfo = orgInfoTxt.split('|');
							//Check for organization information validity
							let year = Number(orgInfo[2]);
							let quarter = Number(orgInfo[3]);
							if (
								orgInfo[0] == '1' &&
								orgInfo.length == 15 &&
								year >= 2018 &&
								year < 2099 &&
								quarter >= 1 &&
								quarter <= 4 &&
								orgInfo[9].length == 2
							) {
								let loanData = new Array(txtArray.length - 1);
								for (let i = 1; i < txtArray.length; i++) {
									let lDataTxt = txtArray[i].toString();
									loanData[i - 1] = lDataTxt.split('|');
									//Remove the first element of the array which should always be 2
									loanData[i - 1].shift();
								}
								//Check that all loans have correct length for import
								let canImport = await checkData(loanData);

								if (canImport) {
									//Process data here
									let endRow = await getEndRow();
									let runImport = await pipeImport(loanData, endRow);
									if (runImport == 'success') {
										//handle success here, maybe something with UI
									} else {
										//handle error here
										errorUI(
											pipeError,
											'#dc3545',
											`The process ran in to an unexpected error: ${runImport.toString()}`
										);
									}
								} else {
									console.log('Data does not meet CFPB specifications');
									errorUI(
										pipeError,
										'#dc3545',
										`The file you specified does not appear to be a valid pipe-delimited file according to CFPB specifications.`
									);
								}
							} else {
								errorUI(
									pipeError,
									'#dc3545',
									'The file you specified does not appear to be a valid pipe-delimited file according to CFPB specifications.'
								);
							}
						};
						reader.readAsText(file);
					} else {
						errorUI(pipeError, '#dc3545', 'The file should be a text file');
					}
				}
			}
		} catch (error) {
			console.log(error);
			errorUI(
				pipeError,
				'#dc3545',
				`An unexpected error occured: ${error.message.toString()}`
			);
		}

		async function checkData(loanData) {
			let canImport = true;
			for (let i = 0; i < loanData.length; i++) {
				loanData[i].length == 109 ? '' : (canImport = false);
			}
			return canImport;
		}

		async function errorUI(element, bgColor, msg) {
			element.style.backgroundColor = bgColor;
			element.innerText = msg;
		}
		return 'done';
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
			<h3>IMPORT</h3>
		</div>
		<div class="card">
			<div class="card-body">
				<h5 class="mr-2" style="text-align:left;">
					Pipe-delimited
					<Modal
						idName="pipeDelimited"
						modalTitle="CFPB Pipe-delimited Formatted Text File"
						tabindex="-1"
						modalBody={modalStr} />
				</h5>
				<div class="input-group align-items-end">
					<div class="custom-file">
						<input
							type="file"
							class="custom-file-input"
							id="pipe"
							on:change={pipeFile}
							accept="text/plain" />
						<label class="custom-file-label" for="pipe" style="text-align:left;">
							Choose file
						</label>
					</div>
				</div>
				<div>
					{#if isAllData}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="allData"
								on:change={updateIsAllData}
								value="allData"
								checked />
							<label class="form-check-label" for="allData">All Data</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="loanData"
								on:change={updateIsAllData}
								value="isAllData" />
							<label class="form-check-label" for="loanData">Loan Data Only</label>
						</div>
					{:else}
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="allData"
								on:change={updateIsAllData}
								value="allData" />
							<label class="form-check-label" for="allData">All Data</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="loanData"
								on:change={updateIsAllData}
								value="isAllData"
								checked />
							<label class="form-check-label" for="loanData">Loan Data Only</label>
						</div>
					{/if}
				</div>
				<p
					style="text-align:left;font-size:11px;background-color:#fff;padding:10px;"
					id="pipeError" />
			</div>
		</div>
	</form>
</div>
