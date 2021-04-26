<script>
  import {
      totalUnits
  } from "./../../stores.js";

  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Units">Total Units</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-31"/>
    <QualityErrors errors=1 idName="UnitsQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="UnitsValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="Units"
      placeholder="ex. 5"
      bind:value={$totalUnits} 
      on:change={totalUnits.change}/>
    {#if $totalUnits > 0}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>