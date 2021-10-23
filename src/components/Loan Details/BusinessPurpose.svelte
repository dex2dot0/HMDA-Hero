<script>
  import { businessOrCommercial } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="BizPurpose">Business/Commercial Purpose</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-38" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="bizPurposeQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="bizPurposeValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$businessOrCommercial !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="BizPurpose"
      tabindex="0"
      bind:value="{$businessOrCommercial}"
      on:change="{businessOrCommercial.change}">
      <option></option>
      <option value="1">
        1.Primarily for a business or commercial purpose
      </option>
      <option value="2">
        2.Not primarily for a business or commercial purpose
      </option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
