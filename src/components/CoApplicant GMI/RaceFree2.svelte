<script>
    import {
        coapplicantRaceOther2,
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
<!-- If any of the race reportings are 27, show an organge validation warning to suggest that more detail might be necessary-->
{#if $coapplicantRace1 == 27 || $coapplicantRace2 == 27 || $coapplicantRace3 == 27 || $coapplicantRace4 == 27 || $coapplicantRace5 == 27}
    {#if $coapplicantRaceOther2 == ''} 
        <HRValidation isWarning={true}/>
    {/if}
{/if}