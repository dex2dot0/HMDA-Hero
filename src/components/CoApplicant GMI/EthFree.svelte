<script>
  import {
    coapplicantEthOther,
    coapplicantEth1,
    coapplicantEth2,
    coapplicantEth3,
    coapplicantEth4,
    coapplicantEth5,
    NoCoApp,
  } from './../../stores.js';
  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CoEthFree"> Free Form for Other Hispanic or Latino </label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#9" />
    <Modal
      idName="CoAppEthFreeModal"
      modalTitle="Co-Applicant Ethnicity: Free Form for Other Hispanic or Latino"
      modalBody="<p> Specify in text the Co-Applicant or Co-Borrower's Other
        Hispanic or Latino ethnicity(ies) provided by the Co-Applicant or
        Co-Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
        <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="EthFreeQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="EthFreeValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CoEthFree"
      bind:value="{$coapplicantEthOther}"
      on:change="{coapplicantEthOther.change}"
      disabled="{$NoCoApp}" />
    {#if $coapplicantEth1 == '14' || $coapplicantEth2 == '14' || $coapplicantEth3 == '14' || $coapplicantEth4 == '14' || $coapplicantEth5 == '14'}
      {#if $coapplicantEthOther == ''}
        <HRValidation isWarning="{true}" />
      {/if}
    {/if}
  </span>
</DataFieldFormat>
