<script>
  import {
    ausSystem5
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="AUS5">AUS System: 5</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-35"/>
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="AUS5QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="AUS5ValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select class="custom-select" id="AUS5" bind:value={$ausSystem5} on:change={ausSystem5.change}>
      <option />
      <option value="1">1.Desktop Underwriter (DU)</option>
      <option value="2">
        2.Loan Prospector (LP) or Loan Product Advisor
      </option>
      <option value="3">
        3.Technology Open to Approved Lenders (TOTAL) Scorecard
      </option>
      <option value="4">4.Guaranteed Underwriting System (GUS)</option>
      <option value="5">5.Other</option>
    </select>
  </span>
</DataFieldFormat>