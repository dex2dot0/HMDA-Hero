<script>
  import {
      submissionOfApplication
  } from "./../../stores.js";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="submissionOfApplication">Submission of Application</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-33-i"/>
    <QualityErrors errors=1 idName="submissionOfApplicationQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="submissionOfApplicationValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class={$submissionOfApplication > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
      id="submissionOfApplication"
      bind:value={$submissionOfApplication}
      on:change={submissionOfApplication.change}
      required>
      <option />
      <option value="1">1.Submitted directly to your institution</option>
      <option value="2">2.Not submitted directly to your institution</option>
      <option value="3">3.Not applicable</option>
      <option value="1111">1111.Exempt</option>
    </select>
  </span>
</DataFieldFormat>