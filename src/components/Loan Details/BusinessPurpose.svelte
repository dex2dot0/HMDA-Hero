<script>
    import {
        businessOrCommercial
    } from "./../../stores.js";
</script>

<label for="BizPurpose">Business/Commercial Purpose</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$businessOrCommercial !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="BizPurpose"
  tabindex="0"
  bind:value={$businessOrCommercial}
  on:change={businessOrCommercial.change}>
  <option />
  <option value="1">
    1.Primarily for a business or commercial purpose
  </option>
  <option value="2">
    2.Not primarily for a business or commercial purpose
  </option>
  <option value="1111">1111.Exempt</option>
</select>