<script>
  import {
    constructionMethod
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="ConstructionMethod">Construction Method</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-5"/>
    <QualityErrors errors=1 idName="constructionMethodQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="constructionMethodValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$constructionMethod !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="ConstructionMethod"
      bind:value={$constructionMethod}
      on:change={constructionMethod.change}>
      <option />
      <option value="1">1. Site-built</option>
      <option value="2">2. Manufactured Home</option>
    </select>
  </span>
</DataFieldFormat>