<script>
    import {
        coapplicantAge,
        NoCoApp
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CoAge">Age</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10-ii"/>
    {#if $coapplicantAge !== 'NA'}
      <Checkbox value={false} on:notify={coapplicantAge.NA} />
    {:else}
      <Checkbox value={true} on:notify={coapplicantAge.NA} />
    {/if}
    <Modal
      idName="CoAppAgeModal"
      modalTitle="Co-Applicant: Age"
      modalBody="<p>Example: 24</p> <p>(or)</p> <p>Descriptions:</p> <p>8888.
      Not applicable</p> <p>9999. No co-applicant</p> " />
      <QualityErrors errors=1 idName="AppAgeQualityErrors" errorsHTML="<p>Example should inject results</p>"/>
        <ValidityErrors errors=2 idName="AppAgeValidityErros" errorsHTML="<p>Example, should inject results</p>"/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="CoAge"
      bind:value={$coapplicantAge}
      on:change={coapplicantAge.changed}
      disabled={$NoCoApp} />
    {#if $coapplicantAge > 0 || $coapplicantAge === 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>