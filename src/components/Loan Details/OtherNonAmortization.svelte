<script>
    import {
        otherNonAm
    } from "./../../../../stores.js";
</script>

<label for="OtherAm">Other Non-amortizing Features</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$otherNonAm !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="OtherAm"
  tabindex="0"
  bind:value={$otherNonAm}
  on:change={otherNonAm.change}>
  <option />
  <option value="1">1.Other no-fully amortizing features</option>
  <option value="2">2.No other non-fully amortizing features</option>
  <option value="1111">1111.Exempt</option>
</select>