<script>
    import {
        coapplicantRaceOther3,
        coapplicantRace1,
        coapplicantRace2,
        coapplicantRace3,
        coapplicantRace4,
        coapplicantRace5,
        NoCoApp
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
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
<!-- If any of the race reportings are 44, show an organge validation warning to suggest that more detail might be necessary-->
{#if $coapplicantRace1 == 44 || $coapplicantRace2 == 44 || $coapplicantRace3 == 44 || $coapplicantRace4 == 44 || $coapplicantRace5 == 44}
    {#if $coapplicantRaceOther3 == ''} 
        <HRValidation isWarning={true}/>
    {/if}
{/if}