<script>
    import {
        coapplicantSexBasis,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="CoSexBasis">Sex</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$coapplicantSexBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="CoSexBasis"
  bind:value={$coapplicantSexBasis}
  on:change={coapplicantSexBasis.change}
  disabled={$NoCoApp}>
  <option />
  <option value="1">
    1. Collected on the basis of visual observation or surname
  </option>
  <option value="2">
    2. Not collected on the basis of visual observation or surname
  </option>
  <option value="3">3. Not applicable</option>
  {#if $NoCoApp}
    <option value="4" selected>4. No co-applicant</option>
  {:else}
    <option value="4">4. No co-applicant</option>
  {/if}
</select>