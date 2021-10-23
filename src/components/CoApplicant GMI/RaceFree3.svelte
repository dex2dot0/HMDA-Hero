<script>
  import {
    coapplicantRaceOther3,
    coapplicantRace1,
    coapplicantRace2,
    coapplicantRace3,
    coapplicantRace4,
    coapplicantRace5,
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
    <label for="CoAppFreeRace3"> Free Form for Other Pacific Islander </label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#9-iv" />
    <Modal
      idName="CoAppFreeRace3"
      modalTitle="Co-Applicant: Free Form for Other Pacific Islander"
      modalBody="<p> Specify in text the Co-Applicant's or Co-Borrower's Other
      Pacific Islander race(s) provided by the Applicant or Borrower. </p>
      <p>Otherwise, leave this data field blank</p>" />
      <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="RaceFree3QualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="RaceFree3ValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CoRaceFree3"
      bind:value="{$coapplicantRaceOther3}"
      on:change="{coapplicantRaceOther3.change}"
      disabled="{$NoCoApp}" />
    <!-- If any of the race reportings are 44, show an organge validation warning to suggest that more detail might be necessary-->
    {#if $coapplicantRace1 == 44 || $coapplicantRace2 == 44 || $coapplicantRace3 == 44 || $coapplicantRace4 == 44 || $coapplicantRace5 == 44}
      {#if $coapplicantRaceOther3 == ''}
        <HRValidation isWarning="{true}" />
      {/if}
    {/if}
  </span>
</DataFieldFormat>
