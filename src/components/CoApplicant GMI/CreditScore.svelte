<script>
    import {
        coapplicantCreditScore,
        NoCoApp
    } from "./../../stores.js";

    import HRValidation from "../HRValidation.svelte";
    import Checkbox from "../Checkbox.svelte";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CreditScore">Credit Score</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-15" />
    <Checkbox text="Not a #" value={$coapplicantCreditScore == '7777' ? true : false} on:notify={coapplicantCreditScore.NAN} />
    <Checkbox value={$coapplicantCreditScore == '8888' ? true : false} on:notify={coapplicantCreditScore.NA} />
    <Checkbox text="Exempt" value={$coapplicantCreditScore == '1111' ? true : false} on:notify={coapplicantCreditScore.Exempt} />
    <QualityErrors errors=1 idName="CreditScoreErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="CreditScoreErros" errorsHTML=""/>
  </span> 
  <span slot="input">
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
  </span>
</DataFieldFormat>
