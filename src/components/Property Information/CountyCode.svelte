<script>
  import { countyCode } from './../../stores.js';
  import Checkbox from '../Checkbox.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CountyCode">County Code</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-ii-B" />
    {#if $countyCode !== 'NA'}
      <Checkbox value="{false}" on:notify="{countyCode.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{countyCode.NA}" />
    {/if}
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="countyCodeQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="countyCodeValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CountyCode"
      placeholder="ex. 06037 (or) NA"
      bind:value="{$countyCode}"
      on:change="{countyCode.changed}" />
    {#if $countyCode.length === 5 || $countyCode === 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
