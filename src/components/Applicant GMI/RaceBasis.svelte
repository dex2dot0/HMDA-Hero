<script>
    import {
      applicantRaceBasis
    } from "./../../stores.js";
</script>

<!-- Borrower Race Collection Basis -->
<label for="RaceBasis">Race</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$applicantRaceBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="RaceBasis"
  bind:value={$applicantRaceBasis}
  on:change={applicantRaceBasis.change}>
  <option />
  <option value="1">
    1. Collected on the basis of visual observation or surname
  </option>
  <option value="2">
    2. Not collected on the basis of visual observation or surname
  </option>
  <option value="3">3. Not applicable</option>
</select>
<!--****************** -->