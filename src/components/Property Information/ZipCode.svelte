<script>
    import {
        zipCode
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="zip">Zip Code or</label>
{#if $zipCode !== 'NA'}
  <Checkbox value={false} on:notify={zipCode.NA} />
{:else}
  <Checkbox value={true} on:notify={zipCode.NA} />
{/if}
<input
  class="form-control"
  type="text"
  id="zip"
  placeholder="ex. 90049-9998 (or) NA"
  bind:value={$zipCode}
  on:change={zipCode.changed} />
{#if $zipCode.length > 4 || $zipCode === 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}