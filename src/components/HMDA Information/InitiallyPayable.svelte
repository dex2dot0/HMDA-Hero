<script>
  import { initiallyPayable } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="InitPay">Initially Payable to Your Institution</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-33-ii" />
    <QualityErrors errors="1" idName="InitPayQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="InitPayValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$initiallyPayable > 0
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="InitPay"
      bind:value="{$initiallyPayable}"
      on:change="{initiallyPayable.change}">
      <option></option>
      <option value="1">1.Initially payable to your institution</option>
      <option value="2">2.Not initially payable to your institution</option>
      <option value="3">3.Not applicable</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
