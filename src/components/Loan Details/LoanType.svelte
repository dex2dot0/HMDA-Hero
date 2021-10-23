<script>
  import { loanType } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="LoanType">Loan Type</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-2" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="loanTypeQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="loanTypeValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$loanType !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="LoanType"
      tabindex="0"
      bind:value="{$loanType}"
      on:change="{loanType.change}">
      <option></option>
      <option value="1">
        1. Conventional (not insured or guaranteed by FHA, VA, RHS, or FSA
      </option>
      <option value="2">2. Federal Housing Adminitration insured (FHA)</option>
      <option value="3">3. Veterans Affairs guaranteed (VA)</option>
      <option value="4">
        4. USDA Rural Housing Service or Farm Service Agency guaranteed (RHS or
        FSA)
      </option>
    </select>
  </span>
</DataFieldFormat>
