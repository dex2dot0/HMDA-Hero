<script>
  import {
    isExempt,
    NoCoApp,
    income,
    hoepa,
    applicantCreditModel,
    applicantCreditModelOther,
    coapplicantCreditModel,
    coapplicantCreditModelOther,
    applicantCreditScore,
    coapplicantCreditScore,
    DTI,
    CLTV,
    ausSystem1,
    ausSystem2,
    ausSystem3,
    ausSystem4,
    ausSystem5,
    ausSystemOther,
    ausResult1,
    ausResult2,
    ausResult3,
    ausResult4,
    ausResult5,
    ausResultOther,
    appScoreNAN,
    appScoreNA,
    appScoreExempt,
    coappScoreNAN,
    coappScoreNA,
    coappScoreExempt
  } from "../stores.js";
  import { writable } from "svelte/store";
  import Modal from "../components/Modal.svelte";
  import HRValidation from "../components/HRValidation.svelte";
  import NoCoAppCheckbox from "../components/NoCoAppCheckbox.svelte";

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
</style>

{#if $isExempt}
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <!-- Income -->
      <label for="Income">Income</label>
      <input
        class="form-control"
        type="text"
        id="Income"
        bind:value={$income}
        on:change={income.change}
        placeholder="ex. 36 (or) NA" />
      {#if $income !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-6">
      <!-- HOEPA Status -->
      <label for="HOEPA">HOEPA Status</label>
      <select
        class={$hoepa > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="HOEPA"
        bind:value={$hoepa}>
        <option />
        <option value="1">1. High-cost mortgage</option>
        <option value="2">2. Not a high-cost mortgage</option>
        <option value="3">3. Not applicable</option>
      </select>
      <!--****************** -->
    </div>
  </div>
{/if}

{#if !$isExempt}
  <div class="row">
    <div class="col-6 col-md-3">
      <!-- Income -->
      <label for="Income">Income</label>
      <input
        class="form-control"
        type="text"
        id="Income"
        bind:value={$income}
        on:change={income.change}
        placeholder="ex. 36 (or) NA" />
      {#if $income !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- HOEPA Status -->
      <label for="HOEPA">HOEPA Status</label>
      <select
        class={$hoepa > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="HOEPA"
        bind:value={$hoepa}>
        <option />
        <option value="1">1. High-cost mortgage</option>
        <option value="2">2. Not a high-cost mortgage</option>
        <option value="3">3. Not applicable</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- DTI -->
      <label for="DTI">Debt-to-Income Ratio</label>
      <input
        class="form-control"
        type="text"
        id="DTI"
        bind:value={$DTI}
        placeholder=" ex. 42.95 (or) NA (or) Exempt" />
      {#if $DTI !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- CLTV -->
      <label for="CLTV">CLTV Ratio</label>
      <input
        class="form-control"
        type="text"
        id="CLTV"
        bind:value={$CLTV}
        title="ex. 80.05 (or) NA(or) Exempt" />
      {#if $CLTV !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
        Automated Underwriting System
      </h6>
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS 1 -->
      <label for="AUS1">AUS System: 1</label>
      <select
        class={$ausSystem1 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="AUS1"
        bind:value={$ausSystem1}>
        <option />
        <option value="1111">1111.Exempt</option>
        <option value="1">1.Desktop Underwriter (DU)</option>
        <option value="2">
          2.Loan Prospector (LP) or Loan Product Advisor
        </option>
        <option value="3">
          3.Technology Open to Approved Lenders (TOTAL) Scorecard
        </option>
        <option value="4">4.Guaranteed Underwriting System (GUS)</option>
        <option value="5">5.Other</option>
        <option value="6">6.Not applicable</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS 2 -->
      <label for="AUS2">AUS System: 2</label>
      <select class="custom-select" id="AUS2" bind:value={$ausSystem2}>
        <option />
        <option value="1">1.Desktop Underwriter (DU)</option>
        <option value="2">
          2.Loan Prospector (LP) or Loan Product Advisor
        </option>
        <option value="3">
          3.Technology Open to Approved Lenders (TOTAL) Scorecard
        </option>
        <option value="4">4.Guaranteed Underwriting System (GUS)</option>
        <option value="5">5.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS 3 -->
      <label for="AUS3">AUS System: 3</label>
      <select class="custom-select" id="AUS3" bind:value={$ausSystem3}>
        <option />
        <option value="1">1.Desktop Underwriter (DU)</option>
        <option value="2">
          2.Loan Prospector (LP) or Loan Product Advisor
        </option>
        <option value="3">
          3.Technology Open to Approved Lenders (TOTAL) Scorecard
        </option>
        <option value="4">4.Guaranteed Underwriting System (GUS)</option>
        <option value="5">5.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS 4 -->
      <label for="AUS4">AUS System: 4</label>
      <select class="custom-select" id="AUS4" bind:value={$ausSystem4}>
        <option />
        <option value="1">1.Desktop Underwriter (DU)</option>
        <option value="2">
          2.Loan Prospector (LP) or Loan Product Advisor
        </option>
        <option value="3">
          3.Technology Open to Approved Lenders (TOTAL) Scorecard
        </option>
        <option value="4">4.Guaranteed Underwriting System (GUS)</option>
        <option value="5">5.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS 5 -->
      <label for="AUS5">AUS System: 5</label>
      <select class="custom-select" id="AUS5" bind:value={$ausSystem5}>
        <option />
        <option value="1">1.Desktop Underwriter (DU)</option>
        <option value="2">
          2.Loan Prospector (LP) or Loan Product Advisor
        </option>
        <option value="3">
          3.Technology Open to Approved Lenders (TOTAL) Scorecard
        </option>
        <option value="4">4.Guaranteed Underwriting System (GUS)</option>
        <option value="5">5.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-9">
      <!-- AUS Free Form -->
      <label for="AUSFree">AUS System Free Form Text</label>
      <Modal
        idName="AUSSystemModal"
        modalTitle="AUS System Free Form Text"
        modalBody="<p> Specify in text the Other Automated Underwriting
        System(s) if 5 is entered. </p> <p>Otherwise, leave this data field
        blank</p>" />
      <input
        class="form-control"
        type="text"
        id="AUSFree"
        bind:value={$ausSystemOther} />
      {#if $ausSystem1 == 5 || $ausSystem2 == 5 || $ausSystem3 == 5 || $ausSystem4 == 5 || $ausSystem5 == 5}
        {#if $ausSystemOther !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      {/if}
      <!--****************** -->
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
        Automated Underwriting System Result
      </h6>
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS Result 1 -->
      <label for="AUSR1">AUS Result: 1</label>
      <select
        class={$ausResult1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="AUSR1"
        bind:value={$ausResult1}>
        <option />
        <option value="1111">1111.Exempt</option>
        <option value="1">1.Approve/Eligible</option>
        <option value="2">2.Approve/Ineligible</option>
        <option value="3">3.Refer/Eligible</option>
        <option value="4">4.Refer/Ineligible</option>
        <option value="5">5.Refer with Caution</option>
        <option value="6">6.Out of Scope</option>
        <option value="7">7.Error</option>
        <option value="8">8.Accept</option>
        <option value="9">9.Caution</option>
        <option value="10">10.Ineligible</option>
        <option value="11">11.Incomplete</option>
        <option value="12">12.Invalid</option>
        <option value="13">13.Refer</option>
        <option value="14">14.Eligible</option>
        <option value="15">15.Unable to Determine</option>
        <option value="16">16.Other</option>
        <option value="17">17.Not applicable</option>
        <option value="18">18.Accept/Eligible</option>
        <option value="19">19.Accept/Ineligible</option>
        <option value="20">20.Accept/Unable to Determine</option>
        <option value="21">21.Refer with Caution/Eligible</option>
        <option value="22">22.Refer with Caution/Ineligible</option>
        <option value="23">23.Refer/Unable to Determine</option>
        <option value="24">24.Refer with Caution/Unable to Determine</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS Result 2 -->
      <label for="AUSR2">AUS Result: 2</label>
      <select class="custom-select" id="AUSR2" bind:value={$ausResult2}>
        <option />
        <option value="1">1.Approve/Eligible</option>
        <option value="2">2.Approve/Ineligible</option>
        <option value="3">3.Refer/Eligible</option>
        <option value="4">4.Refer/Ineligible</option>
        <option value="5">5.Refer with Caution</option>
        <option value="6">6.Out of Scope</option>
        <option value="7">7.Error</option>
        <option value="8">8.Accept</option>
        <option value="9">9.Caution</option>
        <option value="10">10.Ineligible</option>
        <option value="11">11.Incomplete</option>
        <option value="12">12.Invalid</option>
        <option value="13">13.Refer</option>
        <option value="14">14.Eligible</option>
        <option value="15">15.Unable to Determine</option>
        <option value="16">16.Other</option>
        <option value="18">18.Accept/Eligible</option>
        <option value="19">19.Accept/Ineligible</option>
        <option value="20">20.Accept/Unable to Determine</option>
        <option value="21">21.Refer with Caution/Eligible</option>
        <option value="22">22.Refer with Caution/Ineligible</option>
        <option value="23">23.Refer/Unable to Determine</option>
        <option value="24">24.Refer with Caution/Unable to Determine</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS Result 3 -->
      <label for="AUSR3">AUS Result: 3</label>
      <select class="custom-select" id="AUSR3" bind:value={$ausResult3}>
        <option />
        <option value="1">1.Approve/Eligible</option>
        <option value="2">2.Approve/Ineligible</option>
        <option value="3">3.Refer/Eligible</option>
        <option value="4">4.Refer/Ineligible</option>
        <option value="5">5.Refer with Caution</option>
        <option value="6">6.Out of Scope</option>
        <option value="7">7.Error</option>
        <option value="8">8.Accept</option>
        <option value="9">9.Caution</option>
        <option value="10">10.Ineligible</option>
        <option value="11">11.Incomplete</option>
        <option value="12">12.Invalid</option>
        <option value="13">13.Refer</option>
        <option value="14">14.Eligible</option>
        <option value="15">15.Unable to Determine</option>
        <option value="16">16.Other</option>
        <option value="18">18.Accept/Eligible</option>
        <option value="19">19.Accept/Ineligible</option>
        <option value="20">20.Accept/Unable to Determine</option>
        <option value="21">21.Refer with Caution/Eligible</option>
        <option value="22">22.Refer with Caution/Ineligible</option>
        <option value="23">23.Refer/Unable to Determine</option>
        <option value="24">24.Refer with Caution/Unable to Determine</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS Result 4 -->
      <label for="AUSR4">AUS Result: 4</label>
      <select class="custom-select" id="AUSR4" bind:value={$ausResult4}>
        <option />
        <option value="1">1.Approve/Eligible</option>
        <option value="2">2.Approve/Ineligible</option>
        <option value="3">3.Refer/Eligible</option>
        <option value="4">4.Refer/Ineligible</option>
        <option value="5">5.Refer with Caution</option>
        <option value="6">6.Out of Scope</option>
        <option value="7">7.Error</option>
        <option value="8">8.Accept</option>
        <option value="9">9.Caution</option>
        <option value="10">10.Ineligible</option>
        <option value="11">11.Incomplete</option>
        <option value="12">12.Invalid</option>
        <option value="13">13.Refer</option>
        <option value="14">14.Eligible</option>
        <option value="15">15.Unable to Determine</option>
        <option value="16">16.Other</option>
        <option value="18">18.Accept/Eligible</option>
        <option value="19">19.Accept/Ineligible</option>
        <option value="20">20.Accept/Unable to Determine</option>
        <option value="21">21.Refer with Caution/Eligible</option>
        <option value="22">22.Refer with Caution/Ineligible</option>
        <option value="23">23.Refer/Unable to Determine</option>
        <option value="24">24.Refer with Caution/Unable to Determine</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-6 col-md-3">
      <!-- AUS Result 5 -->
      <label for="AUSR5">AUS Result: 5</label>
      <select class="custom-select" id="AUSR5" bind:value={$ausResult5}>
        <option />
        <option value="1">1.Approve/Eligible</option>
        <option value="2">2.Approve/Ineligible</option>
        <option value="3">3.Refer/Eligible</option>
        <option value="4">4.Refer/Ineligible</option>
        <option value="5">5.Refer with Caution</option>
        <option value="6">6.Out of Scope</option>
        <option value="7">7.Error</option>
        <option value="8">8.Accept</option>
        <option value="9">9.Caution</option>
        <option value="10">10.Ineligible</option>
        <option value="11">11.Incomplete</option>
        <option value="12">12.Invalid</option>
        <option value="13">13.Refer</option>
        <option value="14">14.Eligible</option>
        <option value="15">15.Unable to Determine</option>
        <option value="16">16.Other</option>
        <option value="18">18.Accept/Eligible</option>
        <option value="19">19.Accept/Ineligible</option>
        <option value="20">20.Accept/Unable to Determine</option>
        <option value="21">21.Refer with Caution/Eligible</option>
        <option value="22">22.Refer with Caution/Ineligible</option>
        <option value="23">23.Refer/Unable to Determine</option>
        <option value="24">24.Refer with Caution/Unable to Determine</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-12 col-md-9">
      <!-- AUS Result Free Form -->
      <label for="AUSRFree">AUS Result Free Form Text</label>
      <Modal
        idName="AUSResultModal"
        modalTitle="AUS Result Free Form Text"
        modalBody="<p> Specify in text the Other Automated Underwriting System
        Result(s) if 16 is entered. </p> <p>Otherwise, leave this data field
        blank</p>" />
      <input
        class="form-control"
        type="text"
        id="AUSRFree"
        bind:value={$ausResultOther} />
      {#if $ausResult1 == 16 || $ausResult2 == 16 || $ausResult3 == 16 || $ausResult4 == 16 || $ausResult5 == 16}
        {#if $ausResultOther !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      {/if}
      <!--****************** -->
    </div>
  </div>
{/if}
