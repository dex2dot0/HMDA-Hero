<script>
  import { loanAmount } from './../../stores.js';

  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="LoanAmount">Loan Amount</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-7" />
    <Modal
      idName="LoanAmountModal"
      modalTitle="Loan Amount"
      modalBody="<p>Example:</p> <p>110500 (or)</p> <p>110500.00</p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="loanAmountQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="loanAmountValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="number"
      id="LoanAmount"
      tabindex="0"
      bind:value="{$loanAmount}"
      on:change="{loanAmount.change}" />
    {#if $loanAmount > 0}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
