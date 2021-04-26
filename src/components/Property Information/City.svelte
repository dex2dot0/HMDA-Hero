<script>
  import {
    city
  } from "./../../stores.js";

  import Checkbox from "../Checkbox.svelte";
  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="City">City</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-9-i"/>
    {#if $city !== 'NA'}
      <Checkbox value={false} on:notify={city.NA} />
    {:else}
      <Checkbox value={true} on:notify={city.NA} />
    {/if}
    <Modal
      idName="CityModal"
      modalTitle="City"
      modalBody="<p>Example:</p> <p>Anytown (or)</p> <p>NA (or)</p>
      <p>Exempt</p>" />
    <QualityErrors errors=1 idName="cityQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="cityValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="City"
      bind:value={$city}
      on:change={city.changed} />
    {#if $city !== ''}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation />
    {/if}
  </span>
</DataFieldFormat>