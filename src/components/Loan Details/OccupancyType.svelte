<script>
  import { occupancyType } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="OccupancyType">Occupancy Type</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-6" />
    <QualityErrors
      errors="1"
      idName="occupancyTypeQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="occupancyTypeValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$occupancyType
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="OccupancyType"
      tabindex="0"
      bind:value="{$occupancyType}"
      on:change="{occupancyType.change}">
      <option></option>
      <option value="1">1. Principal residence</option>
      <option value="2">2. Second residence</option>
      <option value="3">3. Investment property</option>
    </select>
  </span>
</DataFieldFormat>
