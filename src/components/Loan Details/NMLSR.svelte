<script>
    import {
        NMLSR
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="NMLSR">MLO NMLSR Identifier</label>
{#if $NMLSR !== 'NA'}
  <Checkbox value={false} on:notify={NMLSR.NA} />
{:else}
  <Checkbox value={true} on:notify={NMLSR.NA} />
{/if}
<Modal
  idName="NMLSRModal"
  modalTitle="MLO NMLSR Identifier"
  modalBody="<p>Example:</p> <p>123450 (or) NA (or)</p> <p>Exempt</p>" />
<input
  class="form-control"
  type="text"
  id="NMLSR"
  tabindex="0"
  bind:value={$NMLSR}
  on:change={NMLSR.changed} />
{#if $NMLSR > 0 || $NMLSR == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation isValid={false} />
{/if}