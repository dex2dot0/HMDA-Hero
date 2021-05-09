<script>
  import { actionTaken } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="ActionTaken">Action Taken</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-8-i" />
    <QualityErrors errors="1" idName="actionTakenQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="actionTakenValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$actionTaken !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="ActionTaken"
      tabindex="0"
      bind:value="{$actionTaken}"
      on:change="{actionTaken.change}">
      <option></option>
      <option value="1">1. Loan origination</option>
      <option value="2">2. Application approved but not accepted</option>
      <option value="3">3. Application denied</option>
      <option value="4">4. App withdrawn by applicant</option>
      <option value="5">5. File closed for incompleteness</option>
      <option value="6">6. Purchased loan</option>
      <option value="7">7. Preapproval request denied</option>
      <option value="8">
        8. Preapproval request approved but not accepted
      </option>
    </select>
  </span>
</DataFieldFormat>
