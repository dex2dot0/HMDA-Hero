<script>
    import {
      applicantCreditModel
    } from "../../stores.js";
</script>

<!-- svelte-ignore a11y-label-has-associated-control-->
<label for="CreditModel" style="font-size: 10px">
    Applicant Name & Version of Credit Scoring Model
  </label>
  <!-- svelte-ignore a11y-no-onchange-->
  <select
    class={$applicantCreditModel > 0 ? 'custom-select is-valid' : 'custom-select is-invalid'}
    id="CreditModel"
    bind:value={$applicantCreditModel}
    on:change={applicantCreditModel.change}>
    <option />
    <option value="1">1.Equifax Beacon 5.0</option>
    <option value="2">2.Experian Fair Isaac</option>
    <option value="3">3.FICO Risk Score Classic 04</option>
    <option value="4">4.FICO Risk Score Classic 98</option>
    <option value="5">5.VantageScore 2.0</option>
    <option value="6">6.VantageScore 3.0</option>
    <option value="7">7.More than one credit scoring model</option>
    <option value="8">8.Other model</option>
    <option value="9">9.Not applicable</option>
    <option value="1111">1111.Exempt</option>
  </select>