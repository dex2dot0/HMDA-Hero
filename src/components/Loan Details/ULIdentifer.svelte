<script>
  import { ULI, LoanNumber, LEI } from './../../stores.js';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';

  async function updateLoanNumber() {
    if ($ULI !== '' && $LEI !== '') {
      let loanNum = $ULI.substring($LEI.length, $ULI.length - 2);
      console.log($LEI.length);
      console.log($ULI.length);
      loanNum == $LoanNumber ? '' : LoanNumber.set(loanNum);
    }
  }
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="ULI">Universal Loan Identifier (ULI)</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-1-i" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="ULIQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="ULIValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      placeholder="ex. 10Bx939c5543TqA1144M999143X99"
      on:change="{updateLoanNumber}"
      id="ULI"
      tabindex="0"
      bind:value="{$ULI}" />
    {#if $ULI !== ''}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
