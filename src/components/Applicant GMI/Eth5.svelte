<script>
    import {
      applicantEth5
    } from "./../../stores.js";
</script>

<label for="Eth5">Ethnicity 5</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class="custom-select"
  id="Eth5"
  bind:value={$applicantEth5}
  on:change={applicantEth5.change}>
  <option selected value="">Blank, If none are applicable</option>
  <option value="1">1. Hispanic or Latino</option>
  <option value="11">11. Mexican</option>
  <option value="12">12. Puerto Rican</option>
  <option value="13">13. Cuban</option>
  <option value="14">14. Other Hispanic or Latino</option>
  <option value="2">2. Not Hispanic or Latino</option>
</select>