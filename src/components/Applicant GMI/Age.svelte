<script>
    import {
      applicantAge
    } from "./../../stores.js";
    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
    import RegLink from "../RegLink.svelte";
</script>

<style>
  label {
    font-weight: bold;
    font-size: 11px;
  }
</style>

<label for="Age">Age</label>
{#if $applicantAge !== 'NA'}
  <Checkbox value={false} on:notify={applicantAge.NA} />
{:else}
  <Checkbox value={true} on:notify={applicantAge.NA} />
{/if}
<Modal
  idName="AppAgeModal"
  modalTitle="Age"
  modalBody="<p>Example: 24</p> <p>(or)</p> <p>Descriptions:</p> <p>8888.
  Not Applicable</p>" />
<RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10-ii"/>
<input
  class="form-control"
  type="text"
  id="Age"
  bind:value={$applicantAge}
  on:change={applicantAge.changed} />
{#if $applicantAge > 0 || $applicantAge == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}