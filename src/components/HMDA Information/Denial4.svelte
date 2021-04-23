<script>
  import {
      denialReason4
  } from "./../../stores.js";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Denial4">Reason for Denial: 4</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-16"/>
    <QualityErrors errors=1 idName="Denial4QualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="Denial4ValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select class="custom-select" id="Denial4" bind:value={$denialReason4} on:change={denialReason4.change}>
      <option />
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
    </select>
  </span>
</DataFieldFormat>