<script>
    import {
      applicantCreditScore
    } from "../../stores.js";
    import HRValidation from "../HRValidation.svelte";
</script>

<style>
input[type="checkbox"] {
    height: 20px;
    width: 20px;
    background-color: #eee;
  }
</style>

<label for="CreditScore">Score</label>
<input
  class="ml-3 mr-3"
  type="text"
  id="CreditScore"
  bind:value={$applicantCreditScore}
  on:change={applicantCreditScore.change}
  style="max-width: 20%;" />

<label for="appScoreNAN">Not a #</label>
<input
  type="checkbox"
  id="appScoreNAN"
  tabindex="-1"
  checked={$applicantCreditScore == '7777' ? true : false}
  on:change={applicantCreditScore.NAN}
/>

<label for="appScoreNA">NA</label>
<input
  type="checkbox"
  id="appScoreNA"
  tabindex="-1"
  checked={$applicantCreditScore == '8888' ? true : false}
  on:change={applicantCreditScore.NA}
  />

<label for="appScoreExempt">Exempt</label>
<input
  type="checkbox"
  id="appScoreExempt"
  tabindex="-1"
  checked={$applicantCreditScore == '1111' ? true : false}
  on:change={applicantCreditScore.Exempt}/>
<div class="col-sm-12 col-md-6">
  {#if Number($applicantCreditScore) > 0 && $applicantCreditScore.length < 5}
    <HRValidation isValid={true} />
  {:else}
    <HRValidation />
  {/if}
</div>