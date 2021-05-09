<script>
  import { applicantSexBasis } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="SexBasis">Sex</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10" />
    <QualityErrors errors="1" idName="SexBasisQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="SexBasisValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$applicantSexBasis > 0
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="SexBasis"
      bind:value="{$applicantSexBasis}"
      on:change="{applicantSexBasis.change}">
      <option></option>
      <option value="1">
        1. Collected on the basis of visual observation or surname
      </option>
      <option value="2">
        2. Not collected on the basis of visual observation or surname
      </option>
      <option value="3">3. Not applicable</option>
    </select>
  </span>
</DataFieldFormat>
