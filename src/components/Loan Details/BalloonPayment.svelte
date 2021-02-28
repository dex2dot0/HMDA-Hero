<script>
    import {
        balloonPayment
    } from "./../../../../stores.js";
</script>

<label for="Balloon">Balloon Payment</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$balloonPayment !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="Balloon"
  tabindex="0"
  bind:value={$balloonPayment}
  on:change={balloonPayment.change}>
  <option />
  <option value="1">1.Balloon payment</option>
  <option value="2">2.No balloon payment</option>
  <option value="1111">1111.Exempt</option>
</select>