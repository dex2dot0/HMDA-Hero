<script>
    import {
        ausSystem4
    } from "./../../stores.js";
</script>

<label for="AUS4">AUS System: 4</label>
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