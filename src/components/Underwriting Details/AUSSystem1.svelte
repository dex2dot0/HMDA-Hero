<script>
    import {
        ausSystem1
    } from "./../../stores.js";
</script>

<label for="AUS1">AUS System: 1</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$ausSystem1 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="AUS1"
  bind:value={$ausSystem1}
  on:change={ausSystem1.change}>
  <option />
  <option value="1111">1111.Exempt</option>
  <option value="1">1.Desktop Underwriter (DU)</option>
  <option value="2">
    2.Loan Prospector (LP) or Loan Product Advisor
  </option>
  <option value="3">
    3.Technology Open to Approved Lenders (TOTAL) Scorecard
  </option>
  <option value="4">4.Guaranteed Underwriting System (GUS)</option>
  <option value="5">5.Other</option>
  <option value="6">6.Not applicable</option>
</select>