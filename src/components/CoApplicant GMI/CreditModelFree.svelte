<script>
    import {
        coapplicantCreditModel,
        coapplicantCreditModelOther,
        NoCoApp
    } from "./../../stores.js";

    import Modal from '../Modal.svelte';
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CreditModelFree" style="font-size: 9px;">
    Co-Applicant Free Form Version of Credit Scoring Model
</label>
<Modal
idName="CoAppCBRModal"
modalTitle="Co-Applicant Free Form Version of Credit Scoring Model"
modalBody="<p> Specify in text the co-applicant or co-borrower's Other
credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
field blank</p>" />
<input
class="form-control"
type="text"
id="CreditModelFree"
bind:value={$coapplicantCreditModelOther}
on:change={coapplicantCreditModelOther.change}
disabled={$NoCoApp} />

{#if $coapplicantCreditModel == 8}
    {#if $coapplicantCreditModelOther !== ''}
        <HRValidation isValid={true} />
    {:else}
        <HRValidation />
    {/if}
{/if}