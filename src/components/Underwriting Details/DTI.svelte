<script>
  import {
    DTI
  } from "./../../stores.js";

  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="DTI">Debt-to-Income Ratio</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-23"/>
    <QualityErrors errors=1 idName="DTIQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="DTIValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="DTI"
      bind:value={$DTI}
      on:change={DTI.change}
      placeholder=" ex. 42.95 (or) NA (or) Exempt" />
    {#if $DTI !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>