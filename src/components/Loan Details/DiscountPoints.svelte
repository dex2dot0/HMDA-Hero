<script>
    import {
        discountPoints
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

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