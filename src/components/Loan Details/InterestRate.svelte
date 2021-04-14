<script>
    import {
        interestRate
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="InterestRate">Interest Rate</label>
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