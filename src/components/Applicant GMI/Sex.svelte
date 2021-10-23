<script>
  import { applicantSex } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Sex">Sex</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10" />
      <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="SexQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="SexValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$applicantSex > 0
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="Sex"
      bind:value="{$applicantSex}"
      on:change="{applicantSex.change}">
      <option></option>
      <option value="1">1. Male</option>
      <option value="2">2. Female</option>
      <option value="3">
        3. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="4">4. Not applicable</option>
      <option value="6">6. Applicant selected both male and female</option>
    </select>
  </span>
</DataFieldFormat>
