<script>
  import {
    isExempt,
    streetAddress,
    city,
    stateCode,
    zipCode,
    constructionMethod,
    totalUnits,
    countyCode,
    censusTract,
    propertyValue,
    manufacturedHomeType,
    manufacturedPropertyInterest,
    multifamilyUnits
  } from "./../../stores.js";
  import Checkbox from "../Checkbox.svelte";
  import HRValidation from "../HRValidation.svelte";
  import { getSetting } from "../../Excel Scripts/getSetting.js";
  import ConstructionMethod from "./ConstructionMethod.svelte";

  import StreetAddress from "./StreetAddress.svelte";
  import City from "./City.svelte";
  import State from "./State.svelte";
  import ZipCode from "./ZipCode.svelte";
  import TotalUnits from "./TotalUnits.svelte";

  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function () {
        //Attempt to pull Exemption from Excel Settings
        let exemptSetting = await getSetting('EXEMPT');
        if (exemptSetting) {
          isExempt.set(exemptSetting);
        }
      });
    }
  })();
</script>

<style>
  label {
    font-weight: bold;
    font-size: 11px;
  }
</style>

<div class="row">
  <div class="col-sm-12">
    <StreetAddress/>
  </div>
  <div class="col-sm-6">
    <City/>
  </div>
  <div class="col-sm-3">
    <State/>
  </div>
  <div class="col-sm-3">
    <ZipCode/>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 col-md-3">
    <ConstructionMethod/>
  </div>
  <div class="col-sm-6 col-md-3">
   <TotalUnits/>
  </div>
  <div class="col-sm-6 col-md-3">
    <!-- County Code -->
    <label for="CountyCode">County Code or</label>
    {#if $countyCode !== 'NA'}
      <Checkbox value={false} on:notify={countyCode.NA} />
    {:else}
      <Checkbox value={true} on:notify={countyCode.NA} />
    {/if}
    <input
      class="form-control"
      type="text"
      id="CountyCode"
      placeholder="ex. 06037 (or) NA"
      bind:value={$countyCode}
      on:change={countyCode.changed} />
    {#if $countyCode.length === 5 || $countyCode === 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-3">
    <!-- Census Tract -->
    <label for="CensusTract">Census Tract or</label>
    {#if $censusTract !== 'NA'}
      <Checkbox value={false} on:notify={censusTract.NA} />
    {:else}
      <Checkbox value={true} on:notify={censusTract.NA} />
    {/if}
    <input
      class="form-control"
      type="text"
      id="CensusTract"
      data-placement="bottom"
      data-html="true"
      data-toggle="tooltip"
      placeholder="ex. 06037264000 (or) NA"
      bind:value={$censusTract}
      on:change={censusTract.changed} />
    {#if $censusTract.length === 11 || $censusTract == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
</div>

{#if !$isExempt}
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <!-- Property Value -->
      <label for="Value">Property Value or</label>
      {#if $propertyValue !== 'NA'}
        <Checkbox value={false} on:notify={propertyValue.NA} />
      {:else}
        <Checkbox value={true} on:notify={propertyValue.NA} />
      {/if}
      <input
        class="form-control"
        type="text"
        id="Value"
        placeholder="ex. 350500 (or) NA (or) Exempt"
        bind:value={$propertyValue}
        on:change={propertyValue.changed} />
      {#if $propertyValue !== '' || $propertyValue == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Manufactured Home Property Type -->
      <label for="MFPropertyType">Manufactured Home Property Type</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$manufacturedHomeType > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="MFPropertyType"
        bind:value={$manufacturedHomeType}
        on:change={manufacturedHomeType.change}>
        <option />
        <option value="1">1.Manufactured home and land</option>
        <option value="2">2.Manufactured home and not land</option>
        <option value="3">3.Not applicable</option>
        <option value="1111">1111.Exempt</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Manufactured Home Land Type -->
      <label for="MFLandType">Manufactured Home Land Type</label>
      <!-- svelte-ignore a11y-no-onchange-->
      <select
        class={$manufacturedPropertyInterest > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
        id="MFLandType"
        bind:value={$manufacturedPropertyInterest}
        on:change={manufacturedPropertyInterest.change}>
        <option />
        <option value="1">1.Direct ownership</option>
        <option value="2">2.Indirect ownership</option>
        <option value="3">3.Paid leashold</option>
        <option value="4">4.Unpaid leashold</option>
        <option value="5">5.Not applicable</option>
        <option value="1111">1111.Exempt</option>
      </select>

      <!--****************** -->
    </div>
    <div class="col-sm-6 col-md-3">
      <!-- Multifamily Units -->
      <label for="MFUnits">Multifamily Affrd. Units or</label>
      {#if $multifamilyUnits !== 'NA'}
        <Checkbox value={false} on:notify={multifamilyUnits.NA} />
      {:else}
        <Checkbox value={true} on:notify={multifamilyUnits.NA} />
      {/if}
      <input
        class="form-control"
        type="text"
        id="MFUnits"
        placeholder="ex. 5 (or) NA (or) Exempt"
        bind:value={$multifamilyUnits}
        on:change={multifamilyUnits.changed} />
      {#if $multifamilyUnits !== '' || $multifamilyUnits == 'NA'}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
      <!--****************** -->
    </div>
  </div>
{/if}
