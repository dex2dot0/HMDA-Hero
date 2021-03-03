<script>
    import {
        ausSystemOther,
        ausSystem1,
        ausSystem2,
        ausSystem3,
        ausSystem4,
        ausSystem5
    } from "./../../stores.js";

    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="AUSFree">AUS System Free Form Text</label>
<Modal
  idName="AUSSystemModal"
  modalTitle="AUS System Free Form Text"
  modalBody="<p> Specify in text the Other Automated Underwriting
  System(s) if 5 is entered. </p> <p>Otherwise, leave this data field
  blank</p>" />
<input
  class="form-control"
  type="text"
  id="AUSFree"
  bind:value={$ausSystemOther} 
  on:change={ausSystemOther.change}/>
{#if $ausSystem1 == 5 || $ausSystem2 == 5 || $ausSystem3 == 5 || $ausSystem4 == 5 || $ausSystem5 == 5}
  {#if $ausSystemOther !== ''}
    <HRValidation isValid={true} />
  {:else}
    <HRValidation />
  {/if}
{/if}