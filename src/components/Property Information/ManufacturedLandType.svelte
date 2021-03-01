<script>
    import {
        manufacturedPropertyInterest
    } from "./../../stores.js";
</script>

<label for="MFLandType">Manufactured Home Land Type</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$manufacturedPropertyInterest > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="MFLandType"
  bind:value={$manufacturedPropertyInterest}
  on:change={manufacturedPropertyInterest.change}>
  <option />
  <option value="1">1.Direct ownership</option>
  <option value="2">2.Indirect ownership</option>
  <option value="3">3.Paid leashold</option>
  <option value="4">4.Unpaid leashold</option>
  <option value="5">5.Not applicable</option>
  <option value="1111">1111.Exempt</option>
</select>