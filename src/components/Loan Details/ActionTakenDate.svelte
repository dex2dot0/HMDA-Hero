<script>
    import {
        actionTakenDate
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
    import checkValidDate from "../../Scripts/checkValidDate";
</script>

<label for="ActionDate">Action Date</label>
<input
  class="form-control"
  type="date"
  id="ActionDate"
  tabindex="0"
  bind:value={$actionTakenDate}
  on:change={actionTakenDate.change} />
{#await checkValidDate($actionTakenDate) then isFormattedDate}
  {#if $actionTakenDate !== '' || isFormattedDate}
    <HRValidation isValid={true} />
  {:else}
    <HRValidation isValid={false} />
  {/if}
{/await}