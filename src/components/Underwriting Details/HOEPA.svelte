<script>
  import {
    hoepa
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="HOEPA">HOEPA Status</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-13"/>
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="HOEPAQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="HOEPAValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$hoepa > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="HOEPA"
      bind:value={$hoepa}
      on:change={hoepa.change}>
      <option />
      <option value="1">1. High-cost mortgage</option>
      <option value="2">2. Not a high-cost mortgage</option>
      <option value="3">3. Not applicable</option>
    </select>
  </span>
</DataFieldFormat>