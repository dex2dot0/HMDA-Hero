<script>
    import {
        coapplicantRaceOther1,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="CoRaceFree1" style="font-size: 8px;">
    Free Form for Am Indian or Alaskan Native
</label>
<Modal
idName="CoAppFreeRace1"
modalTitle="Co-Applicant: Free Form for Am Indian or Alaskan Native"
modalBody="<p> Specify in text the Co-Applicant's or Co-Borrower's
American Indian or Alaska Native Enrolled or Principal Tribe if provided
by the Applicant or Borrower. </p> <p>Otherwise, leave this data field
blank</p>" />
<input
class="form-control"
type="text"
id="CoRaceFree1"
bind:value={$coapplicantRaceOther1}
on:change={coapplicantRaceOther1.change}
disabled={$NoCoApp} />