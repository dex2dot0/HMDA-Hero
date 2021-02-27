<script>
    import {
        initiallyPayable
    } from "./../../stores.js";
</script>

<label for="InitPay">Initially Payable to Your Institution</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$initiallyPayable > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="InitPay"
  bind:value={$initiallyPayable}
  on:change={initiallyPayable.change}>
  <option />
  <option value="1">1.Initially payable to your institution</option>
  <option value="2">2.Not initially payable to your institution</option>
  <option value="3">3.Not applicable</option>
  <option value="1111">1111.Exempt</option>
</select>