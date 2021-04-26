<script>
  import {
    multifamilyUnits
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
    <label for="MFUnits">Multifamily Affrd. Units</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-32"/>
    {#if $multifamilyUnits !== 'NA'}
      <Checkbox value={false} on:notify={multifamilyUnits.NA} />
    {:else}
      <Checkbox value={true} on:notify={multifamilyUnits.NA} />
    {/if}
    <QualityErrors errors=1 idName="MFUnitsQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="MFUnitsValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="MFUnits"
      placeholder="ex. 5 (or) NA (or) Exempt"
      bind:value={$multifamilyUnits}
      on:change={multifamilyUnits.changed} />
    {#if $multifamilyUnits !== '' || $multifamilyUnits == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>