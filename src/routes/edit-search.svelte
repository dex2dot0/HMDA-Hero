<script>
  import { goto } from "@sapper/app";
  import { LEI } from "../stores.js";
  import mediaStore from "../mediaStore.js";
  import Media from "../components/Media.svelte";
  import Modal from "../components/Modal.svelte";
  import { writable, get } from "svelte/store";
  import { getEndRow } from "../Excel Scripts/getEndRow.js";
  import { getULIColumn } from "../Excel Scripts/getULIColumn.js";
  import { getAddressColumn } from "../Excel Scripts/getAddressColumn.js";
  import { getLoanTypeColumn } from "../Excel Scripts/getLoanTypeColumn.js";
  import { getActionTakenColumn } from "../Excel Scripts/getActionTakenColumn.js";
  import { getActionTakenDateColumn } from "../Excel Scripts/getActionTakenDateColumn.js";
  import { getRowByULI } from "../Excel Scripts/getRowByULI.js";
  import { getULIAddress } from "../Excel Scripts/getULIAddress.js";
  import { getDataByRow } from "../Excel Scripts/getDataByRow.js";
  import { loadEditDataToStore } from "../Scripts/loadEditDataToStore.js";
  import { getLEI } from "../Excel Scripts/getLEI.js";
  import { getRowNumberByULI } from "../Excel Scripts/getRowNumberByULI.js";

  let selected;
  let searchTerm;
  let results = getData();
  let data;
  let endRow;
  let width = 800;
  let showLoanNumbers = false;

  //Attempt to retrieve LEI
  (async () => {
    if (process.browser) {
      await Office.onReady().then(async function() {
        //Attempt to pull LEI from Excel File
        if ($LEI == "") {
          try {
            let leiFromExcel = await getLEI();
            let leiArray = leiFromExcel[0];
            LEI.set(leiArray[0]);
          } catch (error) {
            console.log("Error attempting to set LEI from Excel file");
            console.log(error);
          }
        }
      });
    }
  })();

  async function getData() {
    if (process.browser) {
      console.log("fetching data");
      try {
        let endRow = await getEndRow();
        //Get all column data in async
        let loanNumberArray = [];
        let uliArray = await getULIColumn(endRow);
        let addressArray = await getAddressColumn(endRow);
        let loanTypeArray = await getLoanTypeColumn(endRow);
        let actionTakenArray = await getActionTakenColumn(endRow);
        let actionTakenDateArray = await getActionTakenDateColumn(endRow);

        //Convert values to text
        let loanType = await filterLoanType(loanTypeArray);
        let actionType = await filterActionType(actionTakenArray);
        let actionDates = await formatActionDates(actionTakenDateArray);

        //process to get Loan Number from ULI
        let loanNumbers = await getLoanNumbers(uliArray);
        let records = [];

        for (let record = 0; record < uliArray.length; record++) {
          records.push({
            loanNumber: loanNumbers[record],
            ULI: uliArray[record],
            address: addressArray[record],
            loanType: loanType[record],
            actionTaken: actionType[record],
            actionTakenDate: actionDates[record]
          });
        }

        //Store all to results
        data = records;
        return records;
      } catch (error) {
        if (error.message.includes("Excel is not defined")) {
          console.log(
            `Excel doesn't exist outside the add-in, returning boilerplate data`
          );
          showLoanNumbers = true;
          let records = [
            {
              loanNumber: "123456789",
              ULI: "10Bx939c5543TqA1144M12345678970",
              address: "123 Samson Way",
              loanType: "Conv",
              actionTaken: "Originated",
              actionTakenDate: "01/01/2019"
            },
            {
              loanNumber: "987654321",
              ULI: "10Bx939c5543TqA1144M98765432197",
              address: "321 Robertson Ln",
              loanType: "FHA",
              actionTaken: "Originated",
              actionTakenDate: "07/21/2019"
            },
            {
              loanNumber: "543219876",
              ULI: "10Bx939c5543TqA1144M54321987620",
              address: "9871 Buttercup Rd",
              loanType: "VA",
              actionTaken: "Withdrawn",
              actionTakenDate: "09/15/2019"
            }
          ];
          data = records;
          return records;
        } else {
          console.log(error);
          return error;
        }
      }
    }
  }

  async function filterLoanType(loanTypeArray) {
    let loanTypes = [];
    for (let i = 0; i < loanTypeArray.length; i++) {
      let lt = loanTypeArray[i][0];
      try {
        switch (lt) {
          case "1":
            loanTypes.push("Conv");
            break;
          case "2":
            loanTypes.push("FHA");
            break;
          case "3":
            loanTypes.push("VA");
            break;
          case "4":
            loanTypes.push("USDA/FSA");
            break;
          default:
            loanTypes.push("");
        }
      } catch (error) {
        console.log(error);
        loanTypes.push("Error");
      }
    }
    return loanTypes;
  }

  async function filterActionType(actionTakenArray) {
    let actionTypes = [];
    for (let i = 0; i < actionTakenArray.length; i++) {
      let action = actionTakenArray[i][0];
      try {
        switch (action) {
          case "1":
            actionTypes.push("Originated");
            break;
          case "2":
            actionTypes.push("ANA");
            break;
          case "3":
            actionTypes.push("Denied");
            break;
          case "4":
            actionTypes.push("Withdrawn");
            break;
          case "5":
            actionTypes.push("Incomplete");
            break;
          case "6":
            actionTypes.push("Purchased");
            break;
          case "7":
            actionTypes.push("Pre-App Denied");
            break;
          case "8":
            actionTypes.push("Pre-App ANA");
            break;
          default:
            actionTypes.push("");
        }
      } catch (error) {
        console.log(error);
        actionTypes.push("Error");
      }
    }
    return actionTypes;
  }

  async function formatActionDates(actionTakenDateArray) {
    let formattedDates = [];
    for (let i = 0; i < actionTakenDateArray.length; i++) {
      let date = actionTakenDateArray[i][0];
      try {
        formattedDates.push(
          `${date.slice(4, 6)}/${date.slice(6)}/${date.slice(0, 4)}`
        );
      } catch (error) {
        console.log(error);
        formattedDates.push("");
      }
    }
    return formattedDates;
  }

  async function getLoanNumbers(uliArray) {
    let loanNumbers = [];
    if ($LEI !== "") {
      let leiCopy = get(LEI);
      for (let i = 0; i < uliArray.length; i++) {
        try {
          let uli = uliArray[i][0];
          let loanNumber = uli.slice(leiCopy.length, uli.length - 2);
          loanNumbers.push(loanNumber);
          showLoanNumbers = true;
        } catch (error) {
          console.log(error);
          loanNumbers.push("Error");
        }
      }
    } else {
      for (let i = 0; i < uliArray.length; i++) {
        loanNumbers.push("");
      }
    }
    return loanNumbers;
  }

  async function search() {
    //perform search against data set using js-search
    if (searchTerm == undefined || searchTerm == "") {
      //If no searchTerm display all results
      results = data;
    } else {
      let search = new JsSearch.Search("ULI");
      if (selected == "ULI" || selected == "loanNumber") {
        //Less performant but will match results without requiring prefix
        search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
      }
      search.addDocuments(data);
      search.addIndex(selected);
      let sResults = search.search(searchTerm);
      results = sResults;
    }
  }

  async function editLoan(ULI) {
    console.log(`editLoan function engaged for ULI: ${ULI}`);
    try {
      let endRow = await getEndRow();
      console.log(`endRow is ${endRow}`);
      //retrieve data
      let uliData = await getRowByULI(ULI[0], endRow);
      let editData = uliData[0];

      //Get editRow
      let editRow = await getRowNumberByULI(ULI[0], endRow);

      //Update store data with data retrieved
      await loadEditDataToStore(editData, editRow).then(() => {
        goto("/edit-loan");
      });

      //redirect to /loan in edit mode
    } catch (error) {
      if (error.message.includes("Excel is not defined")) {
        console.log(
          `Excel doesn't exist outside the add-in, returning boilerplate data`
        );
      } else {
        console.log(error);
      }
    }
  }
</script>

<style>
  .container {
    width: 95%;
  }

  label {
    padding-right: 5px;
  }

  input {
    min-width: 300px;
  }

  .form-group {
    padding-right: 10px;
  }

  div.card:hover {
    background-color: #ececec;
  }

  .card-text {
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>Loan Search</title>
</svelte:head>
<div class="container">
  <form class="shadow-sm bg-white rounded">
    <nav class="navbar navbar-light bg-light justify-content-between">
      <h3>
        Find a Loan to Edit
        <Modal
          idName="editLoanModal"
          modalTitle="Searching"
          modalBody="<p>Searching relies on your data having ULIs/NULIs entered.
          If you do not have ULIs or NULIs entered for your data, you may
          experience issues with searching for loans</p>" />
      </h3>

      <form class="form-inline">
        <div class="form-group">
          <label for="searchCategory">Search By</label>
          <select
            class="form-control"
            id="searchCategory"
            bind:value={selected}
            on:change={search}>
            <option value="loanNumber">Loan Number</option>
            <option value="ULI">ULI</option>
            <option value="address">Address</option>
            <option value="loanType">Loan Type</option>
            <option value="actionTaken">Action Taken</option>
          </select>
        </div>
        {#if selected === 'loanType'}
          <select
            class="form-control"
            id="searchCategory"
            bind:value={searchTerm}
            on:change={search}>
            <option selected />
            <option value="Conv">
              1. Conventional (not insured or guaranteed by FHA, VA, RHS, or FSA
            </option>
            <option value="FHA">
              2. Federal Housing Adminitration insured (FHA)
            </option>
            <option value="VA">3. Veterans Affairs guaranteed (VA)</option>
            <option value="USDA/FSA">
              4. USDA Rural Housing Service or Farm Service Agency guaranteed
              (RHS or FSA)
            </option>
          </select>
        {:else if selected === 'actionTaken'}
          <select
            class="form-control"
            id="searchCategory"
            bind:value={searchTerm}
            on:change={search}>
            <option selected />
            <option value="Originated">1. Loan origination</option>
            <option value="ANA">
              2. Application approved but not accepted
            </option>
            <option value="Denied">3. Application denied</option>
            <option value="Withdrawn">4. App withdrawn by applicant</option>
            <option value="Incomplete">
              5. File closed for incompleteness
            </option>
            <option value="Purchased">6. Purchased loan</option>
            <option value="Pre-App Denied">
              7. Preapproval request denied
            </option>
            <option value="Pre-App ANA">
              8. Preapproval request approved but not accepted
            </option>
          </select>
        {:else if $LEI === '' && selected == 'loanNumber'}
          <input
            class="form-control mr-sm-2"
            type="search"
            aria-label="Search"
            bind:value={searchTerm}
            on:input={search}
            disabled />
        {:else}
          <input
            class="form-control mr-sm-2"
            type="search"
            aria-label="Search"
            bind:value={searchTerm}
            on:input={search} />
        {/if}
      </form>
    </nav>
  </form>
  <hr />
  {#await results}
    Loading...
  {:then results}
    {#if results.length == 0}
      <form class="shadow-sm mb-5 bg-white rounded">
        <h5>No results found</h5>
      </form>
    {/if}
    {#if results.length > 0}
      {#if $LEI === '' && selected == 'loanNumber'}
        <form class="shadow-sm mb-5 bg-white rounded">
          <h5 style="color:#dc3545; background-color:#eee;">
            You cannot search by Loan Number until you have entered your LEI in
            the settings menu
          </h5>
        </form>
      {:else}
        <form class="shadow-sm p-1 mb-5 bg-white rounded">
          double click a result to edit the loan
          <Media query={'(min-width: ' + width + 'px)'} let:matches>
            {#if matches}
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead class="thead-dark">
                    <tr>
                      {#if showLoanNumbers && selected !== 'ULI'}
                        <th scope="col">Loan #</th>
                        <th scope="col">Address</th>
                        <th scope="col">Loan Type</th>
                        <th scope="col">Action Taken</th>
                        <th scope="col">Action Taken Date</th>
                      {:else}
                        <th scope="col">ULI</th>
                        <th scope="col">Address</th>
                        <th scope="col">Loan Type</th>
                        <th scope="col">Action Taken</th>
                        <th scope="col">Action Taken Date</th>
                      {/if}
                    </tr>
                  </thead>
                  <tbody>
                    {#if showLoanNumbers && selected !== 'ULI'}
                      {#each results as { loanNumber, ULI, address, loanType, actionTaken, actionTakenDate }}
                        <tr
                          on:dblclick={() => {
                            editLoan(ULI);
                          }}>
                          <th scope="row">{loanNumber}</th>
                          <td>{address}</td>
                          <td>{loanType}</td>
                          <td>{actionTaken}</td>
                          <td>{actionTakenDate}</td>
                        </tr>
                      {/each}
                    {:else}
                      {#each results as { loanNumber, ULI, address, loanType, actionTaken, actionTakenDate }}
                        <tr
                          on:dblclick={() => {
                            editLoan(ULI);
                          }}>
                          <th scope="row">{ULI}</th>
                          <td>{address}</td>
                          <td>{loanType}</td>
                          <td>{actionTaken}</td>
                          <td>{actionTakenDate}</td>
                        </tr>
                      {/each}
                    {/if}
                  </tbody>
                </table>
              </div>
            {:else if showLoanNumbers && selected !== 'ULI'}
              {#each results as { loanNumber, ULI, address, loanType, actionTaken, actionTakenDate }}
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">Loan Number: {loanNumber}</h6>
                    <h6 class="card-text">{address}</h6>
                    <h6 class="card-text">{loanType}</h6>
                    <h6 class="card-text">Action: {actionTaken}</h6>
                    <h6 class="card-text">Action Date: {actionTakenDate}</h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      on:click={() => {
                        editLoan(ULI);
                      }}>
                      Edit Loan
                    </button>
                  </div>
                </div>
              {/each}
            {:else}
              {#each results as { loanNumber, ULI, address, loanType, actionTaken, actionTakenDate }}
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">ULI: {ULI}</h6>
                    <h6 class="card-text">{address}</h6>
                    <h6 class="card-text">{loanType}</h6>
                    <h6 class="card-text">Action: {actionTaken}</h6>
                    <h6 class="card-text">Action Date: {actionTakenDate}</h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      on:click={() => {
                        editLoan(ULI);
                      }}>
                      Edit Loan
                    </button>
                  </div>
                </div>
              {/each}
            {/if}
          </Media>
        </form>
      {/if}
    {/if}
  {/await}
</div>
