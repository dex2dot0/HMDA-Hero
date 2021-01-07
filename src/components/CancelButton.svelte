<script>
    async function abandon() {
        console.log("Cancel changes abandoned. Changes will remain.");
    }
</script>

<style>
    .btn {
        background-color: #484644;
        color: #fff;
        margin-left: 10px;
    }
</style>

<button type="button" class="btn" data-dismiss="modal" on:click={abandon}>
    Cancel
</button>
