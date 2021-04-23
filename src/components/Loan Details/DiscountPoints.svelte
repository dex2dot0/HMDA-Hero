<script>
  import {
      discountPoints
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
    <label for="DiscountPoints">Discount Points</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-19"/>
    {#if $discountPoints !== 'NA'}
      <Checkbox value={false} on:notify={discountPoints.NA} />
    {:else}
      <Checkbox value={true} on:notify={discountPoints.NA} />
    {/if}
    <Modal
      idName="DiscountPointsModal"
      modalTitle="Discount Points"
      modalBody="<p>Example:</p> <p>2399.04 (or) NA</p> <p>(or) Exempt</p>
      <p>If no points were paid, leave this data field blank</p>" />
    <QualityErrors errors=1 idName="discountPointsQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="discountPointsValidityErrors" errorsHTML=""/>
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="DiscountPoints"
      tabindex="0"
      bind:value={$discountPoints}
      on:change={discountPoints.changed} />
    {#if $discountPoints > 0 || $discountPoints == 'NA'}
      <HRValidation isValid={true} />
    {:else}
      <HRValidation isValid={false} />
    {/if}
  </span>
</DataFieldFormat>