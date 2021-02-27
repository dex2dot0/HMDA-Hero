<script>
    import {
        coapplicantSex,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="CoSex">Sex</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$coapplicantSex > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="CoSex"
  bind:value={$coapplicantSex}
  on:change={coapplicantSex.change}
  disabled={$NoCoApp}>
  <option />
  <option value="1">1. Male</option>
  <option value="2">2. Female</option>
  <option value="3">
    3. Information not provided by applicant in mail, internet, or telephone
    application
  </option>
  <option value="4">4. Not applicable</option>
  {#if $NoCoApp}
    <option value="5" selected>5. Not co-applicant</option>
  {:else}
    <option value="5">5. Not co-applicant</option>
  {/if}
  <option value="6">6. Applicant selected both male and female</option>
</select>