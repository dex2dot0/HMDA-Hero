<script>
    import {
        ioPayments
    } from "./../../../../stores.js";
</script>

<label for="IO">Interest-Only Payments</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$ioPayments !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="IO"
  tabindex="0"
  bind:value={$ioPayments}
  on:change={ioPayments.change}>
  <option />
  <option value="1">1.Interest-only payments</option>
  <option value="2">2.No interest-only payments</option>
  <option value="1111">1111.Exempt</option>
</select>