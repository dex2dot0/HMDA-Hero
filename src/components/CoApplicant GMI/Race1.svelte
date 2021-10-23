<script>
  import { coapplicantRace1, NoCoApp } from './../../stores.js';
  import DataFieldFormat from '../DataFieldFormat.svelte';
  import RegLink from '../RegLink.svelte';
  import QualityErrors from '../QualityErrors.svelte';
  import ValidityErrors from '../ValidityErrors.svelte';
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="CoRace1">Race 1</label>
  </span>
  <span slot="helpers">
    <RegLink
      regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-10" />
      <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors="1" idName="Race1QualityErrors" errorsHTML="" />
    <ValidityErrors errors="2" idName="Race1ValidityErrors" errorsHTML="" /> -->
  </span>
  <span slot="input">
    <!-- svelte-ignore a11y-no-onchange-->
    <select
      class="{$coapplicantRace1
        ? 'custom-select is-valid'
        : 'custom-select is-invalid'}"
      id="CoRace1"
      bind:value="{$coapplicantRace1}"
      on:change="{coapplicantRace1.change}"
      disabled="{$NoCoApp}">
      <option></option>
      <option value="1">1. American Indian or Alaska Native</option>
      <option value="2">2. Asian</option>
      <option value="21">21. Asian Indian</option>
      <option value="22">22. Chinese</option>
      <option value="23">23. Filipino</option>
      <option value="24">24. Japanese</option>
      <option value="25">25. Korean</option>
      <option value="26">26. Vietnamese</option>
      <option value="27">27. Other Asian</option>
      <option value="3">3. Black or African American</option>
      <option value="4">4. Native Hawaiian or Other Pacific Islander</option>
      <option value="41">41. Native Hawaiian</option>
      <option value="42">42. Guamanian or Chamorro</option>
      <option value="43">43. Samoan</option>
      <option value="44">44. Other Pacific Islander</option>
      <option value="5">5. White</option>
      <option value="6">
        6. Information not provided by applicant in mail, internet, or telephone
        application
      </option>
      <option value="7">7. NA</option>
      {#if $NoCoApp}
        <option value="8" selected>8. No Co-Applicant</option>
      {:else}
        <option value="8">8. No Co-Applicant</option>
      {/if}
    </select>
  </span>
</DataFieldFormat>
