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
  import Modal from "../Modal.svelte";
  import Checkbox from "../Checkbox.svelte";
  import HRValidation from "../HRValidation.svelte";
  import { getSetting } from "../../Excel Scripts/getSetting.js";

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
    <!-- Street Address -->
    <label for="StreetAddress">Street Address or</label>
    {#if $streetAddress !== 'NA'}
      <Checkbox value={false} on:notify={streetAddress.NA} />
    {:else}
      <Checkbox value={true} on:notify={streetAddress.NA} />
    {/if}

    <Modal
      idName="AddressModal"
      modalTitle="Street Address"
      modalBody="<p>Example:</p> <p>456 W Somewhere Ave Apt 201 (or)</p> <p>NA
      (or)</p> <p>Exempt</p>" />

    <input
      class="form-control"
      type="text"
      id="StreetAddress"
      bind:value={$streetAddress}
      on:change={streetAddress.changed} />
    {#if $streetAddress !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
  <div class="col-sm-6">
    <!-- City -->
    <label for="City">City or</label>
    {#if $city !== 'NA'}
      <Checkbox value={false} on:notify={city.NA} />
    {:else}
      <Checkbox value={true} on:notify={city.NA} />
    {/if}

    <Modal
      idName="CityModal"
      modalTitle="City"
      modalBody="<p>Example:</p> <p>Anytown (or)</p> <p>NA (or)</p>
      <p>Exempt</p>" />
    <input
      class="form-control"
      type="text"
      id="City"
      bind:value={$city}
      on:change={city.changed} />
    {#if $city !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
  <div class="col-sm-3">
    <!-- State -->
    <label for="State">State or</label>
    {#if $stateCode !== 'NA'}
      <Checkbox value={false} on:notify={stateCode.NA} />
    {:else}
      <Checkbox value={true} on:notify={stateCode.NA} />
    {/if}

    <input
      class="form-control"
      type="text"
      id="State"
      placeholder="ex. CA (or) NA"
      bind:value={$stateCode}
      on:change={stateCode.changed} />
    {#if $stateCode !== '' && $stateCode.length === 2}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
  <div class="col-sm-3">
    <!-- Zip -->
    <label for="zip">Zip Code or</label>
    {#if $zipCode !== 'NA'}
      <Checkbox value={false} on:notify={zipCode.NA} />
    {:else}
      <Checkbox value={true} on:notify={zipCode.NA} />
    {/if}
    <input
      class="form-control"
      type="text"
      id="zip"
      placeholder="ex. 90049-9998 (or) NA"
      bind:value={$zipCode}
      on:change={zipCode.changed} />
    {#if $zipCode.length > 4 || $zipCode === 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
  </div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-3">
    <!-- Construction Method -->
    <label for="ConstructionMethod">Construction Method</label>
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$constructionMethod !== '' ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="ConstructionMethod"
      bind:value={$constructionMethod}
      on:change={constructionMethod.change}>
      <option />
      <option value="1">1. Site-built</option>
      <option value="2">2. Manufactured Home</option>
    </select>

    <!--****************** -->
  </div>
  <div class="col-sm-6 col-md-3">
    <!-- Units -->
    <label for="Units">Total Units</label>
    <input
      class="form-control"
      type="text"
      id="Units"
      placeholder="ex. 5"
      bind:value={$totalUnits} 
      on:change={totalUnits.change}/>
    {#if $totalUnits > 0}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
    <!--****************** -->
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
