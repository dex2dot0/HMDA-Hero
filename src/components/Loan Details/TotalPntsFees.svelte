<script>
    import {
        pointsFees
    } from "./../../../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

 <label for="TotalPntsFees">Total Points and Fees or</label>
 {#if $pointsFees !== 'NA'}
   <Checkbox value={false} on:notify={pointsFees.NA} />
 {:else}
   <Checkbox value={true} on:notify={pointsFees.NA} />
 {/if}
 <Modal
   idName="PointsModal"
   modalTitle="Total Points & Fees"
   modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>" />
 <input
   class="form-control"
   type="text"
   id="TotalPntsFees"
   tabindex="0"
   bind:value={$pointsFees}
   on:change={pointsFees.changed} />
 {#if $pointsFees > 0 || $pointsFees == 'NA'}
   <HRValidation isValid={true} />
 {:else}
   <HRValidation isValid={false} />
 {/if}