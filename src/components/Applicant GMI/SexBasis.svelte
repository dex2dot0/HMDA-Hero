<script>
    import {
      applicantSexBasis
    } from "./../../stores.js";
</script>

<label for="SexBasis">Sex</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$applicantSexBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="SexBasis"
  bind:value={$applicantSexBasis}
  on:change={applicantSexBasis.change}>
  <option />
  <option value="1">
    1. Collected on the basis of visual observation or surname
  </option>
  <option value="2">
    2. Not collected on the basis of visual observation or surname
  </option>
  <option value="3">3. Not applicable</option>
</select>