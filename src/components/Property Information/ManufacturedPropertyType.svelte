<script>
    import {
        manufacturedHomeType
    } from "./../../stores.js";
</script>

<label for="MFPropertyType">Manufactured Home Property Type</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$manufacturedHomeType > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="MFPropertyType"
  bind:value={$manufacturedHomeType}
  on:change={manufacturedHomeType.change}>
  <option />
  <option value="1">1.Manufactured home and land</option>
  <option value="2">2.Manufactured home and not land</option>
  <option value="3">3.Not applicable</option>
  <option value="1111">1111.Exempt</option>
</select>