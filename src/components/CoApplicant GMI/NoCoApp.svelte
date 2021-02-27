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

    function coAppChanged() {
    if ($NoCoApp) {
      coapplicantEthBasis.set("4");
      coapplicantRaceBasis.set("4");
      coapplicantSexBasis.set("4");
      coapplicantEth1.set("5");
      coapplicantEth2.set("");
      coapplicantEth3.set("");
      coapplicantEth4.set("");
      coapplicantEth5.set("");
      coapplicantEthOther.set("");
      coapplicantRace1.set("8");
      coapplicantRace2.set("");
      coapplicantRace3.set("");
      coapplicantRace4.set("");
      coapplicantRace5.set("");
      coapplicantRaceOther1.set("");
      coapplicantRaceOther2.set("");
      coapplicantRaceOther3.set("");
      coapplicantSex.set("5");
      coapplicantAge.set("9999");
      coapplicantCreditModel.set("10");
      coapplicantCreditScore.set("9999");
    } else {
      coapplicantEthBasis.set("");
      coapplicantRaceBasis.set("");
      coapplicantSexBasis.set("");
      coapplicantEth1.set("");
      coapplicantEth2.set("");
      coapplicantEth3.set("");
      coapplicantEth4.set("");
      coapplicantEth5.set("");
      coapplicantEthOther.set("");
      coapplicantRace1.set("");
      coapplicantRace2.set("");
      coapplicantRace3.set("");
      coapplicantRace4.set("");
      coapplicantRace5.set("");
      coapplicantRaceOther1.set("");
      coapplicantRaceOther2.set("");
      coapplicantRaceOther3.set("");
      coapplicantSex.set("");
      coapplicantAge.set("");
      coapplicantCreditModel.set("");
      coapplicantCreditScore.set("");
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