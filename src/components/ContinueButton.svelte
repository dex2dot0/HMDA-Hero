<script>
    import { cancelAddLoanChanges } from "../Scripts/cancelAddLoanChanges.js";
    import { cancelChanges } from "../Scripts/cancelChanges.js";
    import { updateRow } from "../Excel Scripts/updateRow.js";
    import { action, editRow, editRowData } from "../stores.js";
    import { goto } from "@sapper/app";

    async function revertChanges() {
        console.log("Cancelling changes");
        if ($action == "edit") {
            //cancelChanges();
            updateRow($editRow, $editRowData)
            await goto("/cancel-changes");
        } else {
            cancelAddLoanChanges($editRow);
            await goto("/cancel-changes");
        }
    }
</script>

<style>
    .btn-continue {
        border-color: #484644;
        color: #fff;
        background-color: #217346;
        margin-left: 10px;
    }
</style>

<button
    type="button"
    class="btn btn-continue"
    data-dismiss="modal"
    on:click={revertChanges}>
    Continue
</button>
