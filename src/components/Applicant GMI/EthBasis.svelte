<script>
    import {
    applicantEthBasis
    } from "./../../stores.js";
</script>

<!-- Borrower Ethnicity Collection Basis -->
<label for="EthBasis">Ethnicity</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$applicantEthBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="EthBasis"
  bind:value={$applicantEthBasis}
  on:change={applicantEthBasis.change}>
  <option />
  <option value="1">
    1. Collected on the basis of visual observation or surname
  </option>
  <option value="2">
    2. Not collected on the basis of visual observation or surname
  </option>
  <option value="3">3. Not applicable</option>
</select>

