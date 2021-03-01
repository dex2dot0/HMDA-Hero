<script>
    import {
        loanTerm
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

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