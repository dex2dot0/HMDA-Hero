<script>
    import {
        DTI
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

<label for="DTI">Debt-to-Income Ratio</label>
<input
  class="form-control"
  type="text"
  id="DTI"
  bind:value={$DTI}
  on:change={DTI.change}
  placeholder=" ex. 42.95 (or) NA (or) Exempt" />
{#if $DTI !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}