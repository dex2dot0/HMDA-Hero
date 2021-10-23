<script>
  import {
    income
  } from "./../../stores.js";

  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Income">Income</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10-iii"/>
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="IncomeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="IncomeValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="Income"
      bind:value={$income}
      on:change={income.change}
      placeholder="ex. 36 (or) NA" />
    {#if $income !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>