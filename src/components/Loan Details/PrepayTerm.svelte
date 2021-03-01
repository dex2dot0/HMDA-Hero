<script>
    import {
        prepaymentPenaltyTerm
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

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