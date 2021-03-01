<script>
    import {
        introRatePeriod
    } from "./../../stores.js";

    import Checkbox from "../Checkbox.svelte";
    import Modal from "../Modal.svelte";
    import HRValidation from "../HRValidation.svelte";
</script>

<label for="IntroRatePeriod">Intro Rate Period or</label>
{#if $introRatePeriod !== 'NA'}
  <Checkbox value={false} on:notify={introRatePeriod.NA} />
{:else}
  <Checkbox value={true} on:notify={introRatePeriod.NA} />
{/if}
<Modal
  idName="IntroRateModal"
  modalTitle="Introductory Rate Period"
  modalBody="<p>Example:</p> <p>24 (or) NA</p> <p>(or) Exempt</p>" />
<input
  class="form-control"
  type="text"
  id="IntroRatePeriod"
  tabindex="0"
  bind:value={$introRatePeriod}
  on:change={introRatePeriod.changed} />
{#if $introRatePeriod > 0 || $introRatePeriod == 'NA'}
  <HRValidation isValid={true} />
{:else}
  <HRValidation isValid={false} />
{/if}