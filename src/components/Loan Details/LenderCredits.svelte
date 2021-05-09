<script>
  import { lenderCredits } from './../../stores.js';

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
    <label for="LenderCredits">Lender Credits</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-20" />
    {#if $lenderCredits !== 'NA'}
      <Checkbox value="{false}" on:notify="{lenderCredits.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{lenderCredits.NA}" />
    {/if}
    <Modal
      idName="LenderCreditsModal"
      modalTitle="Lender Credits"
      modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p> <p>
      If no lender credits were provided, leave this data field blank </p>" />
    <QualityErrors
      errors="1"
      idName="lenderCreditsQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="lenderCreditsValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="LenderCredits"
      tabindex="0"
      bind:value="{$lenderCredits}"
      on:change="{lenderCredits.changed}" />
    {#if $lenderCredits > 0 || $lenderCredits == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation isValid="{false}" />
    {/if}
  </span>
</DataFieldFormat>
