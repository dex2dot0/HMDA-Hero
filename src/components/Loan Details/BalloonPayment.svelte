<script>
  import { balloonPayment } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Balloon">Balloon Payment</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-27" />
    <QualityErrors errors="1" idName="balloonQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="balloonValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$balloonPayment !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="Balloon"
      tabindex="0"
      bind:value="{$balloonPayment}"
      on:change="{balloonPayment.change}">
      <option></option>
      <option value="1">1.Balloon payment</option>
      <option value="2">2.No balloon payment</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
