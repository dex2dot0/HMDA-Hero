<script>
    import {
        city
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="City">City</label>
{#if $city !== 'NA'}
  <Checkbox value={false} on:notify={city.NA} />
{:else}
  <Checkbox value={true} on:notify={city.NA} />
{/if}

<Modal
  idName="CityModal"
  modalTitle="City"
  modalBody="<p>Example:</p> <p>Anytown (or)</p> <p>NA (or)</p>
  <p>Exempt</p>" />
<input
  class="form-control"
  type="text"
  id="City"
  bind:value={$city}
  on:change={city.changed} />
{#if $city !== ''}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}