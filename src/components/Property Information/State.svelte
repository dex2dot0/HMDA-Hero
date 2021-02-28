<script>
    import {
        stateCode
    } from "./../../../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="State">State or</label>
{#if $stateCode !== 'NA'}
  <Checkbox value={false} on:notify={stateCode.NA} />
{:else}
  <Checkbox value={true} on:notify={stateCode.NA} />
{/if}

<input
  class="form-control"
  type="text"
  id="State"
  placeholder="ex. CA (or) NA"
  bind:value={$stateCode}
  on:change={stateCode.changed} />
{#if $stateCode !== '' && $stateCode.length === 2}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}