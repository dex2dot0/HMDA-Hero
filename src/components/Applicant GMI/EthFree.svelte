<script>
    import {
      applicantEthOther
    } from "./../../stores.js";
    import Modal from "../Modal.svelte";
</script>

<label for="EthFree" style="font-size: 9px;">
    Free Form for Other Hispanic or Latino
  </label>
  <Modal
    idName="AppEthFreeModal"
    modalTitle="Ethnicity: Free Form for Other Hispanic or Latino"
    modalBody="<p> Specify in text the Applicant or borrower's Other Hispanic
    or Latino ethnicity(ies) provided by the Applicant or Borrower. </p>
    <p>Otherwise, leave this data field blank</p>" />
  <input
    class="form-control"
    type="text"
    id="EthFree"
    bind:value={$applicantEthOther}
    on:change={applicantEthOther.change} />