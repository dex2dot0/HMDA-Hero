<script>
    import {
        actionTakenDate
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

<label for="ActionDate">Action Date</label>
<input
  class="form-control"
  type="date"
  id="ActionDate"
  tabindex="0"
  bind:value={$actionTakenDate}
  on:change={actionTakenDate.change} />
{#if $actionTakenDate !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation isValid={false} />
{/if}