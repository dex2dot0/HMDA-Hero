<script>
  import {
      censusTract
  } from "./../../stores.js";

  import Checkbox from "../Checkbox.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CensusTract">Census Tract</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-ii-C"/>
    {#if $censusTract !== 'NA'}
      <Checkbox value={false} on:notify={censusTract.NA} />
    {:else}
      <Checkbox value={true} on:notify={censusTract.NA} />
    {/if}
    <QualityErrors errors=1 idName="censusTractQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="censusTractValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CensusTract"
      data-placement="bottom"
      data-html="true"
      data-toggle="tooltip"
      placeholder="ex. 06037264000 (or) NA"
      bind:value={$censusTract}
      on:change={censusTract.changed} />
    {#if $censusTract.length === 11 || $censusTract == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>