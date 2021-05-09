<script>
  import { otherNonAm } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="OtherAm">Other Non-amortizing Features</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-27" />
    <QualityErrors errors="1" idName="otherAmQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="otherAmValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$otherNonAm !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="OtherAm"
      tabindex="0"
      bind:value="{$otherNonAm}"
      on:change="{otherNonAm.change}">
      <option></option>
      <option value="1">1.Other no-fully amortizing features</option>
      <option value="2">2.No other non-fully amortizing features</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
