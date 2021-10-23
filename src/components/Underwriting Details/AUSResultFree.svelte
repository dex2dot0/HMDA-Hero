<script>
  import {
    ausResultOther,
    ausResult1,
    ausResult2,
    ausResult3,
    ausResult4,
    ausResult5
  } from "./../../stores.js";

  import Modal from "../Modal.svelte";
  import HRValidation from "../HRValidation.svelte";
  import DataFieldFormat from "../DataFieldFormat.svelte";
  import RegLink from "../RegLink.svelte";
  import QualityErrors from "../QualityErrors.svelte";
  import ValidityErrors from "../ValidityErrors.svelte";
</script>

<DataFieldFormat>
  <span slot="label">
    <label for="AUSRFree">AUS Result Free Form Text</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-35"/>
    <Modal
      idName="AUSResultModal"
      modalTitle="AUS Result Free Form Text"
      modalBody="<p> Specify in text the Other Automated Underwriting System
      Result(s) if 16 is entered. </p> <p>Otherwise, leave this data field
      blank</p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="AUSRFreeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="AUSRFreeValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="AUSRFree"
      bind:value={$ausResultOther} 
      on:change={ausResultOther.change}/>
    {#if $ausResult1 == 16 || $ausResult2 == 16 || $ausResult3 == 16 || $ausResult4 == 16 || $ausResult5 == 16}
      {#if $ausResultOther !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
    {/if}
  </span>
</DataFieldFormat>