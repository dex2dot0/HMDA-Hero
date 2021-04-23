<script>
  import {
      denialReasonOther,
      denialReason1,
      denialReason2,
      denialReason3,
      denialReason4
  } from "./../../stores.js";
  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="DenialFree">
      Reason for Denial: Free Form
    </label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-16"/>
    <Modal
      idName="FFDenialModal"
      modalTitle="Reason for Denial: Free Form"
      modalBody="<p>Specify in text the Other Denial Reason(s) if 9 is
      entered.</p> <p>Otherwise, leave this data field blank</p>" />
    <QualityErrors errors=1 idName="DenialFreeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="DenialFreeValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
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
    {:else if $denialReasonOther !== ''}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>