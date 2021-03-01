<script>
    import {
        hoepa
    } from "./../../stores.js";
</script>

<label for="HOEPA">HOEPA Status</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$hoepa > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="HOEPA"
  bind:value={$hoepa}
  on:change={hoepa.change}>
  <option />
  <option value="1">1. High-cost mortgage</option>
  <option value="2">2. Not a high-cost mortgage</option>
  <option value="3">3. Not applicable</option>
</select>