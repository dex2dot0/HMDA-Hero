<script>
  import {
    applicantEthBasis,
    applicantRaceBasis,
    applicantSexBasis,
    applicantEth1,
    applicantEth2,
    applicantEth3,
    applicantEth4,
    applicantEth5,
    applicantEthOther,
    applicantRace1,
    applicantRace2,
    applicantRace3,
    applicantRace4,
    applicantRace5,
    applicantRaceOther1,
    applicantRaceOther2,
    applicantRaceOther3,
    applicantSex,
    applicantAge,
    applicantCreditModel,
    applicantCreditModelOther,
    applicantCreditScore,
    appScoreNAN,
    appScoreNA,
    appScoreExempt,
    isExempt
  } from "../stores.js";
  import { writable } from "svelte/store";
  import Modal from "../components/Modal.svelte";
  import Checkbox from "../components/Checkbox.svelte";
  import HRValidation from "../components/HRValidation.svelte";

  function appCreditCheckBoxChecked(updated) {
    switch (updated) {
      case "appScoreNAN":
        appScoreNA.set(false);
        appScoreExempt.set(false);
        appScoreNAN.set(true);
        break;
      case "appScoreNA":
        appScoreNAN.set(false);
        appScoreExempt.set(false);
        appScoreNA.set(true);
        break;
      case "appScoreExempt":
        appScoreNAN.set(false);
        appScoreNA.set(false);
        appScoreExempt.set(true);
        break;
    }
  }

  function appCreditCheckBoxUnchecked(updated) {
    switch (updated) {
      case "appScoreNAN":
        appScoreNAN.set(false);
        break;
      case "appScoreNA":
        appScoreNA.set(false);
        break;
      case "appScoreExempt":
        appScoreExempt.set(false);
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
</style>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Method of Collection - Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-4">
    <!-- Borrower Ethnicity Collection Basis -->
    <label for="EthBasis">Ethnicity</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantEthBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="EthBasis"
      bind:value={$applicantEthBasis}
      on:change={applicantEthBasis.change}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- Borrower Race Collection Basis -->
    <label for="RaceBasis">Race</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantRaceBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="RaceBasis"
      bind:value={$applicantRaceBasis}
      on:change={applicantRaceBasis.change}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- Sex Collection Basis -->
    <label for="SexBasis">Sex</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantSexBasis > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="SexBasis"
      bind:value={$applicantSexBasis}
      on:change={applicantSexBasis.change}>
      <option />
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
    </select>
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Ethnicity - Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-4">
    <!-- Ethnicity 1 -->
    <label for="Eth1">Ethnicity 1</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantEth1 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Eth1"
      bind:value={$applicantEth1}
      on:change={applicantEth1.change}>
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
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-4">
    <!-- Ethnicity 2 -->
    <label for="Eth2">Ethnicity 2</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth2"
      bind:value={$applicantEth2}
      on:change={applicantEth2.change}>
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
    <!-- Ethnicity 3 -->
    <label for="Eth3">Ethnicity 3</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth3"
      bind:value={$applicantEth3}
      on:change={applicantEth3.change}>
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
    <!-- Ethnicity 4 -->
    <label for="Eth4">Ethnicity 4</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth4"
      bind:value={$applicantEth4}
      on:change={applicantEth4.change}>
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
    <!-- Ethnicity 5 -->
    <label for="Eth5">Ethnicity 5</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Eth5"
      bind:value={$applicantEth5}
      on:change={applicantEth5.change}>
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
    <!-- Ethnicity Free Form -->
    <label for="EthFree" style="font-size: 9px;">
      Free Form for Other Hispanic or Latino
    </label>
    <Modal
      idName="AppEthFreeModal"
      modalTitle="Ethnicity: Free Form for Other Hispanic or Latino"
      modalBody="<p> Specify in text the Applicant or borrower's Other Hispanic
      or Latino ethnicity(ies) provided by the Applicant or Borrower. </p>
      <p>Otherwise, leave this data field blank</p>" />
    <input
      class="form-control"
      type="text"
      id="EthFree"
      bind:value={$applicantEthOther}
      on:change={applicantEthOther.change} />
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Race - Applicant
</h6>
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Race 1 -->
    <label for="Race1">Race 1</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantRace1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Race1"
      bind:value={$applicantRace1}
      on:change={applicantRace1.change}>
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
    </select>
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Race 2 -->
    <label for="Race2">Race 2</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Race2"
      bind:value={$applicantRace2}
      on:change={applicantRace2.change}>
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
    <!-- Race 3 -->
    <label for="Race3">Race 3</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Race3"
      bind:value={$applicantRace3}
      on:change={applicantRace3.change}>
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
    <!-- Race 4 -->
    <label for="Race4">Race 4</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Race4"
      bind:value={$applicantRace4}
      on:change={applicantRace4.change}>
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
    <!-- Race 5 -->
    <label for="Race5">Race 5</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="custom-select"
      id="Race5"
      bind:value={$applicantRace5}
      on:change={applicantRace5.change}>
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
    <!-- Race Free Form American Indian or Alaskan Native -->
    <label for="RaceFree1" style="font-size: 9px;">
      Free Form for Am Indian or Alaskan Native
    </label>
    <Modal
      idName="AppFreeRace1"
      modalTitle="Applicant: Free Form for Am Indian or Alaskan Native"
      modalBody="<p> Specify in text the Applicant's or Borrower's American
      Indian or Alaska Native Enrolled or Principal Tribe if provided by the
      Applicant or Borrower. </p> <p>Otherwise, leave this data field blank</p>" />
    <input
      class="form-control"
      type="text"
      id="RaceFree1"
      bind:value={$applicantRaceOther1}
      on:change={applicantRaceOther1.change} />
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Race Free Form Other Asian -->
    <label for="RaceFree2">Free Form Text for Other Asian</label>
    <Modal
      idName="AppFreeRace2"
      modalTitle="Applicant Race: Free Form Text for Other Asian"
      modalBody="<p> Specify in text the Applicant's or Borrower's Other Asian
      race(s) provided by the Applicant or Borrower. </p> <p>Otherwise, leave
      this data field blank</p>" />
    <input
      class="form-control"
      type="text"
      id="RaceFree2"
      bind:value={$applicantRaceOther2}
      on:change={applicantRaceOther2.change} />
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <!-- Race Free Form Other Pacific Islander -->
    <label for="RaceFree3" style="font-size: 10px;">
      Free Form for Other Pacific Islander
    </label>
    <Modal
      idName="AppFreeRace3"
      modalTitle="Applicant Race: Free Form for Other Pacific Islander"
      modalBody="<p> Specify in text the Applicant's or Borrower's Other Pacific
      Islander race(s) provided by the Applicant or Borrower. </p> <p>Otherwise,
      leave this data field blank</p>" />
    <input
      class="form-control"
      type="text"
      id="RaceFree3"
      bind:value={$applicantRaceOther3}
      on:change={applicantRaceOther3.change} />
    <!--****************** -->
  </div>
</div>

<h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
  Age/Sex - Applicant
</h6>
<div class="row">
  <div class="col-sm-12 col-md-6">
    <!-- Sex -->
    <label for="Sex">Sex</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$applicantSex > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Sex"
      bind:value={$applicantSex}
      on:change={applicantSex.change}>
      <option />
      <option value="1">1. Male</option>
      <option value="2">2. Female</option>
      <option value="3">
        3. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="4">4. Not applicable</option>
      <option value="6">6. Applicant selected both male and female</option>
    </select>

    <!--****************** -->
  </div>
  <div class="col-sm-12 col-md-6">
    <!-- Age -->
    <label for="Age">Age or NA</label>
    {#if $applicantAge !== 'NA'}
      <Checkbox value={false} on:notify={applicantAge.NA} />
    {:else}
      <Checkbox value={true} on:notify={applicantAge.NA} />
    {/if}
    <Modal
      idName="AppAgeModal"
      modalTitle="Age"
      modalBody="<p>Example: 24</p> <p>(or)</p> <p>Descriptions:</p> <p>8888.
      Not Applicable</p>" />
    <input
      class="form-control"
      type="text"
      id="Age"
      bind:value={$applicantAge}
      on:change={applicantAge.changed} />
    {#if $applicantAge > 0 || $applicantAge == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
</div>

{#if !$isExempt}
  <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
    Credit - Applicant
  </h6>
  <div class="row">
    <div class="col-12">
      <!-- Credit Score -->
      <label for="CreditScore1">Score</label>
      <input
        class="ml-3 mr-3"
        type="text"
        id="CreditScore1"
        bind:value={$applicantCreditScore}
        style="max-width: 20%;" />

      <label for="appScoreNAN">Not a #</label>
      <input
        type="checkbox"
        id="appScoreNAN"
        tabindex="-1"
        checked={$appScoreNAN}
        on:change={function(event) {
          let cs1 = document.getElementById('CreditScore1');
          if (event.target.checked) {
            cs1.value = '7777';
            applicantCreditScore.set('7777');
            appCreditCheckBoxChecked('appScoreNAN');
          } else {
            cs1.value = '';
            applicantCreditScore.set('');
            appCreditCheckBoxUnchecked('appScoreNAN');
          }
        }} />

      <label for="appScoreNA">NA</label>
      <input
        type="checkbox"
        id="appScoreNA"
        tabindex="-1"
        checked={$appScoreNA}
        on:change={function(event) {
          let cs1 = document.getElementById('CreditScore1');
          if (event.target.checked) {
            cs1.value = '8888';
            applicantCreditScore.set('8888');
            appCreditCheckBoxChecked('appScoreNA');
          } else {
            cs1.value = '';
            applicantCreditScore.set('');
            appCreditCheckBoxUnchecked('appScoreNA');
          }
        }} />

      <label for="appScoreExempt">Exempt</label>
      <input
        type="checkbox"
        id="appScoreExempt"
        tabindex="-1"
        checked={$appScoreExempt}
        on:change={function(event) {
          let cs1 = document.getElementById('CreditScore1');
          if (event.target.checked) {
            cs1.value = '1111';
            applicantCreditScore.set('1111');
            appCreditCheckBoxChecked('appScoreExempt');
          } else {
            cs1.value = '';
            applicantCreditScore.set('');
            appCreditCheckBoxUnchecked('appScoreExempt');
          }
        }} />
      <div class="col-sm-12 col-md-6">
        {#if $applicantCreditScore !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      </div>
      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-6">
      <!-- Credit Version & Model -->
      <label for="CreditModel1" style="font-size: 10px">
        Applicant Name & Version of Credit Scoring Model
      </label>
      <select
        class={$applicantCreditModel > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="CreditModel1"
        bind:value={$applicantCreditModel}>
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
        <option value="1111">1111.Exempt</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-6">
      <!-- Credit Version & Model Free Form -->
      <label for="CreditModel1Free" style="font-size: 10px;">
        Applicant Free Form Version of Credit Scoring Model
      </label>
      <Modal
        idName="AppCBRModal"
        modalTitle="Applicant Free Form Version of Credit Scoring Model"
        modalBody="<p> Specify in text the applicant's or borrower's Other
        credit scoring model if 8 is entered. </p> <p>Otherwise, leave this data
        field blank</p>" />
      <input
        class="form-control"
        type="text"
        id="CreditModel1Free"
        bind:value={$applicantCreditModelOther} />
      {#if $applicantCreditModel == 8}
        {#if $applicantCreditModelOther !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      {/if}
      <!--****************** -->
    </div>
  </div>
{/if}
