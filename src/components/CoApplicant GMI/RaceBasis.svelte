<script>
    import {
        coapplicantRaceBasis,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="CoRaceBasis">Race</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$coapplicantRaceBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="CoRaceBasis"
  bind:value={$coapplicantRaceBasis}
  on:change={coapplicantRaceBasis.change}
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