<script>
  import {
      loanPurpose
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="LoanPurpose">Loan Purpose</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-3"/>
    <QualityErrors errors=1 idName="loanPurposeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="loanPurposeValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$loanPurpose !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="LoanPurpose"
      tabindex="0"
      bind:value={$loanPurpose}
      on:change={loanPurpose.change}>
      <option />
      <option value="1">1. Home purchase</option>
      <option value="2">2. Home improvement</option>
      <option value="31">31. Refinancing</option>
      <option value="32">32. Cash-out refinancing</option>
      <option value="4">4. Other purpose</option>
      <option value="NA">5. NA</option>
    </select>
  </span>
</DataFieldFormat>