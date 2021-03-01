<script>
  import {
    isExempt,
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
  import CountyCode from "./CountyCode.svelte";
  import CensusTract from "./CensusTract.svelte";
  import PropertyValue from "./PropertyValue.svelte";
  import ManufacturedPropertyType from "./ManufacturedPropertyType.svelte";
  import ManufacturedLandType from "./ManufacturedLandType.svelte";
  import MultifamilyUnits from "./MultifamilyUnits.svelte";

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
    <CountyCode/>
  </div>
  <div class="col-sm-6 col-md-3">
    <CensusTract/>
  </div>
</div>

{#if !$isExempt}
  <div class="row">
    <div class="col-sm-6 col-md-3">
      <PropertyValue/>
    </div>
    <div class="col-sm-6 col-md-3">
      <ManufacturedPropertyType/>
    </div>
    <div class="col-sm-6 col-md-3">
      <ManufacturedLandType/>
    </div>
    <div class="col-sm-6 col-md-3">
      <MultifamilyUnits/>
    </div>
  </div>
{/if}
