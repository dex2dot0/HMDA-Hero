<script>
    import {
        negativeAm
    } from "./../../stores.js";
</script>

<label for="NegAm">Negative Amortization</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$negativeAm !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="NegAm"
  tabindex="0"
  bind:value={$negativeAm}
  on:change={negativeAm.change}>
  <option />
  <option value="1">1.Negative Amortization</option>
  <option value="2">2.No negative amorization</option>
  <option value="1111">1111.Exempt</option>
</select>