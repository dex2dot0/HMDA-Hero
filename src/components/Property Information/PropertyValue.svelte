<script>
    import {
        propertyValue
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="Value">Property Value</label>
{#if $propertyValue !== 'NA'}
  <Checkbox value={false} on:notify={propertyValue.NA} />
{:else}
  <Checkbox value={true} on:notify={propertyValue.NA} />
{/if}
<input
  class="form-control"
  type="text"
  id="Value"
  placeholder="ex. 350500 (or) NA (or) Exempt"
  bind:value={$propertyValue}
  on:change={propertyValue.changed} />
{#if $propertyValue !== '' || $propertyValue == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}