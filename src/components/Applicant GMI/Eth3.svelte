<script>
    import {
      applicantEth3
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Eth3">Ethnicity 3</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10"/>
    <QualityErrors errors=1 idName="Eth3QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Eth3ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth3"
      bind:value={$applicantEth3}
      on:change={applicantEth3.change}>
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