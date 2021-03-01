<script>
    import {
        reverseMortgage
    } from "./../../stores.js";
</script>

<label for="HECM">Reverse Mortgage</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$reverseMortgage !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="HECM"
  tabindex="0"
  bind:value={$reverseMortgage}
  on:change={reverseMortgage.change}>
  <option />
  <option value="1">1.Reverse mortgage</option>
  <option value="2">2.Not a reverse mortgage</option>
  <option value="1111">1111.Exempt</option>
</select>