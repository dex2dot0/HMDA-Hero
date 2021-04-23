<script>
    import {
        coapplicantEth4,
        NoCoApp
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CoEth4">Ethnicity 4</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10"/>
    <QualityErrors errors=1 idName="Eth4QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Eth4ValidityErros" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoEth4"
      bind:value={$coapplicantEth4}
      on:change={coapplicantEth4.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
    </select>
  </span>
</DataFieldFormat>