<script>
  import {
      ioPayments
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="IO">Interest-Only Payments</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-27"/>
    <QualityErrors errors=1 idName="ioPaymentsQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="ioPaymentsValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$ioPayments !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="IO"
      tabindex="0"
      bind:value={$ioPayments}
      on:change={ioPayments.change}>
      <option />
      <option value="1">1.Interest-only payments</option>
      <option value="2">2.No interest-only payments</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>