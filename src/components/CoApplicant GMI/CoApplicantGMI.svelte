<script>
  import {
    isExempt
  } from "./../../stores.js";

  import { getSetting } from "../../Excel Scripts/getSetting.js";

  import NoCoApp from "./NoCoApp.svelte";
  import EthBasis from "./EthBasis.svelte";
  import RaceBasis from "./RaceBasis.svelte";
  import SexBasis from "./SexBasis.svelte";
  import Eth1 from "./Eth1.svelte";
  import Eth2 from "./Eth2.svelte";
  import Eth3 from "./Eth3.svelte";
  import Eth4 from "./Eth4.svelte";
  import Eth5 from "./Eth5.svelte";
  import EthFree from "./EthFree.svelte";
  import Race1 from "./Race1.svelte";
  import Race2 from "./Race2.svelte";
  import Race3 from "./Race3.svelte";
  import Race4 from "./Race4.svelte";
  import Race5 from "./Race5.svelte";
  import RaceFree1 from "./RaceFree1.svelte";
  import RaceFree2 from "./RaceFree2.svelte";
  import RaceFree3 from "./RaceFree3.svelte";
  import Sex from "./Sex.svelte";
  import Age from "./Age.svelte";
  import CreditScore from "./CreditScore.svelte";
  import CreditModel from "./CreditModel.svelte";
  import CreditModelFree from "./CreditModelFree.svelte";

  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function () {
        //Attempt to pull Exemption from Excel Settings
        let exemptSetting = await getSetting('EXEMPT');
        if (exemptSetting) {
          isExempt.set(exemptSetting);
        }
      });
    }
  })();

  // function coappCreditCheckBoxChecked(updated) {
  //   switch (updated) {
  //     case "coappScoreNoCoApp":
  //       coappScoreNAN.set(false);
  //       coappScoreNA.set(false);
  //       coappScoreExempt.set(false);
  //       break;
  //     case "coappScoreNAN":
  //       coappScoreNA.set(false);
  //       coappScoreExempt.set(false);
  //       coappScoreNAN.set(true);
  //       $NoCoApp ? NoCoApp.changed(false) : "";
  //       break;
  //     case "coappScoreNA":
  //       coappScoreNAN.set(false);
  //       coappScoreExempt.set(false);
  //       coappScoreNA.set(true);
  //       $NoCoApp ? NoCoApp.changed(false) : "";
  //       break;
  //     case "coappScoreExempt":
  //       coappScoreNAN.set(false);
  //       coappScoreNA.set(false);
  //       coappScoreExempt.set(true);
  //       $NoCoApp ? NoCoApp.changed(false) : "";
  //       break;
  //   }
  // }

  // function coappCreditCheckBoxUnchecked(updated) {
  //   switch (updated) {
  //     case "coappScoreNAN":
  //       coappScoreNAN.set(false);
  //       break;
  //     case "coappScoreNA":
  //       coappScoreNA.set(false);
  //       break;
  //     case "coappScoreExempt":
  //       coappScoreExempt.set(false);
  //       break;
  //   }
  // }
</script>

<style>
  .baseline {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
  }
</style>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Method of Collection - Co-Applicant
</h6>

<div class="row baseline">
  <div class="col">
    <NoCoApp/>
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-md-4">
    <EthBasis/>
  </div>
  <div class="col-sm-12 col-md-4">
    <RaceBasis/>
  </div>
  <div class="col-sm-12 col-md-4">
    <SexBasis/>
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Ethnicity - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-4">
    <Eth1/>
  </div>
  <div class="col-sm-12 col-md-4">
    <Eth2/>
  </div>
  <div class="col-sm-12 col-md-4">
    <Eth3/>
  </div>
  <div class="col-sm-12 col-md-4">
    <Eth4/>
  </div>
  <div class="col-sm-12 col-md-4">
    <Eth5/>
  </div>
  <div class="col-sm-12 col-md-4">
   <EthFree/>
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Race - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <Race1/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <Race2/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <Race3/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <Race4/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <Race5/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <RaceFree1/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <RaceFree2/>
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <RaceFree3/>
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Age/Sex - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-6">
    <Sex/>
  </div>
  <div class="col-sm-12 col-md-6">
    <Age/>
  </div>
</div>

{#if !$isExempt}
  <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
    Credit - Co-Applicant
  </h6>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col">
          <CreditScore/>
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <CreditModel/>
    </div>
    <div class="col-sm-12 col-md-6">
      <CreditModelFree/>
    </div>
  </div>
{/if}
