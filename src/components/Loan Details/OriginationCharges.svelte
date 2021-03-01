<script>
    import {
        originationCharges
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

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