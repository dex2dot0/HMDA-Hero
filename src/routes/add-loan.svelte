<script>
  import AddLoan from "../components/AddLoan.svelte";
  import LoanDetails from "../components/LoanDetails.svelte";
  import PropertyInformation from "../components/PropertyInformation.svelte";
  import BorrowerInformation from "../components/BorrowerInformation.svelte";
  import UnderwritingDetails from "../components/UnderwritingDetails.svelte";
  import HMDAInformation from "../components/HMDAInformation.svelte";
  import CancelDialog from "../components/CancelDialog.svelte";
  import { action, LEI, editRow } from "../stores.js";
  import Checkbox from "../components/Checkbox.svelte";
  import { getLEI } from "../Excel Scripts/getLEI.js";
  import { onMount } from "svelte";
  import { getEndRow } from "../Excel Scripts/getEndRow.js";

  let activeOpt = "Loan";
  //Running media queries to determine what to display. If screen is larger, show everything.
  //If screen is smaller, only show one section at a time with a menu.
  action.set("add");
  let newRow;

  //Attempt to retrieve LEI
  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function () {
        //Attempt to pull LEI from Excel File
        if ($LEI == "") {
          console.log("attempting to set LEI from Excel file");
          try {
            let leiFromExcel = await getLEI();
            let leiArray = leiFromExcel[0];
            newRow = await getEndRow();
            newRow = Number(newRow) + 1;
            editRow.set(newRow);
            LEI.change(leiArray[0]);
            LEI.originalValue(leiArray[0]);
          } catch (error) {
            console.log("Error attempting to set LEI from Excel file");
            console.log(error);
          }
        }
      });
    }
  })();
</script>

<style>
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .input-group-sm {
      padding-left: none;
    }
    .navbar-collapse {
      padding-left: none;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    .input-group-sm {
      padding-left: none;
    }
    .navbar-collapse {
      padding-left: none;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .input-group-sm {
      padding-left: 40px;
    }
    .navbar-collapse {
      padding-left: none;
    }
  }

  /* Extra Large Screens (desktops, 992px and up) */
  @media (min-width: 1200px) {
    .navbar-collapse {
      padding-left: 10%;
    }
  }

  .card {
    width: 100%;
  }

  nav {
    padding: 0;
  }

  nav {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #323130;
    min-height: 50px;
  }

  h3 {
    color: #4e9668;
  }

  .custom-select {
    text-align: center;
    background-color: #323130;
    color: #fff;
    border-color: #4e9668;
  }

  .custom-select:focus,
  .custom-select:active {
    box-shadow: none !important;
    outline: 0px !important;
  }

  .input-group
    > .input-group-append:last-child
    > .input-group-text:not(:last-child),
  .input-group > .input-group-append:not(:last-child) > .input-group-text {
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    background-color: #323130;
    border: none;
    color: #4e9668;
  }
</style>

<svelte:head>
  <title>Loan Editor</title>
</svelte:head>

<form class="shadow-sm mb-5 bg-white rounded">
  <AddLoan />
  <nav class="navbar navbar-expand-lg navbar-dark align-items-center pb-1">
    <div class="navbar-brand">
      <h3 class="pr-3 pl-3">NEW LOAN RECORD</h3>
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <div class="input-group input-group-sm">
            <div class="input-group-append">
              <label class="input-group-text" for="activeOp">
                Currently Editing...
              </label>
            </div>
            <select
              class="custom-select pl-2"
              id="activeOpt"
              bind:value={activeOpt}>
              <option value="Loan">Loan Details</option>
              <option value="Property">Property Information</option>
              <option value="Borrower">Borrower Information</option>
              <option value="Underwriting">Underwriting Details</option>
              <option value="HMDA">HMDA Information</option>
            </select>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <CancelDialog
          idName="CancelChangesModal"
          modalTitle="Cancel Confiration"
          modalBody="<p>Are you sure you want to cancel your changes?</p>" />
      </form>
    </div>
  </nav>

  {#if activeOpt === 'Loan'}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Loan Details</h5>
        <LoanDetails />
      </div>
    </div>
  {/if}

  {#if activeOpt === 'Property'}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Property Information</h5>
        <PropertyInformation />
      </div>
    </div>
  {/if}

  {#if activeOpt === 'Borrower'}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Borrower Information</h5>
        <BorrowerInformation />
      </div>
    </div>
  {/if}

  {#if activeOpt === 'Underwriting'}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Underwriting Details</h5>
        <UnderwritingDetails />
      </div>
    </div>
  {/if}

  {#if activeOpt === 'HMDA'}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">HMDA Information</h5>
        <HMDAInformation />
      </div>
    </div>
  {/if}
</form>
