<script>
    import {
        coapplicantEthBasis,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="EthBasis">Ethnicity</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$coapplicantEthBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="EthBasis"
  bind:value={$coapplicantEthBasis}
  on:change={coapplicantEthBasis.change}
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