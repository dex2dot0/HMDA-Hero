<script>
    import {
        coapplicantEth4,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="CoEth4">Ethnicity 4</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class="custom-select"
  id="CoEth4"
  bind:value={$coapplicantEth4}
  on:change={coapplicantEth4.change}
  disabled={$NoCoApp}>
  <option selected value="">Blank, If none are applicable</option>
  <option value="1">1. Hispanic or Latino</option>
  <option value="11">11. Mexican</option>
  <option value="12">12. Puerto Rican</option>
  <option value="13">13. Cuban</option>
  <option value="14">14. Other Hispanic or Latino</option>
  <option value="2">2. Not Hispanic or Latino</option>
</select>