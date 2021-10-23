<script>
  import { loanCosts, isExempt } from './../../stores.js';

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
    <label for="TotalCosts">Total Loan Costs</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-17" />
    {#if $loanCosts !== 'NA'}
      <Checkbox value="{false}" on:notify="{loanCosts.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{loanCosts.NA}" />
    {/if}
    <Modal
      idName="LoanCostsModal"
      modalTitle="Loan Costs"
      modalBody="{$isExempt
        ? '<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>'
        : '<p>Example:</p> <p>2399.04 (or) NA</p>'}" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="totalCostsQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="totalCostsValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      placeholder="{$isExempt
        ? 'Ex. 2399.04 (or) NA (or) Exempt'
        : 'Ex. 2399.04 (or) NA'}"
      id="TotalCosts"
      tabindex="0"
      bind:value="{$loanCosts}"
      on:change="{loanCosts.changed}" />
    {#if $loanCosts > 0 || $loanCosts == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
