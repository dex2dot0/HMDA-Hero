<script>
  import { isExempt } from './../../stores.js';

  import Submission from './Submission.svelte';
  import InitiallyPayable from './InitiallyPayable.svelte';
  import RateSpread from './RateSpread.svelte';
  import Denial1 from './Denial1.svelte';
  import Denial2 from './Denial2.svelte';
  import Denial3 from './Denial3.svelte';
  import Denial4 from './Denial4.svelte';
  import DenialFree from './DenialFree.svelte';

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
  <h6 style="color: #217346; font-style: italic; margin-top: 1rem;">
    All Fields Are Exempt
  </h6>
{:else}
  <div class="row">
    <div class="col-12 col-md-4">
      <Submission />
    </div>
    <div class="col-12 col-md-4">
      <InitiallyPayable />
    </div>
    <div class="col-12 col-md-4">
      <RateSpread />
    </div>
  </div>

  <div class="row">
    <div class="col-12 col-md-3">
      <Denial1 />
    </div>
    <div class="col-12 col-md-3">
      <Denial2 />
    </div>
    <div class="col-12 col-md-3">
      <Denial3 />
    </div>
    <div class="col-12 col-md-3">
      <Denial4 />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <DenialFree />
    </div>
  </div>
{/if}
