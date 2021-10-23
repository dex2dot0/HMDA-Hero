<script>
  import {
    ausSystemOther,
    ausSystem1,
    ausSystem2,
    ausSystem3,
    ausSystem4,
    ausSystem5
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
    <label for="AUSFree">AUS System Free Form Text</label>
  </span>
  <span slot="helpers">
    <RegLink regUrl="https://www.consumerfinance.gov/rules-policy/regulations/1003/4/#a-35"/>
    <Modal
      idName="AUSSystemModal"
      modalTitle="AUS System Free Form Text"
      modalBody="<p> Specify in text the Other Automated Underwriting
      System(s) if 5 is entered. </p> <p>Otherwise, leave this data field
      blank</p>" />
    <!-- TODO
    Stripping out for now. Needs works.  -->
    <!-- <QualityErrors errors=1 idName="AUSFreeQualityErrors" errorsHTML=""/>
    <ValidityErrors errors=2 idName="AUSFreeValidityErrors" errorsHTML=""/> -->
  </span>
  <span slot="input">
    <input
      class="form-control"
      type="text"
      id="AUSFree"
      bind:value={$ausSystemOther} 
      on:change={ausSystemOther.change}/>
    {#if $ausSystem1 == 5 || $ausSystem2 == 5 || $ausSystem3 == 5 || $ausSystem4 == 5 || $ausSystem5 == 5}
      {#if $ausSystemOther !== ''}
        <HRValidation isValid={true} />
      {:else}
        <HRValidation />
      {/if}
    {/if}
  </span>
</DataFieldFormat>