<script>
    import {
        constructionMethod
    } from "./../../../../stores.js";
</script>

<label for="ConstructionMethod">Construction Method</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$constructionMethod !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="ConstructionMethod"
  bind:value={$constructionMethod}
  on:change={constructionMethod.change}>
  <option />
  <option value="1">1. Site-built</option>
  <option value="2">2. Manufactured Home</option>
</select>