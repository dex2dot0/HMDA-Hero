<script>
    import {
        openEndLOC
    } from "./../../stores.js";
</script>

<label for="HELOC">Open-End LOC</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$openEndLOC !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="HELOC"
  tabindex="0"
  bind:value={$openEndLOC}
  on:change={openEndLOC.change}>
  <option />
  <option value="1">1.Open-end line of credit</option>
  <option value="2">2.Not an open-end line of credit</option>
  <option value="1111">1111.Exempt</option>
</select>