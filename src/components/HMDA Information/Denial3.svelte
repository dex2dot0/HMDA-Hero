<script>
    import {
        denialReason3
    } from "./../../stores.js";s
</script>

<label for="Denial3">Reason for Denial: 3</label>
<!-- svelte-ignore a11y-no-onchange-->
<select class="custom-select" id="Denial3" bind:value={$denialReason3} on:change={denialReason3.change}>
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