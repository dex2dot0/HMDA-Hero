<script>
  import { lienStatus } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="LienStatus">Lien Status</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-14" />
    <QualityErrors errors="1" idName="lienStatusQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="lienStatusValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$lienStatus !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="LienStatus"
      tabindex="0"
      bind:value="{$lienStatus}"
      on:change="{lienStatus.change}">
      <option></option>
      <option value="1">1. Secured by a first lien</option>
      <option value="2">2. Secured by a subordinate lien</option>
    </select>
  </span>
</DataFieldFormat>
