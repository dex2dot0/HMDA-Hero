<script>
  import {
    applicantEthOther,
    applicantEth1,
    applicantEth2,
    applicantEth3,
    applicantEth4,
    applicantEth5,
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
    <label for="EthFree"> Other Hispanic or Latino </label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#9" />
    <Modal
      idName="AppEthFreeModal"
      modalTitle="Ethnicity: Free Form for Other Hispanic or Latino"
      modalBody="<p> Specify in text the Applicant or borrower's Other Hispanic
      or Latino ethnicity(ies) provided by the Applicant or Borrower. </p>
      <p>Otherwise, leave this data field blank</p>" />
    <QualityErrors errors="1" idName="EthFreeQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="EthFreeValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="EthFree"
      bind:value="{$applicantEthOther}"
      on:change="{applicantEthOther.change}" />
    {#if $applicantEth1 == '14' || $applicantEth2 == '14' || $applicantEth3 == '14' || $applicantEth4 == '14' || $applicantEth5 == '14'}
      {#if $applicantEthOther == ''}
        <HRValidation isWarning="{true}" />
      {/if}
    {/if}
  </span>
</DataFieldFormat>
