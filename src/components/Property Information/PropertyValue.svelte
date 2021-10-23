<script>
  import {
      propertyValue
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
    <label for="Value">Property Value</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-28"/>
    {#if $propertyValue !== 'NA'}
      <Checkbox value={false} on:notify={propertyValue.NA} />
    {:else}
      <Checkbox value={true} on:notify={propertyValue.NA} />
    {/if}
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="ValueQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="ValueValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="Value"
      placeholder="ex. 350500 (or) NA (or) Exempt"
      bind:value={$propertyValue}
      on:change={propertyValue.changed} />
    {#if $propertyValue !== '' || $propertyValue == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>