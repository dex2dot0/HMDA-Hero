<script>
  import { streetAddress } from './../../stores.js';

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
    <label for="StreetAddress">Street Address</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-i" />
    {#if $streetAddress !== 'NA'}
      <Checkbox value="{false}" on:notify="{streetAddress.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{streetAddress.NA}" />
    {/if}
    <Modal
      idName="AddressModal"
      modalTitle="Street Address"
      modalBody="<p>Example:</p> <p>456 W Somewhere Ave Apt 201 (or)</p> <p>NA
      (or)</p> <p>Exempt</p>" />
    <QualityErrors
      errors="1"
      idName="StreetAddressQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="StreetAddressValidityErrors"
      errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="StreetAddress"
      bind:value="{$streetAddress}"
      on:change="{streetAddress.changed}" />
    {#if $streetAddress !== ''}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
