<script>
    import {
        countyCode
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CountyCode">County Code</label>
{#if $countyCode !== 'NA'}
  <Checkbox value={false} on:notify={countyCode.NA} />
{:else}
  <Checkbox value={true} on:notify={countyCode.NA} />
{/if}
<input
  class="form-control"
  type="text"
  id="CountyCode"
  placeholder="ex. 06037 (or) NA"
  bind:value={$countyCode}
  on:change={countyCode.changed} />
{#if $countyCode.length === 5 || $countyCode === 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}