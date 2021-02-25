<script>
    import {
      applicantCreditModelOther,
      applicantCreditModel
    } from "../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="CreditModel1Free" style="font-size: 10px;">
    Applicant Free Form Version of Credit Scoring Model
  </label>
  <Modal
    idName="AppCBRModal"
    modalTitle="Applicant Free Form Version of Credit Scoring Model"
    modalBody="<p> Specify in text the applicant's or borrower's Other
    credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
    field blank</p>" />
  <input
    class="form-control"
    type="text"
    id="CreditModel1Free"
    bind:value={$applicantCreditModelOther} 
    on:change={applicantCreditModelOther.change}/>
  {#if $applicantCreditModel == 8}
    {#if $applicantCreditModelOther !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  {/if}