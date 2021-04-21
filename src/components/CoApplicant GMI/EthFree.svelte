<script>
    import {
        coapplicantEthOther,
        coapplicantEth1,
        coapplicantEth2,
        coapplicantEth3,
        coapplicantEth4,
        coapplicantEth5,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CoEthFree">
Free Form for Other Hispanic or Latino
</label>
<Modal
idName="CoAppEthFreeModal"
modalTitle="Co-Applicant Ethnicity: Free Form for Other Hispanic or Latino"
modalBody="<p> Specify in text the Co-Applicant or Co-Borrower's Other
Hispanic or Latino ethnicity(ies) provided by the Co-Applicant or
Co-Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
<input
class="form-control"
type="text"
id="CoEthFree"
bind:value={$coapplicantEthOther}
on:change={coapplicantEthOther.change}
disabled={$NoCoApp} />
{#if $coapplicantEth1 == '14' || $coapplicantEth2 == '14' || $coapplicantEth3 == '14' || $coapplicantEth4 == '14' || $coapplicantEth5 == '14'}
    {#if $coapplicantEthOther == ''}
        <HRValidation isWarning={true} />
    {/if}
{/if}