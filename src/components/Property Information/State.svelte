<script>
  import { stateCode } from './../../stores.js';

  import Checkbox from '../Checkbox.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="State">State</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-i" />
    {#if $stateCode !== 'NA'}
      <Checkbox value="{false}" on:notify="{stateCode.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{stateCode.NA}" />
    {/if}
    <QualityErrors errors="1" idName="StateQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="StateValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="State"
      placeholder="ex. CA (or) NA"
      bind:value="{$stateCode}"
      on:change="{stateCode.changed}" />
    {#if $stateCode !== '' && $stateCode.length === 2}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
