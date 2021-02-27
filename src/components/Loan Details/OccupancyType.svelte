<script>
    import {
        occupancyType
    } from "./../../stores.js";s
</script>

<label for="OccupancyType">Occupancy Type</label>
<!-- svelte-ignore a11y-no-onchange-->
<select
  class={$occupancyType ? 'custom-select is-valid' : 'custom-select is-invalid'}
  id="OccupancyType"
  tabindex="0"
  bind:value={$occupancyType}
  on:change={occupancyType.change}>
  <option />
  <option value="1">1. Principal residence</option>
  <option value="2">2. Second residence</option>
  <option value="3">3. Investment property</option>
</select>