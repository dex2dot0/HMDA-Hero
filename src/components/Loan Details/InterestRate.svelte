<script>
  import {
      interestRate
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
    <label for="InterestRate">Interest Rate</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-21"/>
    {#if $interestRate !== 'NA'}
      <Checkbox value={false} on:notify={interestRate.NA} />
    {:else}
      <Checkbox value={true} on:notify={interestRate.NA} />
    {/if}
    <Modal
      idName="InterestRateModal"
      modalTitle="Interest Rate"
      modalBody="<p>Example:</p> <p>4.125 (or) NA</p> <p>(or) Exempt</p>" />
    <QualityErrors errors=1 idName="interestRateQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="interestRateValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="InterestRate"
      tabindex="0"
      bind:value={$interestRate}
      on:change={interestRate.changed} />
    {#if $interestRate > 0 || $interestRate == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation isValid={false} />
    {/if}
  </span>
</DataFieldFormat>