<script>
    import {
        loanAmount
    } from "./../../stores.js";

    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="LoanAmount">Loan Amount</label>
<Modal
  idName="LoanAmountModal"
  modalTitle="Loan Amount"
  modalBody="<p>Example:</p> <p>110500 (or)</p> <p>110500.00</p>" />
<input
  class="form-control"
  type="number"
  id="LoanAmount"
  tabindex="0"
  bind:value={$loanAmount}
  on:change={loanAmount.change} />
{#if $loanAmount > 0}
  <HRValidation isValid={true} />
{:else}
  <HRValidation isValid={false} />
{/if}