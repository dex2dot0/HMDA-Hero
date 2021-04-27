<script>
  import {
    CLTV
  } from "./../../stores.js";

  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CLTV">CLTV Ratio</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-24"/>
    <QualityErrors errors=1 idName="CLTVQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="CLTVValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CLTV"
      bind:value={$CLTV}
      on:change={CLTV.change}
      title="ex. 80.05 (or) NA (or) Exempt" />
    {#if $CLTV !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>