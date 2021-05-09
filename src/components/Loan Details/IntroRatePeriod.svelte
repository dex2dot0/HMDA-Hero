<script>
  import { introRatePeriod } from './../../stores.js';

  import Checkbox from '../Checkbox.svelte';
  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="IntroRatePeriod">Intro Rate Period</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-26" />
    {#if $introRatePeriod !== 'NA'}
      <Checkbox value="{false}" on:notify="{introRatePeriod.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{introRatePeriod.NA}" />
    {/if}
    <Modal
      idName="IntroRateModal"
      modalTitle="Introductory Rate Period"
      modalBody="<p>Example:</p> <p>24 (or) NA</p> <p>(or) Exempt</p>" />
    <QualityErrors
      errors="1"
      idName="introRatePeriodQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="introRatePeriodValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="IntroRatePeriod"
      tabindex="0"
      bind:value="{$introRatePeriod}"
      on:change="{introRatePeriod.changed}" />
    {#if $introRatePeriod > 0 || $introRatePeriod == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
