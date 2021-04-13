<script>
    import {
      applicantRaceOther1,
      applicantRace1,
      applicantRace2,
      applicantRace3,
      applicantRace4,
      applicantRace5,
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="RaceFree1" style="font-size: 10px;">
    Free Form for Am Indian or Alaskan Native
</label>
<Modal
  idName="AppFreeRace1"
  modalTitle="Applicant: Free Form for Am Indian or Alaskan Native"
  modalBody="<p> Specify in text the Applicant's or Borrower's American
  Indian or Alaska Native Enrolled or Principal Tribe if provided by the
  Applicant or Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
<input
  class="form-control"
  type="text"
  id="RaceFree1"
  bind:value={$applicantRaceOther1}
  on:change={applicantRaceOther1.change} />
  <!-- If any of the race reportings are 1, show an organge validation warning to suggest that more detail might be necessary-->
{#if $applicantRace1 == 1 || $applicantRace2 == 1 || $applicantRace3 == 1 || $applicantRace4 == 1 || $applicantRace5 == 1}
  <HRValidation isWarning={true}/>
{/if}