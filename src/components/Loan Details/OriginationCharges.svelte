<script>
  import { originationCharges } from './../../stores.js';

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
    <label for="OrigCharges">Origination Charges</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-18" />
    {#if $originationCharges !== 'NA'}
      <Checkbox value="{false}" on:notify="{originationCharges.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{originationCharges.NA}" />
    {/if}
    <Modal
      idName="OrigChargesModal"
      modalTitle="Origination Charges"
      modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="origChargesQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="origChargesValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="OrigCharges"
      tabindex="0"
      bind:value="{$originationCharges}"
      on:change="{originationCharges.changed}" />
    {#if $originationCharges > 0 || $originationCharges === 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
