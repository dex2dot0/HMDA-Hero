<script>
  import {
      denialReason1
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Denial1">Reason for Denial: 1</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-16"/>
    <QualityErrors errors=1 idName="Denial1QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Denial1ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$denialReason1 > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="Denial1"
      bind:value={$denialReason1}
      on:change={denialReason1.change}>
      <option />
      <option value="1111">1111.Exempt</option>
      <option value="1">1.Debt-to-income ratio</option>
      <option value="2">2.Employment history</option>
      <option value="3">3.Credit history</option>
      <option value="4">4.Collateral</option>
      <option value="5">
        5.Insufficient cash (downpayment, closing costs)
      </option>
      <option value="6">6.Unverifiable information</option>
      <option value="7">7.Credit application incomplete</option>
      <option value="8">8.Mortgage insurance denied</option>
      <option value="9">9.Other</option>
      <option value="10">10.Not applicable</option>
    </select>
  </span>
</DataFieldFormat>