<script>
  import {
      openEndLOC
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="HELOC">Open-End LOC</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-37"/>
    <QualityErrors errors=1 idName="helocQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="helocValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$openEndLOC !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="HELOC"
      tabindex="0"
      bind:value={$openEndLOC}
      on:change={openEndLOC.change}>
      <option />
      <option value="1">1.Open-end line of credit</option>
      <option value="2">2.Not an open-end line of credit</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>