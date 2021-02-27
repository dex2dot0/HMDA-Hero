<script>
  import {
    isExempt,
    LEI,
    ULI,
    LoanNumber,
    loanAmount,
    loanType,
    appDate,
    actionTakenDate,
    actionTaken,
    loanPurpose,
    occupancyType,
    lienStatus,
    purchaserType,
    preapproval,
    loanCosts,
    pointsFees,
    originationCharges,
    discountPoints,
    lenderCredits,
    interestRate,
    prepaymentPenaltyTerm,
    loanTerm,
    introRatePeriod,
    balloonPayment,
    ioPayments,
    negativeAm,
    otherNonAm,
    NMLSR,
    reverseMortgage,
    openEndLOC,
    businessOrCommercial
  } from "./../../stores.js";
  import Modal from "../Modal.svelte";
  import Checkbox from "../Checkbox.svelte";
  import HRValidation from "../HRValidation.svelte";
  import { getLEI } from "../../Excel Scripts/getLEI.js";
  import { getSetting } from "../../Excel Scripts/getSetting.js";
  import { setSetting } from "../../Excel Scripts/setSetting.js";

  import LoanAmount from "./LoanAmount.svelte";
  import ApplicationDate from "./ApplicationDate.svelte";
  import ActionTakenDate from "./ActionTakenDate.svelte";
  import ActionTaken from "./ActionTaken.svelte";
  import LoanType from "./LoanType.svelte";
  import LoanPurpose from "./LoanPurpose.svelte";
  import OccupancyType from "./OccupancyType.svelte"
  import LienStatus from "./LienStatus.svelte";
  import PurchaserType from "./PurchaserType.svelte";
  import Preapproval from "./Preapproval.svelte";
  import TotalCosts from "./TotalCosts.svelte";
  import TotalPntsFees from "./TotalPntsFees.svelte";

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

  async function generateULI() {
    if (process.browser) {
      let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let leiLoanNum = `${$LEI}${$LoanNumber}00`;
      let uliNum = "";
      for (let char of leiLoanNum) {
        uliNum += chars.indexOf(char.toUpperCase());
      }
      let mod97 = modulo(uliNum, 97);
      let checkDigit = Math.ceil(98 - mod97);
      checkDigit.length === 1 ? (checkDigit += 0) : "";
      ULI.change(`${$LEI}${$LoanNumber}${checkDigit}`);
    }
  }

  async function validateULI() {
    if (process.browser) {
      let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let uliNum = "";
      for (let char of $ULI) {
        uliNum += chars.indexOf(char.toUpperCase());
      }
      let mod97 = modulo(uliNum, 97);
      mod97 === 1
        ? alert("The ULI is valid")
        : alert("The ULI does not appear to be valid");
    }
  }

  function modulo(divident, divisor) {
    return Array.from(divident)
      .map(c => parseInt(c))
      .reduce((remainder, value) => (remainder * 10 + value) % divisor, 0);
  }

  async function updateLoanNumber() {
    if ($ULI !== "" && $LEI !== "") {
      let loanNum = $ULI.substring($LEI.length, $ULI.length - 2);
      console.log($LEI.length);
      console.log($ULI.length);
      loanNum == $LoanNumber ? "" : LoanNumber.set(loanNum);
    }
  }

  async function getLEIFromExcel() {
    if (process.browser) {
      console.log("Attempting to get LEI from Excel file.");
      let leiFromExcel = await getLEI();
      let leiArray = leiFromExcel[0];
      LEI.change(leiArray[0]);
      setSetting('LEI', leiArray[0]);
    }
  }

  function helloWorld() {
    console.log("Hello World!");
  }
</script>

<style>
  label {
    font-weight: bold;
    font-size: 11px;
  }
  .row {
    display: flex;
    flex-direction: row;
  }

  .d-flex {
    padding-bottom: 6px;
  }
  a {
    color: black;
  }
</style>

<div class="row">
  {#if !$isExempt}
    {#if $LEI === ''}
      <div class="d-flex col-sm-12 col-md-6 align-items-end">
        <h6 style="margin-right: 5px;">
          <a
            href="https://www.consumerfinance.gov/policy-compliance/rulemaking/regulations/1003/4/#a-1-i-A"
            target="_blank">
            Legal Entity Identifier (LEI):
          </a>
        </h6>
        <h6 style="color:#dc3545;">Missing</h6>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary ml-2"
          on:click={getLEIFromExcel}>
          Get from Excel
        </button>
      </div>
    {:else}
      <div class="d-flex col-sm-12 col-md-6">
        <h6 style="margin-right: 5px;">Legal Entity Identifier (LEI):</h6>
        <h6 style="color:#28a745;">{$LEI}</h6>
      </div>
    {/if}
    <div class="d-flex col-sm-12 col-md-6">
      {#if $LEI == '' || $LoanNumber == '' || $ULI.length > 10}
        <button type="button" class="btn btn-sm btn-outline-secondary" disabled>
          Generate ULI
        </button>
      {:else}
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          on:click={generateULI}>
          Generate ULI
        </button>
      {/if}

      {#if $ULI == ''}
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary ml-2"
          disabled>
          Validate ULI
        </button>
      {:else}
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary ml-2"
          on:click={validateULI}>
          Validate ULI
        </button>
      {/if}
    </div>
  {/if}

  {#if !$isExempt}
    <div class="col-sm-12 col-md-6">
      <!-- Loan Number -->
      <label for="LoanNumber">Loan Number/Internal Identifier</label>
      <Modal
        idName="LoanNumberModal"
        modalTitle="Loan Number"
        tabindex="-1"
        modalBody="<p>Up to 23 characters</p> <p>1. May be letters, numerals, or
        a combination of both</p> <p>2. Must be unique within the financial
        institution, and</p> <p>3. Must not include any information that could
        be used to directly identify the applicant or borrower </p>" />
      <input
        class="form-control"
        type="text"
        placeholder="Required to use generate ULI button"
        id="LoanNumber"
        tabindex="0"
        bind:value={$LoanNumber} />
      <!--****************** -->
    </div>
  {/if}

  <div class="col-sm-12 col-md-6">
    {#if !$isExempt}
      <!-- ULI or NULI-->
      <label for="ULI">Universal Loan Identifier (ULI)</label>
      <input
        class="form-control"
        type="text"
        placeholder="ex. 10Bx939c5543TqA1144M999143X99"
        on:change={updateLoanNumber}
        id="ULI"
        tabindex="0"
        bind:value={$ULI} />
      {#if $ULI !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    {:else}
      <!-- NULI-->
      <label for="ULI">Non-Universal Loan Identifier (NULI)</label>
      <Modal
        idName="NULI"
        modalTitle="Non-Universal Loan Identifier (NULI)"
        tabindex="-1"
        modalBody="<p>Up to 22 characters</p> <p>1. May be letters, numerals, or
        a combination of both</p> <p>2. Must be unique within the financial
        institution, and</p> <p>3. Must not include any information that could
        be used to directly identify the applicant or borrower </p>" />
      <input
        class="form-control"
        type="text"
        placeholder="ex. 999143X"
        id="ULI"
        tabindex="0"
        bind:value={$ULI} />
      {#if $ULI !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}

      <!--****************** -->
    {/if}
  </div>
</div>

<div class="row">
  <div class="col-sm-12 col-md-4">
    <LoanAmount/>
  </div>
  <div class="col-sm-12 col-md-4">
    <ApplicationDate/>
  </div>
  <div class="col-sm-12 col-md-4">
    <ActionTakenDate/>
  </div>
</div>
<div class="row">
  <div class="col-sm-12 col-md-6">
   <ActionTaken/>
  </div>
  <div class="col-sm-12 col-md-6">
    <LoanType/>
  </div>
  <div class="col-sm-12 col-md-6">
    <LoanPurpose/>
  </div>
  <div class="col-sm-12 col-md-6">
    <OccupancyType/>
  </div>
  <div class="col-sm-12 col-md-4">
    <LienStatus/>
  </div>
  <div class="col-sm-12 col-md-4">
    <PurchaserType/>
  </div>
  <div class="col-sm-12 col-md-4">
    <Preapproval/>
  </div>
</div>

{#if !$isExempt}
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <TotalCosts/>
    </div>
    <div class="col-sm-6 col-md-3">
     <TotalPntsFees/>
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Origination Charges -->
      <label for="OrigCharges">Origination Charges or</label>
      {#if $originationCharges !== 'NA'}
        <Checkbox value={false} on:notify={originationCharges.NA} />
      {:else}
        <Checkbox value={true} on:notify={originationCharges.NA} />
      {/if}
      <Modal
        idName="OrigChargesModal"
        modalTitle="Origination Charges"
        modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="OrigCharges"
        tabindex="0"
        bind:value={$originationCharges}
        on:change={originationCharges.changed} />
      {#if $originationCharges > 0 || $originationCharges === 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Discount Points -->
      <label for="DiscountPoints">Discount Points or</label>
      {#if $discountPoints !== 'NA'}
        <Checkbox value={false} on:notify={discountPoints.NA} />
      {:else}
        <Checkbox value={true} on:notify={discountPoints.NA} />
      {/if}
      <Modal
        idName="DiscountPointsModal"
        modalTitle="Discount Points"
        modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>
        <p>If no points were paid, leave this data field blank</p>" />
      <input
        class="form-control"
        type="text"
        id="DiscountPoints"
        tabindex="0"
        bind:value={$discountPoints}
        on:change={discountPoints.changed} />
      {#if $discountPoints > 0 || $discountPoints == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Lender Credits -->
      <label for="LenderCredits">Lender Credits or</label>
      {#if $lenderCredits !== 'NA'}
        <Checkbox value={false} on:notify={lenderCredits.NA} />
      {:else}
        <Checkbox value={true} on:notify={lenderCredits.NA} />
      {/if}
      <Modal
        idName="LenderCreditsModal"
        modalTitle="Lender Credits"
        modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p> <p>
        If no lender credits were provided, leave this data field blank </p>" />
      <input
        class="form-control"
        type="text"
        id="LenderCredits"
        tabindex="0"
        bind:value={$lenderCredits}
        on:change={lenderCredits.changed} />
      {#if $lenderCredits > 0 || $lenderCredits == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Interest Rate -->
      <label for="InterestRate">Interest Rate or</label>
      {#if $interestRate !== 'NA'}
        <Checkbox value={false} on:notify={interestRate.NA} />
      {:else}
        <Checkbox value={true} on:notify={interestRate.NA} />
      {/if}
      <Modal
        idName="InterestRateModal"
        modalTitle="Interest Rate"
        modalBody="<p>Example:</p> <p>4.125 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="InterestRate"
        tabindex="0"
        bind:value={$interestRate}
        on:change={interestRate.changed} />
      {#if $interestRate > 0 || $interestRate == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Prepayment Penalty Term -->
      <label for="PrepayTerm">Prepay Penalty Term or</label>
      {#if $prepaymentPenaltyTerm !== 'NA'}
        <Checkbox value={false} on:notify={prepaymentPenaltyTerm.NA} />
      {:else}
        <Checkbox value={true} on:notify={prepaymentPenaltyTerm.NA} />
      {/if}
      <Modal
        idName="PrepayTermModal"
        modalTitle="Prepayment Penalty Term"
        modalBody="<p>Example:</p> <p>24 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="PrepayTerm"
        tabindex="0"
        bind:value={$prepaymentPenaltyTerm}
        on:change={prepaymentPenaltyTerm.changed} />
      {#if $prepaymentPenaltyTerm > 0 || $prepaymentPenaltyTerm == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Loan Term -->
      <label for="LoanTerm">Loan Term or</label>
      {#if $loanTerm !== 'NA'}
        <Checkbox value={false} on:notify={loanTerm.NA} />
      {:else}
        <Checkbox value={true} on:notify={loanTerm.NA} />
      {/if}
      <Modal
        idName="LoanTermModal"
        modalTitle="Loan Term"
        modalBody="<p>Example:</p> <p>360 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="LoanTerm"
        tabindex="0"
        bind:value={$loanTerm}
        on:change={loanTerm.changed} />
      {#if $loanTerm > 0 || $loanTerm == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Intro Rate Period -->
      <label for="IntroRatePeriod">Intro Rate Period or</label>
      {#if $introRatePeriod !== 'NA'}
        <Checkbox value={false} on:notify={introRatePeriod.NA} />
      {:else}
        <Checkbox value={true} on:notify={introRatePeriod.NA} />
      {/if}
      <Modal
        idName="IntroRateModal"
        modalTitle="Introductory Rate Period"
        modalBody="<p>Example:</p> <p>24 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="IntroRatePeriod"
        tabindex="0"
        bind:value={$introRatePeriod}
        on:change={introRatePeriod.changed} />
      {#if $introRatePeriod > 0 || $introRatePeriod == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Balloon Payment -->
      <label for="Balloon">Balloon Payment</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$balloonPayment !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="Balloon"
        tabindex="0"
        bind:value={$balloonPayment}
        on:change={balloonPayment.change}>
        <option />
        <option value="1">1.Balloon payment</option>
        <option value="2">2.No balloon payment</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- IO Payments -->
      <label for="IO">Interest-Only Payments</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$ioPayments !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="IO"
        tabindex="0"
        bind:value={$ioPayments}
        on:change={ioPayments.change}>
        <option />
        <option value="1">1.Interest-only payments</option>
        <option value="2">2.No interest-only payments</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Negative Amortization -->
      <label for="NegAm">Negative Amortization</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$negativeAm !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="NegAm"
        tabindex="0"
        bind:value={$negativeAm}
        on:change={negativeAm.change}>
        <option />
        <option value="1">1.Negative Amortization</option>
        <option value="2">2.No negative amorization</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Other Non-amortizing Features -->
      <label for="OtherAm">Other Non-amortizing Features</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$otherNonAm !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="OtherAm"
        tabindex="0"
        bind:value={$otherNonAm}
        on:change={otherNonAm.change}>
        <option />
        <option value="1">1.Other no-fully amortizing features</option>
        <option value="2">2.No other non-fully amortizing features</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- NMLSR -->
      <label for="NMLSR">MLO NMLSR Identifier or</label>
      {#if $NMLSR !== 'NA'}
        <Checkbox value={false} on:notify={NMLSR.NA} />
      {:else}
        <Checkbox value={true} on:notify={NMLSR.NA} />
      {/if}
      <Modal
        idName="NMLSRModal"
        modalTitle="MLO NMLSR Identifier"
        modalBody="<p>Example:</p> <p>123450 (or) NA (or)</p> <p>Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="NMLSR"
        tabindex="0"
        bind:value={$NMLSR}
        on:change={NMLSR.changed} />
      {#if $NMLSR > 0 || $NMLSR == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation isValid={false} />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- HECM -->
      <label for="HECM">Reverse Mortgage</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$reverseMortgage !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="HECM"
        tabindex="0"
        bind:value={$reverseMortgage}
        on:change={reverseMortgage.change}>
        <option />
        <option value="1">1.Reverse mortgage</option>
        <option value="2">2.Not a reverse mortgage</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- HELOC -->
      <label for="HELOC">Open-End LOC</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$openEndLOC !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="HELOC"
        tabindex="0"
        bind:value={$openEndLOC}
        on:change={openEndLOC.change}>
        <option />
        <option value="1">1.Open-end line of credit</option>
        <option value="2">2.Not an open-end line of credit</option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- BizPurpose -->
      <label for="BizPurpose">Business/Commercial Purpose</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$businessOrCommercial !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="BizPurpose"
        tabindex="0"
        bind:value={$businessOrCommercial}
        on:change={businessOrCommercial.change}>
        <option />
        <option value="1">
          1.Primarily for a business or commercial purpose
        </option>
        <option value="2">
          2.Not primarily for a business or commercial purpose
        </option>
        <option value="1111">1111.Exempt</option>
      </select>
      <!--****************** -->
    </div>
  </div>
{/if}
