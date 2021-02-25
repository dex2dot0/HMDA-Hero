<script>
    import {
      applicantRaceOther1
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="RaceFree1" style="font-size: 9px;">
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