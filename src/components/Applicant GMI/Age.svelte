<script>
  import { applicantAge } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import Checkbox from '../Checkbox.svelte';
  import Modal from '../Modal.svelte';
  import HRValidation from '../HRValidation.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="Age">Age</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10-ii" />
    {#if $applicantAge !== 'NA'}
      <Checkbox value="{false}" on:notify="{applicantAge.NA}" />
    {:else}
      <Checkbox value="{true}" on:notify="{applicantAge.NA}" />
    {/if}
    <Modal
      idName="AppAgeModal"
      modalTitle="Age"
      modalBody="<p>Example: 24</p> <p>(or)</p> <p>Descriptions:</p> <p>8888.
      Not Applicable</p>" />
    <QualityErrors
      errors="1"
      idName="AppAgeQualityErrors"
      errorsHTML="<p>Example should inject results</p>" />
    <ValidityErrors
      errors="2"
      idName="AppAgeValidityErrors"
      errorsHTML="<p>Example, should inject results</p>" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="Age"
      bind:value="{$applicantAge}"
      on:change="{applicantAge.changed}" />
    {#if $applicantAge > 0 || $applicantAge == 'NA'}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
