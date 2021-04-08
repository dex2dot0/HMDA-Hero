<script>
    import {
        coapplicantCreditScore,
        NoCoApp
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
    import Checkbox from "../Checkbox.svelte";
</script>

<div class="row align-items-center">
  <div class="col-sm-12 col-md-auto">
    <label for="CreditScore">Credit Score</label>
  </div>
  <div class="col">
    <Checkbox text="Not a #" value={$coapplicantCreditScore == '7777' ? true : false} on:notify={coapplicantCreditScore.NAN} />
    <Checkbox value={$coapplicantCreditScore == '8888' ? true : false} on:notify={coapplicantCreditScore.NA} />
    <Checkbox text="Exempt" value={$coapplicantCreditScore == '1111' ? true : false} on:notify={coapplicantCreditScore.Exempt} />
  </div>
  <div class="col-sm-12">
    <input
      class="form-control"
      type="text"
      disabled={$NoCoApp}
      bind:value={$coapplicantCreditScore}
      on:change={coapplicantCreditScore.change}
      id="CreditScore"/>
    {#if Number($coapplicantCreditScore) > 0 && $coapplicantCreditScore.length < 5}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </div>
</div>