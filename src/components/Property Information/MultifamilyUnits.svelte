<script>
    import {
      multifamilyUnits
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="MFUnits">Multifamily Affrd. Units</label>
{#if $multifamilyUnits !== 'NA'}
  <Checkbox value={false} on:notify={multifamilyUnits.NA} />
{:else}
  <Checkbox value={true} on:notify={multifamilyUnits.NA} />
{/if}
<input
  class="form-control"
  type="text"
  id="MFUnits"
  placeholder="ex. 5 (or) NA (or) Exempt"
  bind:value={$multifamilyUnits}
  on:change={multifamilyUnits.changed} />
{#if $multifamilyUnits !== '' || $multifamilyUnits == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation />
{/if}