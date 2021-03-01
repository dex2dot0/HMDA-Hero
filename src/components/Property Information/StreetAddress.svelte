<script>
    import {
        streetAddress
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="StreetAddress">Street Address or</label>
{#if $streetAddress !== 'NA'}
  <Checkbox value={false} on:notify={streetAddress.NA} />
{:else}
  <Checkbox value={true} on:notify={streetAddress.NA} />
{/if}

<Modal
  idName="AddressModal"
  modalTitle="Street Address"
  modalBody="<p>Example:</p> <p>456 W Somewhere Ave Apt 201 (or)</p> <p>NA
  (or)</p> <p>Exempt</p>" />

<input
  class="form-control"
  type="text"
  id="StreetAddress"
  bind:value={$streetAddress}
  on:change={streetAddress.changed} />
{#if $streetAddress !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}