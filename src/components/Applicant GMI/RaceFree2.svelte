<script>
  import {
    applicantRaceOther2,
    applicantRace1,
    applicantRace2,
    applicantRace3,
    applicantRace4,
    applicantRace5,
  } from "./../../stores.js";
  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="RaceFree2">Free Form for Other Asian</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/B/#9-iv"/>
    <Modal
      idName="AppFreeRace2"
      modalTitle="Applicant Race: Free Form Text for Other Asian"
      modalBody="<p> Specify in text the Applicant's or Borrower's Other Asian
      race(s) provided by the Applicant or Borrower. </p> <p>Otherwise, leave
      this data field blank</p>" />
    <QualityErrors errors=1 idName="RaceFree2QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="RaceFree2ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="RaceFree2"
      bind:value={$applicantRaceOther2}
      on:change={applicantRaceOther2.change} />
    <!-- If any of the race reportings are 27, show an organge validation warning to suggest that more detail might be necessary-->
    {#if $applicantRace1 == 27 || $applicantRace2 == 27 || $applicantRace3 == 27 || $applicantRace4 == 27 || $applicantRace5 == 27}
      {#if $applicantRaceOther2 == ''}
        <HRValidation isWarning={true}/>
      {/if}
    {/if}
  </span>
</DataFieldFormat>
