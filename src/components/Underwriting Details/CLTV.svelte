<script>
    import {
        CLTV
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CLTV">CLTV Ratio</label>
<input
  class="form-control"
  type="text"
  id="CLTV"
  bind:value={$CLTV}
  on:change={CLTV.change}
  title="ex. 80.05 (or) NA (or) Exempt" />
{#if $CLTV !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}