<script>
  import {
      negativeAm
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="NegAm">Negative Amortization</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-27"/>
    <QualityErrors errors=1 idName="negAmQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="negAmValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$negativeAm !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="NegAm"
      tabindex="0"
      bind:value={$negativeAm}
      on:change={negativeAm.change}>
      <option />
      <option value="1">1.Negative Amortization</option>
      <option value="2">2.No negative amorization</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>