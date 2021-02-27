<script>
    import {
        preapproval
    } from "./../../../../stores.js";
</script>

<label for="Preapproval">Preapproval</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$preapproval !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="Preapproval"
  tabindex="0"
  bind:value={$preapproval}
  on:change={preapproval.change}>
  <option />
  <option value="1">1. Preapproval requested</option>
  <option value="2">2. Preapproval not requested</option>
</select>