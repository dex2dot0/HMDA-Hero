<script>
  import Checkbox from '../components/Checkbox.svelte';
  import Modal from '../components/Modal.svelte';
  import { getLEI } from '../Excel Scripts/getLEI.js';
  import { setSetting } from '../Excel Scripts/setSetting.js';
  import { getSetting } from '../Excel Scripts/getSetting.js';

  let lei;
  let exempt = false;
  //Attempt to load settings
  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function () {
        //Attempt to pull LEI from Excel Settings
        let leiSetting = await getSetting('LEI');
        if (leiSetting) {
          lei = leiSetting;
        } else {
          console.log('attempting to set LEI from Excel file');
          try {
            let leiFromExcel = await getLEI();
            let leiArray = leiFromExcel[0];
            lei = leiArray[0];
            setSetting('LEI', leiArray[0]);
          } catch (error) {
            console.log('Error attempting to set LEI from Excel file');
            console.log(error);
          }
        }

        //Attempt to pull Exemption from Excel Settings
        let exemptSetting = await getSetting('EXEMPT');
        if (exemptSetting) {
          exempt = exemptSetting;
        } else {
          setSetting('EXEMPT', false);
        }
      });
    }
  })();

  async function updateLEI(lei) {
    let updatedLEI = lei.target.value;
    console.log(`Updating LEI to ${updatedLEI}`);
    setSetting('LEI', updatedLEI);
    lei = updatedLEI;
  }

  async function updateExempt() {
    exempt = !exempt;
    console.log(`Updating is exempt setting to ${exempt}`);
    setSetting('EXEMPT', exempt);
  }
</script>

<style>
  .container {
    padding: 20px;
  }

  h6 {
    color: #217346;
  }
</style>

<div class="container">
  <div class="form-row d-flex align-items-end">
    <div class="col-10">
      <h6>
        Apply S2155 Exemption<Modal
          idName="exemptionModal"
          modalTitle="S2155 Exemption"
          tabindex="-1"
          modalBody="<p>Applying the S2155 exemption in your settings controls which fields you will see when adding or editing loans. 
          If you would like to see all fields regardless of exemption, do not apply this setting.</p>" />
      </h6>
    </div>
    <div class="col d-flex align-self-start">
      <Checkbox value="{exempt}" on:notify="{updateExempt}" text="" />
    </div>
  </div>
  <div class="form-row pt-3 d-flex align-items-end">
    <div class="col-1">
      <h6>LEI</h6>
    </div>
    <div class="col pl-4">
      <input
        class="form-control mr-sm-2"
        type="text"
        bind:value="{lei}"
        on:change="{updateLEI}" />
    </div>
  </div>
</div>
