<script>
  import {
    NoCoApp,
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
    coapplicantAge,
    coapplicantCreditModel,
    coapplicantCreditScore,
    coapplicantCreditModelOther,
    isExempt
  } from "./../../stores.js";
  import Modal from "../Modal.svelte";
  import Checkbox from "../Checkbox.svelte";
  import HRValidation from "../HRValidation.svelte";
  import { getSetting } from "../../Excel Scripts/getSetting.js";
  import NoCoAppCheckbox from "../NoCoAppCheckbox.svelte";

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

  function coappCreditCheckBoxChecked(updated) {
    switch (updated) {
      case "coappScoreNoCoApp":
        coappScoreNAN.set(false);
        coappScoreNA.set(false);
        coappScoreExempt.set(false);
        break;
      case "coappScoreNAN":
        coappScoreNA.set(false);
        coappScoreExempt.set(false);
        coappScoreNAN.set(true);
        $NoCoApp ? NoCoApp.changed(false) : "";
        break;
      case "coappScoreNA":
        coappScoreNAN.set(false);
        coappScoreExempt.set(false);
        coappScoreNA.set(true);
        $NoCoApp ? NoCoApp.changed(false) : "";
        break;
      case "coappScoreExempt":
        coappScoreNAN.set(false);
        coappScoreNA.set(false);
        coappScoreExempt.set(true);
        $NoCoApp ? NoCoApp.changed(false) : "";
        break;
    }
  }

  function coappCreditCheckBoxUnchecked(updated) {
    switch (updated) {
      case "coappScoreNAN":
        coappScoreNAN.set(false);
        break;
      case "coappScoreNA":
        coappScoreNA.set(false);
        break;
      case "coappScoreExempt":
        coappScoreExempt.set(false);
        break;
    }
  }
</script>

<style>
  label {
    font-weight: bold;
    font-size: 11px;
  }
  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    background-color: #eee;
  }
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
    <!-- No Co-Applicant Checkbox -->
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
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity Collection Basis -->
    <label for="EthBasis">Ethnicity</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantEthBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="EthBasis"
      bind:value={$coapplicantEthBasis}
      on:change={coapplicantEthBasis.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
      {#if $NoCoApp}
        <option value="4" selected>4. No co-applicant</option>
      {:else}
        <option value="4">4. No co-applicant</option>
      {/if}
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- Co-Borrower Race Collection Basis -->
    <label for="CoRaceBasis">Race</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantRaceBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="CoRaceBasis"
      bind:value={$coapplicantRaceBasis}
      on:change={coapplicantRaceBasis.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
      {#if $NoCoApp}
        <option value="4" selected>4. No co-applicant</option>
      {:else}
        <option value="4">4. No co-applicant</option>
      {/if}
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- Co-Borrower Sex Collection Basis -->
    <label for="CoSexBasis">Sex</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantSexBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="CoSexBasis"
      bind:value={$coapplicantSexBasis}
      on:change={coapplicantSexBasis.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
      {#if $NoCoApp}
        <option value="4" selected>4. No co-applicant</option>
      {:else}
        <option value="4">4. No co-applicant</option>
      {/if}
    </select>
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Ethnicity - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-4">
    <label for="CoEth1">Ethnicity 1</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantEth1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="CoEth1"
      bind:value={$coapplicantEth1}
      on:change={coapplicantEth1.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
      <option value="3">
        3. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="4">4. Not applicable</option>
      {#if $NoCoApp}
        <option value="5" selected>5. No co-applicant</option>
      {:else}
        <option value="5">5. No co-applicant</option>
      {/if}
    </select>

    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity 2 -->
    <label for="CoEth2">Ethnicity 2</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoEth2"
      bind:value={$coapplicantEth2}
      on:change={coapplicantEth2.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity 3 -->
    <label for="CoEth3">Ethnicity 3</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoEth3"
      bind:value={$coapplicantEth3}
      on:change={coapplicantEth3.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity 4 -->
    <label for="CoEth4">Ethnicity 4</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoEth4"
      bind:value={$coapplicantEth4}
      on:change={coapplicantEth4.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity 5 -->
    <label for="CoEth5">Ethnicity 5</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoEth5"
      bind:value={$coapplicantEth5}
      on:change={coapplicantEth5.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. Hispanic or Latino</option>
      <option value="11">11. Mexican</option>
      <option value="12">12. Puerto Rican</option>
      <option value="13">13. Cuban</option>
      <option value="14">14. Other Hispanic or Latino</option>
      <option value="2">2. Not Hispanic or Latino</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- CoApp Ethnicity Free Form -->
    <label for="CoEthFree" style="font-size: 8px;">
      Free Form for Other Hispanic or Latino
    </label>
    <Modal
      idName="CoAppEthFreeModal"
      modalTitle="Co-Applicant Ethnicity: Free Form for Other Hispanic or Latino"
      modalBody="<p> Specify in text the Co-Applicant or Co-Borrower's Other
      Hispanic or Latino ethnicity(ies) provided by the Co-Applicant or
      Co-Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
    <input
      class="form-control"
      type="text"
      id="CoEthFree"
      bind:value={$coapplicantEthOther}
      on:change={coapplicantEthOther.change}
      disabled={$NoCoApp} />
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Race - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race 1 -->
    <label for="CoRace1">Race 1</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantRace1 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="CoRace1"
      bind:value={$coapplicantRace1}
      on:change={coapplicantRace1.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
      <option value="6">
        6. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="7">7. NA</option>
      {#if $NoCoApp}
        <option value="8" selected>8. No Co-Applicant</option>
      {:else}
        <option value="8">8. No Co-Applicant</option>
      {/if}
    </select>

    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race 2 -->
    <label for="CoRace2">Race 2</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoRace2"
      bind:value={$coapplicantRace2}
      on:change={coapplicantRace2.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race 3 -->
    <label for="CoRace3">Race 3</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoRace3"
      bind:value={$coapplicantRace3}
      on:change={coapplicantRace3.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race 4 -->
    <label for="CoRace4">Race 4</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoRace4"
      bind:value={$coapplicantRace4}
      on:change={coapplicantRace4.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race 5 -->
    <label for="CoRace5">Race 5</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="CoRace5"
      bind:value={$coapplicantRace5}
      on:change={coapplicantRace5.change}
      disabled={$NoCoApp}>
      <option selected value="">Blank, If none are applicable</option>
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race Free Form American Indian or Alaskan Native -->
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
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Race Free Form Other Asian -->
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
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Co-App Race Free Form Other Pacific Islander -->
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
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Age/Sex - Co-Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-6">
    <!-- Co-App Sex -->
    <label for="CoSex">Sex</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$coapplicantSex > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="CoSex"
      bind:value={$coapplicantSex}
      on:change={coapplicantSex.change}
      disabled={$NoCoApp}>
      <option />
      <option value="1">1. Male</option>
      <option value="2">2. Female</option>
      <option value="3">
        3. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="4">4. Not applicable</option>
      {#if $NoCoApp}
        <option value="5" selected>5. Not co-applicant</option>
      {:else}
        <option value="5">5. Not co-applicant</option>
      {/if}
      <option value="6">6. Applicant selected both male and female</option>
    </select>

    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-6">
    <!-- Co-App Age -->
    <label for="CoAge">Age or</label>
    {#if $coapplicantAge !== 'NA'}
      <Checkbox value={false} on:notify={coapplicantAge.NA} />
    {:else}
      <Checkbox value={true} on:notify={coapplicantAge.NA} />
    {/if}
    <Modal
      idName="CoAppAgeModal"
      modalTitle="Co-Applicant: Age"
      modalBody="<p>Example: 24</p> <p>(or)</p> <p>Descriptions:</p> <p>8888.
      Not applicable</p> <p>9999. No co-applicant</p> " />
    <input
      class="form-control"
      type="text"
      id="CoAge"
      bind:value={$coapplicantAge}
      on:change={coapplicantAge.changed}
      disabled={$NoCoApp} />
    {#if $coapplicantAge > 0 || $coapplicantAge === 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
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
          <!-- Credit Score of Co-App -->
          <label for="CreditScore2">Credit Score</label>
          <input
            class="ml-3 mr-3"
            type="text"
            disabled={$NoCoApp}
            bind:value={$coapplicantCreditScore}
            on:change={coapplicantCreditScore.change}
            id="CreditScore2"
            style="max-width: 20%;" />

          <label for="coappScoreNAN">Not a #</label>
          <input
            type="checkbox"
            id="coappScoreNAN"
            tabindex="-1"
            checked={$coapplicantCreditScore == '7777' ? true : false}
            on:change={coapplicantCreditScore.NAN}/>

          <label for="coappScoreNA">NA</label>
          <input
            type="checkbox"
            id="coappScoreNA"
            tabindex="-1"
            checked={$coapplicantCreditScore == '8888' ? true : false}
            on:change={coapplicantCreditScore.NA} />

          <label for="coappScoreExempt">Exempt</label>
          <input
            type="checkbox"
            id="coappScoreExempt"
            tabindex="-1"
            checked={$coapplicantCreditScore == '1111' ? true : false}
            on:change={coapplicantCreditScore.Exempt} />
          <div class="col-sm-12 col-md-6">
            {#if Number($coapplicantCreditScore) > 0 && $coapplicantCreditScore.length < 5}
              <HRValidation isValid={true} />
            {:else}
              <HRValidation />
            {/if}
          </div>
          <!--****************** -->
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-6">
      <!-- Co-App Credit Version & Model -->
      <label for="CreditModel2" style="font-size: 9px;">
        Co-Applicant Name & Version of Credit Scoring Model
      </label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$coapplicantCreditModel > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="CreditModel2"
        disabled={$NoCoApp}
        bind:value={$coapplicantCreditModel}
        on:change={coapplicantCreditModel.change}>
        <option />
        <option value="1">1.Equifax Beacon 5.0</option>
        <option value="2">2.Experian Fair Isaac</option>
        <option value="3">3.FICO Risk Score Classic 04</option>
        <option value="4">4.FICO Risk Score Classic 98</option>
        <option value="5">5.VantageScore 2.0</option>
        <option value="6">6.VantageScore 3.0</option>
        <option value="7">7.More than one credit scoring model</option>
        <option value="8">8.Other model</option>
        <option value="9">9.Not applicable</option>
        {#if $NoCoApp}
          <option value="10" selected>10.No co-applicant</option>
        {:else}
          <option value="10">10.No co-applicant</option>
        {/if}
      </select>

      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-6">
      <!-- Co-App Credit Version & Model Free Form -->
      <label for="CreditModelFree" style="font-size: 9px;">
        Co-Applicant Free Form Version of Credit Scoring Model
      </label>
      <Modal
        idName="CoAppCBRModal"
        modalTitle="Co-Applicant Free Form Version of Credit Scoring Model"
        modalBody="<p> Specify in text the co-applicant or co-borrower's Other
        credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
        field blank</p>" />
      <input
        class="form-control"
        type="text"
        id="CreditModelFree"
        bind:value={$coapplicantCreditModelOther}
        on:change={coapplicantCreditModelOther.change}
        disabled={$NoCoApp} />

      {#if $coapplicantCreditModel == 8}
        {#if $coapplicantCreditModelOther !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      {/if}
      <!--****************** -->
    </div>
  </div>
{/if}
