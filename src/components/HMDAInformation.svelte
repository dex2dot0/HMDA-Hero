<script>
  import {
    isExempt,
    submissionOfApplication,
    intiallyPayable,
    rateSpread,
    denialReason1,
    denialReason2,
    denialReason3,
    denialReason4,
    denialReasonOther
  } from "../stores.js";
  import Modal from "../components/Modal.svelte";
  import HRValidation from "../components/HRValidation.svelte";
</script>

<style>
  label {
    font-weight: bold;
    font-size: 11px;
  }
</style>

{#if $isExempt}
  <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
    All Fields Are Exempt
  </h6>
{:else}
  <div class="row">
    <div class="col-12 col-md-4">
      <!-- Submission of Application -->
      <label for="submissionOfApplication">Submission of Application</label>
      <select
        class={$submissionOfApplication > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="submissionOfApplication"
        bind:value={$submissionOfApplication}
        required>
        <option />
        <option value="1">1.Submitted directly to your institution</option>
        <option value="2">2.Not submitted directly to your institution</option>
        <option value="3">3.Not applicable</option>
        <option value="1111">1111.Exempt</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-12 col-md-4">
      <!-- Initially Payable -->
      <label for="InitPay">Initially Payable to Your Institution</label>
      <select
        class={$intiallyPayable > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="InitPay"
        bind:value={$intiallyPayable}>
        <option />
        <option value="1">1.Initially payable to your institution</option>
        <option value="2">2.Not initially payable to your institution</option>
        <option value="3">3.Not applicable</option>
        <option value="1111">1111.Exempt</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-12 col-md-4">
      <!-- rate Spread -->
      <label for="RateSpread">Rate Spread</label>
      <Modal
        idName="RateSpreadModal"
        modalTitle="Rate Spread"
        modalBody="<p>Example:</p> <p>0.428 (or) NA</p> <p>(or) Exempt</p>" />
      <input
        class="form-control"
        type="text"
        id="RateSpread"
        bind:value={$rateSpread} />
      {#if $rateSpread !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-3">
      <!-- Denial 1 -->
      <label for="Denial1">Reason for Denial: 1</label>
      <select
        class={$denialReason1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="Denial1"
        bind:value={$denialReason1}>
        <option />
        <option value="1111">1111.Exempt</option>
        <option value="1">1.Debt-to-income ratio</option>
        <option value="2">2.Employment history</option>
        <option value="3">3.Credit history</option>
        <option value="4">4.Collateral</option>
        <option value="5">
          5.Insufficient cash (downpayment, closing costs)
        </option>
        <option value="6">6.Unverifiable information</option>
        <option value="7">7.Credit application incomplete</option>
        <option value="8">8.Mortgage insurance denied</option>
        <option value="9">9.Other</option>
        <option value="10">10.Not applicable</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-12 col-md-3">
      <!-- Denial 2 -->
      <label for="Denial2">Reason for Denial: 2</label>
      <select class="custom-select" id="Denial2" bind:value={$denialReason2}>
        <option />
        <option value="1">1.Debt-to-income ratio</option>
        <option value="2">2.Employment history</option>
        <option value="3">3.Credit history</option>
        <option value="4">4.Collateral</option>
        <option value="5">
          5.Insufficient cash (downpayment, closing costs)
        </option>
        <option value="6">6.Unverifiable information</option>
        <option value="7">7.Credit application incomplete</option>
        <option value="8">8.Mortgage insurance denied</option>
        <option value="9">9.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-12 col-md-3">
      <!-- Denial 3 -->
      <label for="Denial3">Reason for Denial: 3</label>
      <select class="custom-select" id="Denial3" bind:value={$denialReason3}>
        <option />
        <option value="1">1.Debt-to-income ratio</option>
        <option value="2">2.Employment history</option>
        <option value="3">3.Credit history</option>
        <option value="4">4.Collateral</option>
        <option value="5">
          5.Insufficient cash (downpayment, closing costs)
        </option>
        <option value="6">6.Unverifiable information</option>
        <option value="7">7.Credit application incomplete</option>
        <option value="8">8.Mortgage insurance denied</option>
        <option value="9">9.Other</option>
      </select>
      <!--****************** -->
    </div>
    <div class="col-12 col-md-3">
      <!-- Denial 4 -->
      <label for="Denial4">Reason for Denial: 4</label>
      <select class="custom-select" id="Denial4" bind:value={$denialReason4}>
        <option />
        <option value="1">1.Debt-to-income ratio</option>
        <option value="2">2.Employment history</option>
        <option value="3">3.Credit history</option>
        <option value="4">4.Collateral</option>
        <option value="5">
          5.Insufficient cash (downpayment, closing costs)
        </option>
        <option value="6">6.Unverifiable information</option>
        <option value="7">7.Credit application incomplete</option>
        <option value="8">8.Mortgage insurance denied</option>
        <option value="9">9.Other</option>
      </select>
      <!--****************** -->
    </div>
  </div>
  <div class="row">
    <div class="col">
      <!-- Denial Other Free Form -->
      <label for="DenialFree" style="font-size: 10px;">
        Reason for Denial: Free Form
      </label>
      <Modal
        idName="FFDenialModal"
        modalTitle="Reason for Denial: Free Form"
        modalBody="<p>Specify in text the Other Denial Reason(s) if 9 is
        entered.</p> <p>Otherwise, leave this data field blank</p>" />
      <input
        class="form-control"
        type="text"
        id="DenialFree"
        bind:value={$denialReasonOther} />
      {#if $denialReason1 == 9 || $denialReason2 == 9 || $denialReason3 == 9 || $denialReason4 == 9}
        {#if $denialReasonOther !== ''}
          <HRValidation isValid={true} />
        {:else}
          <HRValidation />
        {/if}
      {/if}
      <!--****************** -->
    </div>
  </div>
{/if}
