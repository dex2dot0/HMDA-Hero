<script>
    import {
      applicantEth2
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Eth2">Ethnicity 2</label>
    <!-- svelte-ignore a11y-no-onchange-->
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10"/>
    <QualityErrors errors=1 idName="Eth2QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Eth2ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth2"
      bind:value={$applicantEth2}
      on:change={applicantEth2.change}>
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