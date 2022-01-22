<script>
	import { getYear } from '../Excel Scripts/getYear.js';
	let filingYear = 2018; //default
	//Excel restricts some things based on the context we are running in so this next variable will help to determine what our restrictions are
	let excelEnv = 'online';
	let girGuide;
	let fiGuide;
	let d = new Date();

	let isLoading = new Promise(async (resolve, reject) => {
		if (process.browser) {
			return await Office.onReady()
				.then(async function () {
					let Year = await getYear();
					if (Year !== 'blank') {
						filingYear = Year;
					} else {
						console.log('No date found on Excel file, showing resources for latest year.');
						let currentYear = d.getFullYear().toString();
						switch (currentYear) {
							case '2020':
								filingYear = 2019;
								break;
							case '2021':
								filingYear = 2021;
								break;
							case '2022':
							case '2023':
							case '2024': 
							case '2025':
							case '2026':
								filingYear = 2021; //Going with the latest
								break;
							default:
								filingYear = 2018;
								break;
						}
					}

					const setGirGuide = (year) => {
						girGuide = `https://www.ffiec.gov/hmda/pdf/${year}guide.pdf`;
					};

					const setFiGuide = (year) => {
						fiGuide = `https://s3.amazonaws.com/cfpb-hmda-public/prod/help/${year}-hmda-fig.pdf`;
					};

					setGirGuide(filingYear);
					setFiGuide(filingYear);

					if (window.top == window) {
						// the add-in is not running in Excel Online
						excelEnv = 'desktop';
					}
					resolve();
				})
				.catch((error) => {
					console.error(error);
					reject(error);
				});
		}
	});
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

	a {
		text-align: center;
		width: 100%;
	}
</style>

{#await isLoading}
	<!-- promise is pending -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<div class="container">
		<form class="shadow-sm mb-5 bg-white rounded">
			<div class="header">
				<h3>Resources</h3>
			</div>
			<div class="card">
				<div class="card-body">
					<h5>{filingYear} Filing Resources</h5>
					<!-- 2018 -->
					{#if filingYear == 2018}
						<div class="row">
							<a target="_blank" href={girGuide}>Getting It Right Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2018.pdf">
									Small Entity Compliance Guide
								</a>
							</div>
						{/if}
						<div class="row">
							<a target="_blank" href={fiGuide}>Filing Instructions Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2018.pdf">
									Filing Overview Reference Chart
								</a>
							</div>
						{/if}
						<div class="row">
							<a
								target="_blank"
								href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
								HMDA Help Search
							</a>
						</div>
					{/if}
					<!-- 2019 -->
					{#if filingYear == 2019}
						<div class="row">
							<a target="_blank" href={girGuide}>Getting It Right Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2019.pdf">
									Small Entity Compliance Guide
								</a>
							</div>
						{/if}
						<div class="row">
							<a target="_blank" href={fiGuide}>Filing Instructions Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2019.pdf">
									Filing Overview Reference Chart
								</a>
							</div>
						{/if}
						<div class="row">
							<a
								target="_blank"
								href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
								HMDA Help Search
							</a>
						</div>
					{/if}
					<!-- 2020 -->
					{#if filingYear == 2020}
						<div class="row">
							<a target="_blank" href={girGuide}>Getting It Right Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2020.pdf">
									Small Entity Compliance Guide
								</a>
							</div>
						{/if}
						<div class="row">
							<a target="_blank" href={fiGuide}>Filing Instructions Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_2020-reportable-hmda-data.pdf">
									Filing Overview Reference Chart
								</a>
							</div>
						{/if}
						<div class="row">
							<a
								target="_blank"
								href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
								HMDA Help Search
							</a>
						</div>
					{/if}
					<!-- 2021 and beyond -->
					{#if filingYear > 2020}
						<div class="row">
							<a target="_blank" href={girGuide}>Getting It Right Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<!-- No published guide for 2021 as of 10/23/21 -->
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2020.pdf">
									Small Entity Compliance Guide
								</a>
							</div>
						{/if}
						<div class="row">
							<a target="_blank" href={fiGuide}>Filing Instructions Guide</a>
						</div>
						{#if excelEnv == 'online'}
							<div class="row">
								<a
									target="_blank"
									href="https://files.consumerfinance.gov/f/documents/cfpb_2021-reportable-hmda-data.pdf">
									Filing Overview Reference Chart
								</a>
							</div>
						{/if}
						<div class="row">
							<a
								target="_blank"
								href="https://hmdahelp.consumerfinance.gov/knowledgebase/s/">
								HMDA Help Search
							</a>
						</div>
					{/if}
					<div class="row">
						<a
							target="_blank"
							href="https://www.consumerfinance.gov/policy-compliance/guidance/mortgage-resources/hmda-reporting-requirements/">
							CFPB HMDA Resources Page
						</a>
					</div>
				</div>
			</div>
		</form>
	</div>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}
