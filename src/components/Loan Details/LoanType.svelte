<script>
    import {
        loanType
    } from "./../../stores.js";s
</script>

<label for="LoanType">Loan Type</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$loanType !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="LoanType"
  tabindex="0"
  bind:value={$loanType}
  on:change={loanType.change}>
  <option />
  <option value="1">
    1. Conventional (not insured or guaranteed by FHA, VA, RHS, or FSA
  </option>
  <option value="2">2. Federal Housing Adminitration insured (FHA)</option>
  <option value="3">3. Veterans Affairs guaranteed (VA)</option>
  <option value="4">
    4. USDA Rural Housing Service or Farm Service Agency guaranteed (RHS or
    FSA)
  </option>
</select>