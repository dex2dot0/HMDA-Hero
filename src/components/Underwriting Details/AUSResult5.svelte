<script>
    import {
        ausResult5
    } from "./../../stores.js";
</script>

<label for="AUSR5">AUS Result: 5</label>
<!-- svelte-ignore a11y-no-onchange-->
<select class="custom-select" id="AUSR5" bind:value={$ausResult5} on:change={ausResult5.change}>
  <option />
  <option value="1">1.Approve/Eligible</option>
  <option value="2">2.Approve/Ineligible</option>
  <option value="3">3.Refer/Eligible</option>
  <option value="4">4.Refer/Ineligible</option>
  <option value="5">5.Refer with Caution</option>
  <option value="6">6.Out of Scope</option>
  <option value="7">7.Error</option>
  <option value="8">8.Accept</option>
  <option value="9">9.Caution</option>
  <option value="10">10.Ineligible</option>
  <option value="11">11.Incomplete</option>
  <option value="12">12.Invalid</option>
  <option value="13">13.Refer</option>
  <option value="14">14.Eligible</option>
  <option value="15">15.Unable to Determine</option>
  <option value="16">16.Other</option>
  <option value="18">18.Accept/Eligible</option>
  <option value="19">19.Accept/Ineligible</option>
  <option value="20">20.Accept/Unable to Determine</option>
  <option value="21">21.Refer with Caution/Eligible</option>
  <option value="22">22.Refer with Caution/Ineligible</option>
  <option value="23">23.Refer/Unable to Determine</option>
  <option value="24">24.Refer with Caution/Unable to Determine</option>
</select>