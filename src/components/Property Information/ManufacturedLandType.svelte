<script>
  import {
    manufacturedPropertyInterest
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="MFLandType">Manufactured Home Land Type</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-30"/>
    <QualityErrors errors=1 idName="MFLandTypeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="MFLandTypeValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$manufacturedPropertyInterest > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="MFLandType"
      bind:value={$manufacturedPropertyInterest}
      on:change={manufacturedPropertyInterest.change}>
      <option />
      <option value="1">1.Direct ownership</option>
      <option value="2">2.Indirect ownership</option>
      <option value="3">3.Paid leashold</option>
      <option value="4">4.Unpaid leashold</option>
      <option value="5">5.Not applicable</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>