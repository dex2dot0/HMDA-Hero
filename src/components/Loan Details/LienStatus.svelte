<script>
    import {
        lienStatus
    } from "./../../stores.js";
</script>

<label for="LienStatus">Lien Status</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$lienStatus !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="LienStatus"
  tabindex="0"
  bind:value={$lienStatus}
  on:change={lienStatus.change}>
  <option />
  <option value="1">1. Secured by a first lien</option>
  <option value="2">2. Secured by a subordinate lien</option>
</select>