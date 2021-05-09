<script>
  import { rateSpread } from './../../stores.js';

  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="RateSpread">Rate Spread</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-12" />
    <Modal
      idName="RateSpreadModal"
      modalTitle="Rate Spread"
      modalBody="<p>Example:</p> <p>0.428 (or) NA</p> <p>(or) Exempt</p>" />
    <QualityErrors errors="1" idName="RateSpreadQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="RateSpreadValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="RateSpread"
      bind:value="{$rateSpread}"
      on:change="{rateSpread.change}" />
    {#if $rateSpread !== ''}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
