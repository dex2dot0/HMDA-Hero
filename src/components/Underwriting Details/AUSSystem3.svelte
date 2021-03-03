<script>
    import {
        ausSystem3
    } from "./../../stores.js";
</script>

<label for="AUS3">AUS System: 3</label>
<!-- svelte-ignore a11y-no-onchange-->
<select class="custom-select" id="AUS3" bind:value={$ausSystem3} on:change={ausSystem3.change}>
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