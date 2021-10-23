<script>
	//TODO
	//This is the wrong approach as we are only considering current date
	//Should actually be considering the date from the Excel file for Calendar Year
	let d = new Date();
	let Year = d.getFullYear();
	let filingYear = 2018; //default
	//Excel restricts some things based on the context we are running in so this next variable will help to determine what our restrictions are
	let excelEnv = 'online';
	let girGuide;
	let fiGuide;

	const setGirGuide = (year) => {
		girGuide = `https://www.ffiec.gov/hmda/pdf/${year}guide.pdf`;
	};

	const setFiGuide = (year) => {
		fiGuide = `https://s3.amazonaws.com/cfpb-hmda-public/prod/help/${year}-hmda-fig.pdf`;
	};

	switch (Year) {
		case 2020:
			filingYear = 2019;
			break;
		case 2021:
			filingYear = 2021;
			break;
		case (2022, 2023, 2024, 2025, 2026):
			filingYear - 2021; //Going with the latest
			break;
		default:
			filingYear = 2018;
			break;
	}

	setGirGuide(filingYear);
	setFiGuide(filingYear);

	(async () => {
		if (process.browser) {
			await Office.onReady().then(async function () {
				if (window.top == window) {
					// the add-in is not running in Excel Online
					excelEnv = 'desktop';
				}
			});
		}
	})();
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
								href="https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2020.pdf">
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
				{#if filingYear == 2020}
					<div class="row">
						<a target="_blank" href={girGuide}>Getting It Right Guide</a>
					</div>
					{#if excelEnv == 'online'}
						<div class="row">
							<a
								target="_blank"
								href="https://files.consumerfinance.gov/f/documents/cfpb_hmda_small-entity-compliance-guide_2021.pdf">
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
								href="https://files.consumerfinance.gov/f/documents/cfpb_reportable-hmda-data_regulatory-and-reporting-overview-reference-chart-2021.pdf">
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
