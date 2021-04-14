<script>
    import {
        coapplicantRaceOther1,
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

<label for="CoRaceFree1" style="font-size: 9px;">
    Free Form Am Indian or AK Native
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
<!-- If any of the race reportings are 1, show an organge validation warning to suggest that more detail might be necessary-->
{#if $coapplicantRace1 == 1 || $coapplicantRace2 == 1 || $coapplicantRace3 == 1 || $coapplicantRace4 == 1 || $coapplicantRace5 == 1}
    {#if $coapplicantRaceOther1 == ''} 
        <HRValidation isWarning={true}/>
    {/if}
{/if}