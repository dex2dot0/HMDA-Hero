<script>
    import {
      applicantEth4
    } from "./../../stores.js";
</script>

<label for="Eth4">Ethnicity 4</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class="custom-select"
  id="Eth4"
  bind:value={$applicantEth4}
  on:change={applicantEth4.change}>
  <option selected value="">Blank, If none are applicable</option>
  <option value="1">1. Hispanic or Latino</option>
  <option value="11">11. Mexican</option>
  <option value="12">12. Puerto Rican</option>
  <option value="13">13. Cuban</option>
  <option value="14">14. Other Hispanic or Latino</option>
  <option value="2">2. Not Hispanic or Latino</option>
</select>