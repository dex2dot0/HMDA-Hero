<script>
  import { zipCode } from './../../stores.js';

  import Checkbox from '../Checkbox.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="zip">Zip Code</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-i" />
    {#if $zipCode !== 'NA'}
      <Checkbox value="{false}" on:notify="{zipCode.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{zipCode.NA}" />
    {/if}
    <QualityErrors errors="1" idName="zipQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="zipValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="zip"
      placeholder="ex. 90049-9998 (or) NA"
      bind:value="{$zipCode}"
      on:change="{zipCode.changed}" />
    {#if $zipCode.length > 4 || $zipCode === 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
