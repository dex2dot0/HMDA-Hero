<script>
    import {
        rateSpread
    } from "./../../stores.js";

    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="RateSpread">Rate Spread</label>
<Modal
  idName="RateSpreadModal"
  modalTitle="Rate Spread"
  modalBody="<p>Example:</p> <p>0.428 (or) NA</p> <p>(or) Exempt</p>" />
<input
  class="form-control"
  type="text"
  id="RateSpread"
  bind:value={$rateSpread}
  on:change={rateSpread.change} />
{#if $rateSpread !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}