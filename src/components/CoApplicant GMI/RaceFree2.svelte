<script>
    import {
        coapplicantRaceOther2,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="CoAppRaceFree2">Free Form Text for Other Asian</label>
<Modal
  idName="CoAppFreeRace2"
  modalTitle="Co-Applicant Race: Free Form Text for Other Asian"
  modalBody="<p> Specify in text the Co-Applicant's or Co-Borrower's Other
  Asian race(s) provided by the Co-Applicant or Co-Borrower. </p>
  <p>Otherwise, leave this data field blank</p>" />
<input
  class="form-control"
  type="text"
  id="RaceFree2"
  bind:value={$coapplicantRaceOther2}
  on:change={coapplicantRaceOther2.change}
  disabled={$NoCoApp} />