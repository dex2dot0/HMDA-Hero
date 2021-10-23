<script>
  import { prepaymentPenaltyTerm } from './../../stores.js';

  import Checkbox from '../Checkbox.svelte';
  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="PrepayTerm">Prepay Penalty Term</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-22" />
    {#if $prepaymentPenaltyTerm !== 'NA'}
      <Checkbox value="{false}" on:notify="{prepaymentPenaltyTerm.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{prepaymentPenaltyTerm.NA}" />
    {/if}
    <Modal
      idName="PrepayTermModal"
      modalTitle="Prepayment Penalty Term"
      modalBody="<p>Example:</p> <p>24 (or) NA</p> <p>(or) Exempt</p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="prepayTermQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="prepayTermValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="PrepayTerm"
      tabindex="0"
      bind:value="{$prepaymentPenaltyTerm}"
      on:change="{prepaymentPenaltyTerm.changed}" />
    {#if $prepaymentPenaltyTerm > 0 || $prepaymentPenaltyTerm == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
