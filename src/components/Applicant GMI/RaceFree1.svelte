<script>
  import {
    applicantRaceOther1,
    applicantRace1,
    applicantRace2,
    applicantRace3,
    applicantRace4,
    applicantRace5,
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
    <label for="RaceFree1"> Free Form Am Indian or AK Native </label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#9-iv" />
    <Modal
      idName="AppFreeRace1"
      modalTitle="Applicant: Free Form for Am Indian or Alaskan Native"
      modalBody="<p> Specify in text the Applicant's or Borrower's American
      Indian or Alaska Native Enrolled or Principal Tribe if provided by the
      Applicant or Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
      <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="RaceFree1QualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="RaceFree1ValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="RaceFree1"
      bind:value="{$applicantRaceOther1}"
      on:change="{applicantRaceOther1.change}" />
    <!-- If any of the race reportings are 1, show an organge validation warning to suggest that more detail might be necessary-->
    {#if $applicantRace1 == 1 || $applicantRace2 == 1 || $applicantRace3 == 1 || $applicantRace4 == 1 || $applicantRace5 == 1}
      {#if $applicantRaceOther1 == ''}
        <HRValidation isWarning="{true}" />
      {/if}
    {/if}
  </span>
</DataFieldFormat>
