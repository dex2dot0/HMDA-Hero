<!--
    This component is used when a user is trying to cancel changes made within the HMDA Hero UI that have applied to Excel. 
    The button specifically is used to cancel this process, e.g. do not revert changes and continue editing.
-->
<script>
  async function abandon() {
    console.log('Cancel changes abandoned. Changes will remain.');
  }
</script>

<style>
  .btn {
    background-color: #484644;
    color: #fff;
    margin-left: 10px;
  }
</style>

<button type="button" class="btn" data-dismiss="modal" on:click="{abandon}">
  Cancel
</button>
