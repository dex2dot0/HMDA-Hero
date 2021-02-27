<script>
    import {
        denialReasonOther,
        denialReason1,
        denialReason2,
        denialReason3,
        denialReason4
    } from "./../../stores.js";s

    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="DenialFree" style="font-size: 10px;">
    Reason for Denial: Free Form
  </label>
  <Modal
    idName="FFDenialModal"
    modalTitle="Reason for Denial: Free Form"
    modalBody="<p>Specify in text the Other Denial Reason(s) if 9 is
    entered.</p> <p>Otherwise, leave this data field blank</p>" />
  <input
    class="form-control"
    type="text"
    id="DenialFree"
    bind:value={$denialReasonOther} 
    on:change={denialReasonOther.change}/>
  {#if $denialReason1 == 9 || $denialReason2 == 9 || $denialReason3 == 9 || $denialReason4 == 9}
    {#if $denialReasonOther !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  {/if}