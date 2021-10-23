<script>
  import { LoanNumber } from './../../stores.js';
  import Modal from '../Modal.svelte';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="LoanNumber">Loan Number/Internal Identifier</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-1-i-B" />
    <Modal
      idName="LoanNumberModal"
      modalTitle="Loan Number"
      tabindex="-1"
      modalBody="<p>Up to 23 characters</p> <p>1. May be letters, numerals, or
        a combination of both</p> <p>2. Must be unique within the financial
        institution, and</p> <p>3. Must not include any information that could
        be used to directly identify the applicant or borrower </p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="LoanNumberQualityErrors" errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="LoanNumberValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      placeholder="Required to use generate ULI button"
      id="LoanNumber"
      tabindex="0"
      bind:value="{$LoanNumber}" />
  </span>
</DataFieldFormat>
