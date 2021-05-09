<script>
  import { loanTerm } from './../../stores.js';

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
    <label for="LoanTerm">Loan Term</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-25" />
    {#if $loanTerm !== 'NA'}
      <Checkbox value="{false}" on:notify="{loanTerm.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{loanTerm.NA}" />
    {/if}
    <Modal
      idName="LoanTermModal"
      modalTitle="Loan Term"
      modalBody="<p>Example:</p> <p>360 (or) NA</p> <p>(or) Exempt</p>" />
    <QualityErrors errors="1" idName="loanTermQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="loanTermValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="LoanTerm"
      tabindex="0"
      bind:value="{$loanTerm}"
      on:change="{loanTerm.changed}" />
    {#if $loanTerm > 0 || $loanTerm == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
