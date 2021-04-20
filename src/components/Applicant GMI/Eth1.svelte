<script>
    import {
      applicantEth1
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Eth1">Ethnicity 1</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10"/>
    <QualityErrors errors=1 idName="Eth1QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Eth1ValidityErros" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantEth1 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Eth1"
      bind:value={$applicantEth1}
      on:change={applicantEth1.change}>
      <option />
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
      <option value="3">
        3. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="4">4. Not applicable</option>
    </select>
  </span>
</DataFieldFormat>