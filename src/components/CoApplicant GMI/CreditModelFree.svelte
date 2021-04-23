<script>
    import {
        coapplicantCreditModel,
        coapplicantCreditModelOther,
        NoCoApp
    } from "./../../stores.js";

    import Modal from '../Modal.svelte';
    import HRValidation from "../HRValidation.svelte";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
    <span slot="label">
        <label for="CreditModelFree">
            Free Form Version of Credit Scoring Model
        </label>
    </span>
    <span slot="helpers">
        <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-15"/>
        <Modal
        idName="CoAppCBRModal"
        modalTitle="Co-Applicant Free Form Version of Credit Scoring Model"
        modalBody="<p> Specify in text the co-applicant or co-borrower's Other
        credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
        field blank</p>" />
        <QualityErrors errors=1 idName="CreditModelFreeQualityErrors" errorsHTML=""/>
        <ValidityErrors errors=2 idName="CreditModelFreeValidityErrors" errorsHTML=""/> 
    </span>
    <span slot="input">
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
    </span>
</DataFieldFormat>