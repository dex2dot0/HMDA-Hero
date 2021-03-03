<script>
    import {
        ausResultOther,
        ausResult1,
        ausResult2,
        ausResult3,
        ausResult4,
        ausResult5
    } from "./../../stores.js";

    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="AUSRFree">AUS Result Free Form Text</label>
<Modal
  idName="AUSResultModal"
  modalTitle="AUS Result Free Form Text"
  modalBody="<p> Specify in text the Other Automated Underwriting System
  Result(s) if 16 is entered. </p> <p>Otherwise, leave this data field
  blank</p>" />
<input
  class="form-control"
  type="text"
  id="AUSRFree"
  bind:value={$ausResultOther} 
  on:change={ausResultOther.change}/>
{#if $ausResult1 == 16 || $ausResult2 == 16 || $ausResult3 == 16 || $ausResult4 == 16 || $ausResult5 == 16}
  {#if $ausResultOther !== ''}
    <HRValidation isValid={true} />
  {:else}
    <HRValidation />
  {/if}
{/if}