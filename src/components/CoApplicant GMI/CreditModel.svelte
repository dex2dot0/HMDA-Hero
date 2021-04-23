<script>
    import {
        coapplicantCreditModel,
        NoCoApp
    } from "./../../stores.js";
    import DataFieldFormat from "../DataFieldFormat.svelte";
    import RegLink from "../RegLink.svelte";
    import QualityErrors from "../QualityErrors.svelte";
    import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
    <span slot="label">
        <label for="CreditModel2">
            Name & Version of Credit Scoring Model
        </label>
    </span>
    <span slot="helpers">
      <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-15"/>
      <QualityErrors errors=1 idName="CreditModelQualityErrors" errorsHTML=""/>
      <ValidityErrors errors=2 idName="CreditModelValidityErrors" errorsHTML=""/>
    </span>
    <span slot="input">
        <!-- svelte-ignore a11y-no-onchange-->
        <select
        class={$coapplicantCreditModel > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="CreditModel2"
        disabled={$NoCoApp}
        bind:value={$coapplicantCreditModel}
        on:change={coapplicantCreditModel.change}>
        <option />
        <option value="1">1.Equifax Beacon 5.0</option>
        <option value="2">2.Experian Fair Isaac</option>
        <option value="3">3.FICO Risk Score Classic 04</option>
        <option value="4">4.FICO Risk Score Classic 98</option>
        <option value="5">5.VantageScore 2.0</option>
        <option value="6">6.VantageScore 3.0</option>
        <option value="7">7.More than one credit scoring model</option>
        <option value="8">8.Other model</option>
        <option value="9">9.Not applicable</option>
        {#if $NoCoApp}
            <option value="10" selected>10.No co-applicant</option>
        {:else}
            <option value="10">10.No co-applicant</option>
        {/if}
        </select>
    </span>
</DataFieldFormat>