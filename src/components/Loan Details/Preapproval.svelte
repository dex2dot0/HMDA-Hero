<script>
  import {
      preapproval
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Preapproval">Preapproval</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-4"/>
    <QualityErrors errors=1 idName="preapprovalQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="preapprovalValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$preapproval !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Preapproval"
      tabindex="0"
      bind:value={$preapproval}
      on:change={preapproval.change}>
      <option />
      <option value="1">1. Preapproval requested</option>
      <option value="2">2. Preapproval not requested</option>
    </select>
  </span>
</DataFieldFormat>