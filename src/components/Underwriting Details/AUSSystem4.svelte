<script>
  import {
    ausSystem4
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="AUS4">AUS System: 4</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-35"/>
    <QualityErrors errors=1 idName="AUS4QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="AUS4ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select class="custom-select" id="AUS4" bind:value={$ausSystem4} on:change={ausSystem4.change}>
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