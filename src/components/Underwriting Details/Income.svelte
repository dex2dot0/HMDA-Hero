<script>
    import {
        income
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

<label for="Income">Income</label>
<input
  class="form-control"
  type="text"
  id="Income"
  bind:value={$income}
  on:change={income.change}
  placeholder="ex. 36 (or) NA" />
{#if $income !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}