<script>
  import { pointsFees } from './../../stores.js';

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
    <label for="TotalPntsFees">Total Points and Fees</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-17" />
    {#if $pointsFees !== 'NA'}
      <Checkbox value="{false}" on:notify="{pointsFees.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{pointsFees.NA}" />
    {/if}
    <Modal
      idName="PointsModal"
      modalTitle="Total Points & Fees"
      modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>" />
    <QualityErrors
      errors="1"
      idName="totalPntsFeesQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="totalPntsFeesValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="TotalPntsFees"
      tabindex="0"
      bind:value="{$pointsFees}"
      on:change="{pointsFees.changed}" />
    {#if $pointsFees > 0 || $pointsFees == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
