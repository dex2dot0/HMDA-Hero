<script>
    import {
        coapplicantCreditScore,
        NoCoApp
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
</script>

<style> 
  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    background-color: #eee;
  }
</style>

<label for="CreditScore">Credit Score</label>
<input
  class="ml-3 mr-3"
  type="text"
  disabled={$NoCoApp}
  bind:value={$coapplicantCreditScore}
  on:change={coapplicantCreditScore.change}
  id="CreditScore"
  style="max-width: 20%;" />

<label for="coappScoreNAN">Not a #</label>
<input
  type="checkbox"
  id="coappScoreNAN"
  tabindex="-1"
  checked={$coapplicantCreditScore == '7777' ? true : false}
  on:change={coapplicantCreditScore.NAN}/>

<label for="coappScoreNA">NA</label>
<input
  type="checkbox"
  id="coappScoreNA"
  tabindex="-1"
  checked={$coapplicantCreditScore == '8888' ? true : false}
  on:change={coapplicantCreditScore.NA} />

<label for="coappScoreExempt">Exempt</label>
<input
  type="checkbox"
  id="coappScoreExempt"
  tabindex="-1"
  checked={$coapplicantCreditScore == '1111' ? true : false}
  on:change={coapplicantCreditScore.Exempt} />
<div class="col-sm-12 col-md-6">
  {#if Number($coapplicantCreditScore) > 0 && $coapplicantCreditScore.length < 5}
    <HRValidation isValid={true} />
  {:else}
    <HRValidation />
  {/if}
</div>