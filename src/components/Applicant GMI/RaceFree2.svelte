<script>
    import {
      applicantRaceOther2
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="RaceFree2">Free Form Text for Other Asian</label>
<Modal
  idName="AppFreeRace2"
  modalTitle="Applicant Race: Free Form Text for Other Asian"
  modalBody="<p> Specify in text the Applicant's or Borrower's Other Asian
  race(s) provided by the Applicant or Borrower. </p> <p>Otherwise, leave
  this data field blank</p>" />
<input
  class="form-control"
  type="text"
  id="RaceFree2"
  bind:value={$applicantRaceOther2}
  on:change={applicantRaceOther2.change} />
