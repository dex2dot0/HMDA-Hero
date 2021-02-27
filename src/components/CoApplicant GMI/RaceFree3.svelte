<script>
    import {
        coapplicantRaceOther3,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="CoAppFreeRace3" style="font-size: 9px;">
    Free Form for Other Pacific Islander
  </label>
  <Modal
    idName="CoAppFreeRace3"
    modalTitle="Co-Applicant: Free Form for Other Pacific Islander"
    modalBody="<p> Specify in text the Co-Applicant's or Co-Borrower's Other
    Pacific Islander race(s) provided by the Applicant or Borrower. </p>
    <p>Otherwise, leave this data field blank</p>" />
  <input
    class="form-control"
    type="text"
    id="CoRaceFree3"
    bind:value={$coapplicantRaceOther3}
    on:change={coapplicantRaceOther3.change}
    disabled={$NoCoApp} />