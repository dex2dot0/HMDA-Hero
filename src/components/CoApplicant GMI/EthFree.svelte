<script>
    import {
        coapplicantEthOther,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="CoEthFree" style="font-size: 8px;">
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