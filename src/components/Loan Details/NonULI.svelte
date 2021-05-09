<script>
  import { ULI } from './../../stores.js';
  import HRValidation from '../HRValidation.svelte';
  import Modal from '../Modal.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="NULI">Non-Universal Loan Identifier (NULI)</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/3/#d-5" />
    <Modal
      idName="NULI"
      modalTitle="Non-Universal Loan Identifier (NULI)"
      tabindex="-1"
      modalBody="<p>Up to 22 characters</p> <p>1. May be letters, numerals, or
            a combination of both</p> <p>2. Must be unique within the financial
            institution, and</p> <p>3. Must not include any information that could
            be used to directly identify the applicant or borrower </p>" />
    <QualityErrors errors="1" idName="NULIQualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="NULIValidityErrors" errorsHTML="" />
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      placeholder="ex. 999143X"
      id="NULI"
      tabindex="0"
      bind:value="{$ULI}" />
    {#if $ULI !== '' && $ULI.length < 23}
      <HRValidation isValid="{true}" />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>
