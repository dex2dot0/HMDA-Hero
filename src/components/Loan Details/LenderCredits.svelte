<script>
    import {
        lenderCredits
    } from "./../../../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

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