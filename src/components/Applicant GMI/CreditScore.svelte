<script>
	import { applicantCreditScore } from '../../stores.js';
	import HRValidation from '../HRValidation.svelte';
	import Checkbox from '../Checkbox.svelte';
	import DataFieldFormat from '../DataFieldFormat.svelte';
	import RegLink from '../RegLink.svelte';
	import QualityErrors from '../QualityErrors.svelte';
	import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
	<span slot="label">
		<label for="CreditScore">Score</label>
	</span>
	<span slot="helpers">
		<RegLink
			regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-15" />
		<Checkbox
			text="Not a #"
			value={$applicantCreditScore == '7777' ? true : false}
			on:notify={applicantCreditScore.NAN} />
		<Checkbox
			value={$applicantCreditScore == '8888' ? true : false}
			on:notify={applicantCreditScore.NA} />
		<Checkbox
			text="Exempt"
			value={$applicantCreditScore == '1111' ? true : false}
			on:notify={applicantCreditScore.Exempt} />
		<!-- TODO
    Stripping out for now. Needs works.  -->
		<!-- <QualityErrors errors="1" idName="CreditScoreErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="CreditScoreErrors" errorsHTML="" /> -->
	</span>
	<span slot="input">
		<input
			class="form-control"
			type="text"
			id="CreditScore"
			bind:value={$applicantCreditScore}
			on:change={applicantCreditScore.change} />
		{#if Number($applicantCreditScore) > 0 && $applicantCreditScore.length < 5}
			<HRValidation isValid={true} />
		{:else}
			<HRValidation />
		{/if}
	</span>
</DataFieldFormat>
