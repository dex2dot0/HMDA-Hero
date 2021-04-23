<script>
    import {
        coapplicantEthBasis,
        NoCoApp
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="EthBasis">Ethnicity</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#10"/>
    <QualityErrors errors=1 idName="EthBasisQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="EthBasisValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantEthBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="EthBasis"
      bind:value={$coapplicantEthBasis}
      on:change={coapplicantEthBasis.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
      {#if $NoCoApp}
        <option value="4" selected>4. No co-applicant</option>
      {:else}
        <option value="4">4. No co-applicant</option>
      {/if}
    </select>
  </span>
</DataFieldFormat>