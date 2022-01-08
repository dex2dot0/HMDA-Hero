<script>
	import { isExempt, LEI, ULI, LoanNumber } from './../../stores.js';
	import { getLEI } from '../../Excel Scripts/getLEI.js';
	import { getSetting } from '../../Excel Scripts/getSetting.js';
	import { setSetting } from '../../Excel Scripts/setSetting.js';

	import LnNumber from './LnNumber.svelte';
	import ULIdentifer from './ULIdentifer.svelte';
	import NonULI from './NonULI.svelte';
	import LoanAmount from './LoanAmount.svelte';
	import ApplicationDate from './ApplicationDate.svelte';
	import ActionTakenDate from './ActionTakenDate.svelte';
	import ActionTaken from './ActionTaken.svelte';
	import LoanType from './LoanType.svelte';
	import LoanPurpose from './LoanPurpose.svelte';
	import OccupancyType from './OccupancyType.svelte';
	import LienStatus from './LienStatus.svelte';
	import PurchaserType from './PurchaserType.svelte';
	import Preapproval from './Preapproval.svelte';
	import TotalCosts from './TotalCosts.svelte';
	import TotalPntsFees from './TotalPntsFees.svelte';
	import OriginationCharges from './OriginationCharges.svelte';
	import DiscountPoints from './DiscountPoints.svelte';
	import LenderCredits from './LenderCredits.svelte';
	import InterestRate from './InterestRate.svelte';
	import PrepayTerm from './PrepayTerm.svelte';
	import LoanTerm from './LoanTerm.svelte';
	import IntroRatePeriod from './IntroRatePeriod.svelte';
	import BalloonPayment from './BalloonPayment.svelte';
	import IOPayments from './IOPayments.svelte';
	import NegativeAmortization from './NegativeAmortization.svelte';
	import OtherNonAmortization from './OtherNonAmortization.svelte';
	import NMLSR from './NMLSR.svelte';
	import HECM from './HECM.svelte';
	import HELOC from './HELOC.svelte';
	import BusinessPurpose from './BusinessPurpose.svelte';

	let showLEIMissingError = false;
	let showULIValidation = false;
	let uliAlertType = '';
	let uliValidationMessage = '';

	(async () => {
		if (process.browser) {
			await Office.onReady().then(async function () {
				//Attempt to pull Exemption from Excel Settings
				let exemptSetting = await getSetting('EXEMPT');
				if (exemptSetting) {
					isExempt.set(exemptSetting);
				}
			});
		}
	})();

	async function generateULI() {
		if (process.browser) {
			let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			let leiLoanNum = `${$LEI}${$LoanNumber}00`;
			let uliNum = '';
			for (let char of leiLoanNum) {
				uliNum += chars.indexOf(char.toUpperCase());
			}
			let mod97 = modulo(uliNum, 97);
			let checkDigit = Math.ceil(98 - mod97);
			checkDigit.length === 1 ? (checkDigit += 0) : '';
			ULI.change(`${$LEI}${$LoanNumber}${checkDigit}`);
		}
	}

	async function validateULI() {
		if (process.browser) {
			let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			let uliNum = '';
			for (let char of $ULI) {
				uliNum += chars.indexOf(char.toUpperCase());
			}
			let mod97 = modulo(uliNum, 97);
			if (mod97 === 1) {
				uliValidationMessage = 'The ULI is valid';
				uliAlertType = 'alert alert-success alert-dismissible';
			} else {
				uliValidationMessage = 'The ULI does not appear to be valid';
				uliAlertType = 'alert alert-danger alert-dismissible';
			}
			showULIValidation = true;
		}
	}

	function modulo(divident, divisor) {
		return Array.from(divident)
			.map((c) => parseInt(c))
			.reduce((remainder, value) => (remainder * 10 + value) % divisor, 0);
	}

	async function getLEIFromExcel() {
		if (process.browser) {
			console.log('Attempting to get LEI from Excel file.');
			let leiFromExcel = await getLEI();
			let leiArray = leiFromExcel[0];

			if (leiArray[0] !== '') {
				LEI.change(leiArray[0]);
				setSetting('LEI', leiArray[0]);
				showLEIMissingError = false;
			} else {
				showLEIMissingError = true;
			}
		}
	}

	async function resetShowLEIMissing() {
		showLEIMissingError = false;
	}

	async function resetShowULIValidation() {
		showULIValidation = false;
	}
</script>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}

	.d-flex {
		padding-bottom: 6px;
	}
	a {
		color: black;
	}
</style>

<div class="row">
	{#if $LEI === ''}
		<div class="d-flex col-sm-12 align-items-end">
			<h6 style="margin-right: 5px;">
				<a
					href="https://www.consumerfinance.gov/policy-compliance/rulemaking/regulations/1003/4/#a-1-i-A"
					target="_blank">
					Legal Entity Identifier (LEI):
				</a>
			</h6>
			<h6 style="color:#dc3545;">Missing</h6>
			<button
				type="button"
				class="btn btn-sm btn-outline-secondary ml-2"
				on:click={getLEIFromExcel}>
				Get from Excel
			</button>
		</div>
		{#if showLEIMissingError}
			<div class="d-flex col-xs-12 col-md-auto">
				<div class="alert alert-danger alert-dismissible" role="alert">
					No LEI found in Excel file. This should be entered in cell O3
					<button
						type="button"
						class="close"
						data-dismiss="alert"
						aria-label="Close"
						on:click={resetShowLEIMissing}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		{/if}
	{:else}
		<div class="d-flex col-xs-12 col-md-auto">
			<h6 style="margin-right: 5px;">Legal Entity Identifier (LEI):</h6>
		</div>
		<div class="d-flex col-xs-12 col-md-auto">
			<h6 style="color:#28a745;">{$LEI}</h6>
		</div>
	{/if}
</div>

{#if !$isExempt}
	<div class="row">
		<div class="d-flex col-sm-12 col-md-auto align-items-end">
			{#if $LoanNumber === '' || $ULI.length < 10}
				<button type="button" class="btn btn-sm btn-outline-secondary" disabled>
					Generate ULI
				</button>
			{:else}
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary"
					on:click={generateULI}>
					Generate ULI
				</button>
			{/if}

			{#if $ULI == ''}
				<button type="button" class="btn btn-sm btn-outline-secondary ml-2" disabled>
					Validate ULI
				</button>
			{:else}
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary ml-2"
					on:click={validateULI}>
					Validate ULI
				</button>
			{/if}
		</div>
		{#if showULIValidation}
			<div class="d-flex col-xs-12 col-md-auto">
				<div class={uliAlertType} role="alert">
					{uliValidationMessage}
					<button
						type="button"
						class="close"
						data-dismiss="alert"
						aria-label="Close"
						on:click={resetShowULIValidation}>
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
			</div>
		{/if}
	</div>
{/if}

<div class="row">
	<div class="col-sm-12 col-md-6">
		{#if !$isExempt}
			<ULIdentifer />
		{:else}
			<NonULI />
		{/if}
	</div>

	{#if !$isExempt}
		<div class="col-sm-12 col-md-6">
			<LnNumber />
		</div>
	{/if}
</div>

<div class="row">
	<div class="col-sm-12 col-md-4">
		<LoanAmount />
	</div>
	<div class="col-sm-12 col-md-4">
		<ApplicationDate />
	</div>
	<div class="col-sm-12 col-md-4">
		<ActionTakenDate />
	</div>
</div>
<div class="row">
	<div class="col-sm-12 col-md-6">
		<ActionTaken />
	</div>
	<div class="col-sm-12 col-md-6">
		<LoanType />
	</div>
	<div class="col-sm-12 col-md-6">
		<LoanPurpose />
	</div>
	<div class="col-sm-12 col-md-6">
		<OccupancyType />
	</div>
	<div class="col-sm-12 col-md-4">
		<LienStatus />
	</div>
	<div class="col-sm-12 col-md-4">
		<PurchaserType />
	</div>
	<div class="col-sm-12 col-md-4">
		<Preapproval />
	</div>
</div>

{#if !$isExempt}
	<div class="row">
		<div class="col-sm-6 col-md-3">
			<TotalCosts />
		</div>
		<div class="col-sm-6 col-md-3">
			<TotalPntsFees />
		</div>
		<div class="col-sm-6 col-md-3">
			<OriginationCharges />
		</div>
		<div class="col-sm-6 col-md-3">
			<DiscountPoints />
		</div>
		<div class="col-sm-6 col-md-3">
			<LenderCredits />
		</div>
		<div class="col-sm-6 col-md-3">
			<InterestRate />
		</div>
		<div class="col-sm-6 col-md-3">
			<PrepayTerm />
		</div>
		<div class="col-sm-6 col-md-3">
			<LoanTerm />
		</div>
		<div class="col-sm-6 col-md-3">
			<IntroRatePeriod />
		</div>
		<div class="col-sm-6 col-md-3">
			<BalloonPayment />
		</div>
		<div class="col-sm-6 col-md-3">
			<IOPayments />
		</div>
		<div class="col-sm-6 col-md-3">
			<NegativeAmortization />
		</div>
		<div class="col-sm-6 col-md-3">
			<OtherNonAmortization />
		</div>
		<div class="col-sm-6 col-md-3">
			<NMLSR />
		</div>
		<div class="col-sm-6 col-md-3">
			<HECM />
		</div>
		<div class="col-sm-6 col-md-3">
			<HELOC />
		</div>
		<div class="col-sm-6 col-md-3">
			<BusinessPurpose />
		</div>
	</div>
{/if}
