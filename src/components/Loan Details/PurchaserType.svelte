<script>
  import { purchaserType } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="PurchaserType">Type of Purchaser</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-11" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors
      errors="1"
      idName="purchaserTypeQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="purchaserTypeValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$purchaserType !== ''
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="PurchaserType"
      tabindex="0"
      bind:value="{$purchaserType}"
      on:change="{purchaserType.change}">
      <option></option>
      <option value="0">0. Not applicable</option>
      <option value="1">1. Fannie Mae</option>
      <option value="2">2. Ginnie Mae</option>
      <option value="3">3. Freddie Mac</option>
      <option value="4">4. Farmer Mac</option>
      <option value="5">5. Private Securitizer</option>
      <option value="6">
        6. Commercial bank, savings bank, or savings association
      </option>
      <option value="71">
        71. Credit union, mortgage company, or finance company
      </option>
      <option value="72">72. Life insurance company</option>
      <option value="8">8. Affiliate institution</option>
      <option value="9">9. Other type of purchaser</option>
    </select>
  </span>
</DataFieldFormat>
