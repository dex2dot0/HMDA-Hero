<script>
    import {
      applicantCreditModelOther,
      applicantCreditModel
    } from "../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CreditModel1Free">
      Free Form Version of Credit Scoring Model
    </label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-15"/>
    <Modal
      idName="AppCBRModal"
      modalTitle="Applicant Free Form Version of Credit Scoring Model"
      modalBody="<p> Specify in text the applicant's or borrower's Other
      credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
      field blank</p>" />
    <QualityErrors errors=1 idName="CreditModelFreeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="CreditModelFreeValidityErros" errorsHTML=""/>
  </span>
  <span slot="input">
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
  </span>
</DataFieldFormat>