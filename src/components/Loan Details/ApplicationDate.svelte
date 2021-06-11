<script>
	import { appDate } from './../../stores.js';

	import Checkbox from '../Checkbox.svelte';
	import HRValidation from '../HRValidation.svelte';
	import checkValidDate from '../../Scripts/checkValidDate';
	import DataFieldFormat from '../DataFieldFormat.svelte';
	import RegLink from '../RegLink.svelte';
	import QualityErrors from '../QualityErrors.svelte';
	import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
	<span slot="label">
		<!-- NA allowed on Purchased Loans-->
		<label for="AppDate">Application Date</label>
	</span>
	<span slot="helpers">
		<RegLink
			regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-1-ii" />
		{#if $appDate !== 'NA'}
			<Checkbox value="{false}" on:notify="{appDate.NA}" />
		{:else}
			<Checkbox value="{true}" on:notify="{appDate.NA}" />
		{/if}
		<QualityErrors errors="1" idName="appDateQualityErrors" errorsHTML="" />
		<ValidityErrors errors="2" idName="appDateValidityErrors" errorsHTML="" />
	</span>
	<span slot="input">
		<input
			class="form-control"
			type="date"
			id="AppDate"
			tabindex="0"
			bind:value="{$appDate}"
			on:change="{appDate.change}" />
		{#await checkValidDate($appDate) then isFormattedDate}
			{#if $appDate === 'NA' || isFormattedDate}
				<HRValidation isValid="{true}" />
			{:else}
				<HRValidation isValid="{false}" />
			{/if}
		{/await}
	</span>
</DataFieldFormat>
