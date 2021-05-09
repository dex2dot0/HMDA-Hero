<script>
  import { reverseMortgage } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="HECM">Reverse Mortgage</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-36" />
    <QualityErrors errors="1" idName="hecmQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="hecmValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$reverseMortgage !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="HECM"
      tabindex="0"
      bind:value="{$reverseMortgage}"
      on:change="{reverseMortgage.change}">
      <option></option>
      <option value="1">1.Reverse mortgage</option>
      <option value="2">2.Not a reverse mortgage</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
