<script>
    import {
      applicantRaceOther3
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
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