<script>
    import {
      applicantRaceOther3,
      applicantRace1,
      applicantRace2,
      applicantRace3,
      applicantRace4,
      applicantRace5,
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="RaceFree3" style="font-size: 10px;">
    Free Form for Other Pacific Islander
</label>
<Modal
  idName="AppFreeRace3"
  modalTitle="Applicant Race: Free Form for Other Pacific Islander"
  modalBody="<p> Specify in text the Applicant's or Borrower's Other Pacific
  Islander race(s) provided by the Applicant or Borrower. </p> <p>Otherwise,
  leave this data field blank</p>" />
<input
  class="form-control"
  type="text"
  id="RaceFree3"
  bind:value={$applicantRaceOther3}
  on:change={applicantRaceOther3.change} />
<!-- If any of the race reportings are 44, show an organge validation warning to suggest that more detail might be necessary-->
{#if $applicantRace1 == 44 || $applicantRace2 == 44 || $applicantRace3 == 44 || $applicantRace4 == 44 || $applicantRace5 == 44}
  {#if $applicantRaceOther3 == ''}
    <HRValidation isWarning={true}/>
  {/if}
{/if}