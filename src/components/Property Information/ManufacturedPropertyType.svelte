<script>
  import { manufacturedHomeType } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="MFPropertyType">Manufactured Home Property Type</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="hhttps://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-29" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors
      errors="1"
      idName="MFPropertyTypeQualityErrors"
      errorsHTML="" />
    <ValidityErrors
      errors="2"
      idName="MFPropertyTypeValidityErrors"
      errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$manufacturedHomeType > 0
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="MFPropertyType"
      bind:value="{$manufacturedHomeType}"
      on:change="{manufacturedHomeType.change}">
      <option></option>
      <option value="1">1.Manufactured home and land</option>
      <option value="2">2.Manufactured home and not land</option>
      <option value="3">3.Not applicable</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>
