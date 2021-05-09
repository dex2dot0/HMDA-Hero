<script>
  import { actionTakenDate } from './../../stores.js';

  import HRValidation from '../HRValidation.svelte';
  import checkValidDate from '../../Scripts/checkValidDate';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="ActionDate">Action Date</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-8-ii" />
    <QualityErrors
      errors="1"
      idName="actionTakenDateQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="actionTakenDateValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="date"
      id="ActionDate"
      tabindex="0"
      bind:value="{$actionTakenDate}"
      on:change="{actionTakenDate.change}" />
    {#await checkValidDate($actionTakenDate) then isFormattedDate}
      {#if $actionTakenDate !== '' || isFormattedDate}
        <HRValidation isValid="{true}" />
      {:else}
        <HRValidation isValid="{false}" />
      {/if}
    {/await}
  </span>
</DataFieldFormat>
