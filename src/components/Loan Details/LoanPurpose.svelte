<script>
    import {
        loanPurpose
    } from "./../../stores.js";s
</script>

<label for="LoanPurpose">Loan Purpose</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$loanPurpose !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="LoanPurpose"
  tabindex="0"
  bind:value={$loanPurpose}
  on:change={loanPurpose.change}>
  <option />
  <option value="1">1. Home purchase</option>
  <option value="2">2. Home improvement</option>
  <option value="31">31. Refinancing</option>
  <option value="32">32. Cash-out refinancing</option>
  <option value="4">4. Other purpose</option>
  <option value="NA">5. NA</option>
</select>