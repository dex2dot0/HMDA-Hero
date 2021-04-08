<script>
    import {
      applicantCreditScore
    } from "../../stores.js";
    import HRValidation from "../HRValidation.svelte";
    import Checkbox from "../Checkbox.svelte";
</script>

<div class="row align-items-center">
  <div class="col-sm-12 col-md-auto">
    <label for="CreditScore">Score</label>
  </div>
  <div class="col">
    <Checkbox text="Not a #" value={$applicantCreditScore == '7777' ? true : false} on:notify={applicantCreditScore.NAN} />
    <Checkbox value={$applicantCreditScore == '8888' ? true : false} on:notify={applicantCreditScore.NA} />
    <Checkbox text="Exempt" value={$applicantCreditScore == '1111' ? true : false} on:notify={applicantCreditScore.Exempt} />
  </div>
  <div class="col-sm-12">
    <input
      class="form-control"
      type="text"
      id="CreditScore"
      bind:value={$applicantCreditScore}
      on:change={applicantCreditScore.change}/>
    {#if Number($applicantCreditScore) > 0 && $applicantCreditScore.length < 5}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </div>
</div>