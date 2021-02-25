<script>
    import {
      applicantSex
    } from "./../../stores.js";
</script>

<label for="Sex">Sex</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$applicantSex > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="Sex"
  bind:value={$applicantSex}
  on:change={applicantSex.change}>
  <option />
  <option value="1">1. Male</option>
  <option value="2">2. Female</option>
  <option value="3">
    3. Information not provided by applicant in mail, internet, or telephone
    application
  </option>
  <option value="4">4. Not applicable</option>
  <option value="6">6. Applicant selected both male and female</option>
</select>