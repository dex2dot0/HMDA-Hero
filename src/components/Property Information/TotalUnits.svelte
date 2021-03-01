<script>
    import {
        totalUnits
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

 <label for="Units">Total Units</label>
 <input
   class="form-control"
   type="text"
   id="Units"
   placeholder="ex. 5"
   bind:value={$totalUnits} 
   on:change={totalUnits.change}/>
 {#if $totalUnits > 0}
   <HRValidation isValid={true} />
 {:else}
   <HRValidation />
 {/if}