<script>
    import {
        coapplicantEth1,
        NoCoApp
    } from "./../../stores.js";
</script>

<label for="CoEth1">Ethnicity 1</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
    class={$coapplicantEth1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
    id="CoEth1"
    bind:value={$coapplicantEth1}
    on:change={coapplicantEth1.change}
    disabled={$NoCoApp}>
    <option />
    <option value="1">1. Hispanic or Latino</option>
    <option value="11">11. Mexican</option>
    <option value="12">12. Puerto Rican</option>
    <option value="13">13. Cuban</option>
    <option value="14">14. Other Hispanic or Latino</option>
    <option value="2">2. Not Hispanic or Latino</option>
    <option value="3">
    3. Information not provided by applicant in mail, internet, or telephone
    application
    </option>
    <option value="4">4. Not applicable</option>
    {#if $NoCoApp}
    <option value="5" selected>5. No co-applicant</option>
    {:else}
    <option value="5">5. No co-applicant</option>
    {/if}
</select>