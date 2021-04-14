<script>
    import {
        censusTract
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CensusTract">Census Tract</label>
{#if $censusTract !== 'NA'}
  <Checkbox value={false} on:notify={censusTract.NA} />
{:else}
  <Checkbox value={true} on:notify={censusTract.NA} />
{/if}
<input
  class="form-control"
  type="text"
  id="CensusTract"
  data-placement="bottom"
  data-html="true"
  data-toggle="tooltip"
  placeholder="ex. 06037264000 (or) NA"
  bind:value={$censusTract}
  on:change={censusTract.changed} />
{#if $censusTract.length === 11 || $censusTract == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}