<script>
  import {
    isExempt,
  } from "./../../stores.js";
  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import { getSetting } from "../../Excel Scripts/getSetting.js";

  import Income from "./Income.svelte";
  import HOEPA from "./HOEPA.svelte";
  import DTI from "./DTI.svelte";
  import CLTV from "./CLTV.svelte";
  import AUSSystem1 from "./AUSSystem1.svelte";
  import AUSSystem2 from "./AUSSystem2.svelte";
  import AUSSystem3 from "./AUSSystem3.svelte";
  import AUSSystem4 from "./AUSSystem4.svelte";
  import AUSSystem5 from "./AUSSystem5.svelte";
  import AUSSystemFree from "./AUSSystemFree.svelte";
  import AUSResult1 from "./AUSResult1.svelte";
  import AUSResult2 from "./AUSResult2.svelte";
  import AUSResult3 from "./AUSResult3.svelte";
  import AUSResult4 from "./AUSResult4.svelte";
  import AUSResult5 from "./AUSResult5.svelte";
  import AUSResultFree from "./AUSResultFree.svelte";

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

{#if $isExempt}
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <Income/>
    </div>
    <div class="col-sm-12 col-md-6">
      <HOEPA/>
    </div>
  </div>
{/if}

{#if !$isExempt}
  <div class="row">
    <div class="col-6 col-md-3">
      <Income/>>
    </div>
    <div class="col-6 col-md-3">
      <HOEPA/>>
    </div>
    <div class="col-6 col-md-3">
      <DTI/>
    </div>
    <div class="col-6 col-md-3">
      <CLTV/>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
        Automated Underwriting System
      </h6>
    </div>
    <div class="col-6 col-md-3">
      <AUSSystem1/>
    </div>
    <div class="col-6 col-md-3">
      <AUSSystem2/>
    </div>
    <div class="col-6 col-md-3">
      <AUSSystem3/>
    </div>
    <div class="col-6 col-md-3">
      <AUSSystem4/>
    </div>
    <div class="col-6 col-md-3">
      <AUSSystem5/>
    </div>
    <div class="col-sm-12 col-md-9">
      <AUSSystemFree/>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
        Automated Underwriting System Result
      </h6>
    </div>
    <div class="col-6 col-md-3">
      <AUSResult1/>
    </div>
    <div class="col-6 col-md-3">
      <AUSResult2/>
    </div>
    <div class="col-6 col-md-3">
      <AUSResult3/>
    </div>
    <div class="col-6 col-md-3">
      <AUSResult4/>
    </div>
    <div class="col-6 col-md-3">
      <AUSResult5/>
    </div>
    <div class="col-sm-12 col-md-9">
      <AUSResultFree/>
    </div>
  </div>
{/if}
