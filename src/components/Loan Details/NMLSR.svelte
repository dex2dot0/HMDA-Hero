<script>
  import {
      NMLSR
  } from "./../../stores.js";

  import Checkbox from "../Checkbox.svelte";
  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="NMLSR">MLO NMLSR Identifier</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-34"/>
    {#if $NMLSR !== 'NA'}
      <Checkbox value={false} on:notify={NMLSR.NA} />
    {:else}
      <Checkbox value={true} on:notify={NMLSR.NA} />
    {/if}
    <Modal
      idName="NMLSRModal"
      modalTitle="MLO NMLSR Identifier"
      modalBody="<p>Example:</p> <p>123450 (or) NA (or)</p> <p>Exempt</p>" />
    <QualityErrors errors=1 idName="nmlsrQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="nmlsrValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
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
  </span>
</DataFieldFormat>