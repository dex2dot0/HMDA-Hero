<script>
    import {
        appDate
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
    import checkValidDate from "../../Scripts/checkValidDate";
</script>

<!-- NA allowed on Purchased Loans-->
<label for="AppDate">Application Date or</label>
{#if $appDate !== 'NA'}
    <Checkbox value={false} on:notify={appDate.NA} />
{:else}
    <Checkbox value={true} on:notify={appDate.NA} />
{/if}

<input
    class="form-control"
    type="date"
    id="AppDate"
    tabindex="0"
    bind:value={$appDate}
    on:change={appDate.change} />
{#await checkValidDate($appDate) then isFormattedDate}
    {#if $appDate === 'NA' || isFormattedDate}
        <HRValidation isValid={true} />
    {:else}
        <HRValidation isValid={false} />
    {/if}
{/await}