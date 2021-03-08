<script>
    import {
      NoCoApp,
      coapplicantAge,
      coapplicantEthBasis,
      coapplicantRaceBasis,
      coapplicantSexBasis,
      coapplicantEth1,
      coapplicantEth2,
      coapplicantEth3,
      coapplicantEth4,
      coapplicantEth5,
      coapplicantEthOther,
      coapplicantRace1,
      coapplicantRace2,
      coapplicantRace3,
      coapplicantRace4,
      coapplicantRace5,
      coapplicantRaceOther1,
      coapplicantRaceOther2,
      coapplicantRaceOther3,
      coapplicantSex,
      coapplicantCreditModel,
      coapplicantCreditScore
    } from "./../../stores.js";

    import NoCoAppCheckbox from "../NoCoAppCheckbox.svelte";
    import Modal from "../Modal.svelte";

    async function coAppChanged() {
    if ($NoCoApp) {
      coapplicantEthBasis.change(await formatChange("4")); 
      coapplicantRaceBasis.change(await formatChange("4"));
      coapplicantSexBasis.change(await formatChange("4"));
      coapplicantEth1.change(await formatChange("5"));
      coapplicantEth2.change(await formatChange(""));
      coapplicantEth3.change(await formatChange(""));
      coapplicantEth4.change(await formatChange(""));
      coapplicantEth5.change(await formatChange(""));
      coapplicantEthOther.change(await formatChange(""));
      coapplicantRace1.change(await formatChange("8"));
      coapplicantRace2.change(await formatChange(""));
      coapplicantRace3.change(await formatChange(""));
      coapplicantRace4.change(await formatChange(""));
      coapplicantRace5.change(await formatChange(""));
      coapplicantRaceOther1.change(await formatChange(""));
      coapplicantRaceOther2.change(await formatChange(""));
      coapplicantRaceOther3.change(await formatChange(""));
      coapplicantSex.change(await formatChange("5"));
      coapplicantAge.changed(await formatChange("9999"));
      coapplicantCreditModel.change(await formatChange("10"));
      coapplicantCreditScore.change(await formatChange("9999"));
    } else {
      coapplicantEthBasis.change(await formatChange(""));
      coapplicantRaceBasis.change(await formatChange(""));
      coapplicantSexBasis.change(await formatChange(""));
      coapplicantEth1.change(await formatChange(""));
      coapplicantEth2.change(await formatChange(""));
      coapplicantEth3.change(await formatChange(""));
      coapplicantEth4.change(await formatChange(""));
      coapplicantEth5.change(await formatChange(""));
      coapplicantEthOther.change(await formatChange(""));
      coapplicantRace1.change(await formatChange(""));
      coapplicantRace2.change(await formatChange(""));
      coapplicantRace3.change(await formatChange(""));
      coapplicantRace4.change(await formatChange(""));
      coapplicantRace5.change(await formatChange(""));
      coapplicantRaceOther1.change(await formatChange(""));
      coapplicantRaceOther2.change(await formatChange(""));
      coapplicantRaceOther3.change(await formatChange(""));
      coapplicantSex.change(await formatChange(""));
      coapplicantAge.changed(await formatChange(""));
      coapplicantCreditModel.change(await formatChange(""));
      coapplicantCreditScore.change(await formatChange(""));
    }

    async function formatChange(e) {
      //have to format to match how it would be passed if this was being changed via the input element
      return {
        target: {value: e}
      }
    }
  }
</script>

<label for="noCoApp" class="mr-2 mb-1" style="font-size: 14px;">
    No Co-Applicant
  </label>
  <NoCoAppCheckbox
    value={$NoCoApp}
    on:notify={NoCoApp.changed}
    on:notify={coAppChanged}
    on:notify={coapplicantAge.NA}
    text="" />
  <Modal
    idName="NoCoAppModal"
    modalTitle="No Co-Applicant"
    modalBody="<p>Checking this box will automatically set fields relative to
    the co-applicant as not applicable or the applicable code.</p>" />