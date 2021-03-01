<script>
    import {
        actionTaken
    } from "./../../stores.js";
</script>

 <label for="ActionTaken">Action Taken</label>
 <!-- svelte-ignore a11y-no-onchange-->
 <select
   class={$actionTaken !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
   id="ActionTaken"
   tabindex="0"
   bind:value={$actionTaken}
   on:change={actionTaken.change}>
   <option />
   <option value="1">1. Loan origination</option>
   <option value="2">2. Application approved but not accepted</option>
   <option value="3">3. Application denied</option>
   <option value="4">4. App withdrawn by applicant</option>
   <option value="5">5. File closed for incompleteness</option>
   <option value="6">6. Purchased loan</option>
   <option value="7">7. Preapproval request denied</option>
   <option value="8">
     8. Preapproval request approved but not accepted
   </option>
 </select>